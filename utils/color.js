export default class Color {
  constructor(val) {
    if (val instanceof Color) {
      this.alpha = val.alpha;
      this.chroma = val.chroma;
      this.hue = val.hue;
      this.luminance = val.luminance;
      return;
    }

    const [r, g, b, a] = parseRGBA(val);

    this.alpha = a;

    [this.hue, this.chroma, this.luminance] = rgbToHCL(r, g, b);
  }

  blend(color) {
    color = new Color(color);
    color.hue = ((color.hue + this.hue) / 2) % 360;
    color.chroma = (color.chroma + this.chroma) / 2;
    color.luminance = (color.luminance + this.luminance) / 2;
    return color;
  }

  darken(amount) {
    const color = new Color(this);
    const { luminance } = this;

    color.luminance -= luminance * amount;

    return color;
  }

  lighten(amount) {
    const color = new Color(this);
    const { luminance } = this;

    color.luminance += (1 - luminance) * amount;

    return color;
  }

  saturate(amount) {
    const color = new Color(this);
    color.chroma *= amount;
    return color;
  }

  setAlpha(alpha) {
    return Object.assign(new Color(this), { alpha });
  }

  toString() {
    if (this.alpha === 0) return 'transparent';

    const rgb = hclToRGB(this.hue, this.chroma, this.luminance).map(Math.round);

    if (this.alpha === 1) {
      const str = `#${
        rgb
          .reduce((acc, val) => (acc << 8) | val)
          .toString(16)
          .padStart(6, 0)
          .toUpperCase()
        }`;

      switch (str) {
        case '#000000': return 'black';
        case '#FFFFFF': return 'white';
        default: return str;
      }
    }

    return `rgba(${rgb.join(', ')}, ${this.alpha.toFixed(4)})`;
  }

  isColorDarkForInversion() {
    // dark enough to invert related colors
    return this.alpha > 0.5 && this.luminance < 0.8;
    // return this.alpha !== 0 // not transparent
  }
}

////////////////////////////////////////////////////////////////////////////////
//
// Adapted from previous work I’ve done (https://github.com/catbeef/color-input)
// but ported quick & could probably be improved / simplified for this use case.

const
  _X0 = 0.4124564, _X1 = 0.3575761, _X2 = 0.1804375,
  _Y0 = 0.2126729, _Y1 = 0.7151522, _Y2 = 0.0721750,
  _Z0 = 0.0193339, _Z1 = 0.1191920, _Z2 = 0.9503041,
  R0 = 3.2404542, R1 = 1.5371385, R2 = 0.4985314,
  G0 = -0.9692660, G1 = 1.8760108, G2 = 0.0415560,
  B0 = 0.0556434, B1 = 0.2040259, B2 = 1.0572252,
  MAX_BYTE = 0xFF, MAX_CHROMA = 134, MAX_HUE = 360, MAX_LUMINANCE = 100,
  DEG2RAD = Math.PI / 180, RAD2DEG = 180 / Math.PI,
  RGB_DIV0 = 12.92, RGB_DIV1 = 1.055,
  RGB_OFF = 0.055,
  RGB_PIV = 0.04045, RGB_PIV2 = 0.0031308,
  RGB_POW = 2.4, RGB_POW2 = 1 / 2.4, XYZ_POW = 3,
  T0 = 4 / 29, T1 = 6 / 29, T2 = 3 * (T1 ** 2), T3 = T1 ** 3,
  THIRD = 1 / 3,
  X0 = 500, XN = 0.950470, Y0 = 16, Y1 = 116, Z0 = 200, ZN = 1.088830;

const rgbaStrMap = new Map([
  [3, { hasAlpha: false, short: true }],
  [4, { hasAlpha: true, short: true }],
  [6, { hasAlpha: false, short: false }],
  [8, { hasAlpha: true, short: false }]
]);

function hclToRGB(xH, yC, zL) {
  const h = xH * MAX_HUE;
  const c = yC * MAX_CHROMA;
  const l = zL * MAX_LUMINANCE;

  // hcl -> lab

  const H = h * DEG2RAD;
  const A = Math.cos(H) * c;
  const B = Math.sin(H) * c;

  // lab -> xyz

  const y = (l + Y0) / Y1;
  const x = Number.isNaN(A) ? y : y + A / X0;
  const z = Number.isNaN(B) ? y : y - B / Z0;
  const Y = y > T1 ? y ** XYZ_POW : T2 * (y - T0);
  const X = XN * (x > T1 ? x ** XYZ_POW : T2 * (x - T0));
  const Z = ZN * (z > T1 ? z ** XYZ_POW : T2 * (z - T0));

  // xyz -> rgb

  const R = R0 * X - R1 * Y - R2 * Z;
  const G = G0 * X + G1 * Y + G2 * Z;
  const V = B0 * X - B1 * Y + B2 * Z;

  const rr = MAX_BYTE *
    (R <= RGB_PIV2 ? RGB_DIV0 * R : RGB_DIV1 * (R ** RGB_POW2) - RGB_OFF);

  const gg = MAX_BYTE *
    (G <= RGB_PIV2 ? RGB_DIV0 * G : RGB_DIV1 * (G ** RGB_POW2) - RGB_OFF);

  const bb = MAX_BYTE *
    (V <= RGB_PIV2 ? RGB_DIV0 * V : RGB_DIV1 * (V ** RGB_POW2) - RGB_OFF);

  return [rr, gg, bb].map(n => n < 0 ? 0 : n > MAX_BYTE ? MAX_BYTE : n);
}

function parseRGBA(val) {
  const str = String(val).trim().toLowerCase();

  if (str === 'white') return [1, 1, 1, 1];
  if (str === 'black') return [0, 0, 0, 1];

  return parseRGBAFunc(str) || parseRGBAHex(str);
}

function parseRGBAFunc(str) {
  if (str.endsWith(')')) {
    if (str.startsWith('rgba(')) {
      const vals = str.slice(5, -1).trim().split(/\s*,\s*/g).map(Number);

      if (vals.every(val => val >= 0 && val <= MAX_BYTE)) {
        return vals.map(val => val / 0xFF);
      }
    } else if (str.startsWith('rgb(')) {
      const vals = str.slice(4, -1).trim().split(/\s*,\s*/g).map(Number);

      if (vals.every(val => val >= 0 && val <= MAX_BYTE)) {
        return [...vals.map(val => val / MAX_BYTE), 1];
      }
    }
  }
}

function parseRGBAHex(str) {
  if (str.startsWith('#')) str = str.slice(1);

  if (!/^(?:[\da-f]{3,4}){1,2}$/i.test(str)) {
    return [0, 0, 0, 0];
  }

  const num = Number.parseInt(str, 16);
  const { hasAlpha, short } = rgbaStrMap.get(str.length);

  const values = short
    ? [0, 1, 2, 3].map(i => num >> (i * 4) & 0xF).map(n => n << 4 | n)
    : [0, 1, 2, 3].map(i => num >> (i * 8) & MAX_BYTE);

  if (!hasAlpha) values.pop();

  values.reverse();

  const [r, g, b, a = MAX_BYTE] = values;

  return [r, g, b, a].map(n => n / MAX_BYTE);
}

function rgbToHCL(r, g, b) {
  const [L, A, B] = rgbToLAB(r, g, b);

  const h = Math.atan2(B, A) * RAD2DEG;
  const H = h < 0 ? h + MAX_HUE : h;
  const C = Math.sqrt(A * A + B * B);

  return [H / MAX_HUE, C / MAX_CHROMA, L / MAX_LUMINANCE];
}

function rgbToLAB(R, G, B) {
  const v = R <= RGB_PIV ? R / RGB_DIV0 : ((R + RGB_OFF) / RGB_DIV1) ** RGB_POW;
  const a = G <= RGB_PIV ? G / RGB_DIV0 : ((G + RGB_OFF) / RGB_DIV1) ** RGB_POW;
  const l = B <= RGB_PIV ? B / RGB_DIV0 : ((B + RGB_OFF) / RGB_DIV1) ** RGB_POW;

  const x = (_X0 * v + _X1 * a + _X2 * l) / XN;
  const y = _Y0 * v + _Y1 * a + _Y2 * l;
  const z = (_Z0 * v + _Z1 * a + _Z2 * l) / ZN;

  const X = x > T3 ? x ** THIRD : x / T2 + T0;
  const Y = y > T3 ? y ** THIRD : y / T2 + T0;
  const Z = z > T3 ? z ** THIRD : z / T2 + T0;

  return [
    Y1 * Y - Y0,
    X0 * (X - Y),
    Z0 * (Y - Z)
  ];
}
