import ClassNames from '../../utils/classnames';
import propTypes from 'prop-types';
import COLORS, { WISTIA_BRAND_COLORS } from '../../utils/colors';
import DIMENSIONS from '../../utils/dimensions';

const COLOR_MODES = {
  dark: {
    swoopBottom: WISTIA_BRAND_COLORS.TUNA,
    swoopTop: WISTIA_BRAND_COLORS.TUNA,
    text: WISTIA_BRAND_COLORS.TUNA
  },
  light: {
    swoopBottom: COLORS.GRAY_1,
    swoopTop: COLORS.GRAY_1,
    text: COLORS.GRAY_1
  },
  monoblue: {
    swoopBottom: COLORS.SKY_BLUE,
    swoopTop: COLORS.SKY_BLUE,
    text: COLORS.SKY_BLUE
  },
  standard: {
    swoopBottom: WISTIA_BRAND_COLORS.BLEU_DE_FRANCE,
    swoopTop: WISTIA_BRAND_COLORS.MAYA_BLUE,
    text: WISTIA_BRAND_COLORS.TUNA
  },
  white: {
    swoopBottom: 'white',
    swoopTop: 'white',
    text: 'white'
  },
};

const NEUTRAL_LETTER_TRANSFORM = 'translate(0 0) scale(1 1) translate(0 0)';

const WIDTHS = {
  'standard': height => {
    return 3.796875 * height;
  },
  'swoopies-only': height => {
    return 1.05 * height;
  },
  'swoopies-unpadded': height => {
    return 1.05 * height;
  },
  'text-only': height => {
    return WIDTHS.standard(height) - height;
  }
};

const WistiaLogo = ({ color, height, mode, ...props }) => {
  // Although more complex than CSS transformations, using SVG transformations
  // (that is, the transform attribute) supports more browsers. The main rub is
  // you need to know the center point of each object of interest; there’s no
  // shortcut to transform-origin:center. The way I figure those numbers out for
  // paths, polylines, etc that don’t have obvious center coordinates is:
  //
  //  (1) I position the SVG absolutely at 0,0 in the viewport
  //  (2) I size the SVG so 1 pixel === 1 viewport unit
  //  (3) I make sure no transforms are applied, so that each element is in the
  //      original coordinate system
  //  (3) I call getClientRects() on each element of interest and...
  //      - rect.left + rect.width / 2 is the x coordinate
  //      - rect.top + rect.height / 2 is the y coordinate
  //
  // Those will be the same as transform-origin center, but note that this may
  // not always be the "center" you want. The most obvious example is the center
  // of an equilateral triangle. Picture it with one side horizontal at the
  // bottom. If you draw the smallest rectangle around that contains the whole
  // shape, and take its center (which is what transform-origin: center or the
  // method described above does) it will not make sense optically — the "real"
  // center coordinate’s y value will be off by a bit. The difference is clear
  // if you picture what should happen if you rotate it. As the triangle turns,
  // you probably expect all the points all move through a _single circle_, but
  // if we take the rectangular center, it will "wobble" instead. In other
  // words, the true center is the point which is equidistant to each of the
  // three points on the triangle, not the point which is equidistant from each
  // of the points on the rectangle we drew. Totally tangential — just something
  // to keep in mind!

  const textHidden = mode === 'swoopies-only' || mode === 'swoopies-unpadded';
  const swoopiesHidden = mode === 'text-only';

  const swoopiesTransform =
    mode === 'swoopies-unpadded' ? 'scale(1.55) translate(-20 -22)' :
    mode === 'swoopies-only' ? 'scale(1) translate(5)' :
    'scale(1) translate(0 0)';

  const textTransform =
    swoopiesHidden ? 'translate(-110 0)' :
    textHidden ? 'translate(110 0)' :
    'translate(0 0)';

  const letterTransformW = textHidden
    ? 'translate(169 63) scale(0 1) translate(-169 -63)'
    : NEUTRAL_LETTER_TRANSFORM;

  const letterTransformI1 = textHidden
    ? 'translate(236 63) scale(0 1) translate(-236 -63)'
    : NEUTRAL_LETTER_TRANSFORM;

  const letterTransformS = textHidden
    ? 'translate(276 62) scale(0 1) translate(-276 -62)'
    : NEUTRAL_LETTER_TRANSFORM;

  const letterTransformT = textHidden
    ? 'translate(331 62) scale(0 1) translate(-331 -62)'
    : NEUTRAL_LETTER_TRANSFORM;

  const letterTransformI2 = textHidden
    ? 'translate(377 63) scale(0 1) translate(-377 -63)'
    : NEUTRAL_LETTER_TRANSFORM;

  const letterTransformA = textHidden
    ? 'translate(425 62) scale(0 1) translate(-425 -62)'
    : NEUTRAL_LETTER_TRANSFORM;

  return (
    <svg
      height={height}
      preserveAspectRatio="xMinYMid slice"
      style={{ height, width: WIDTHS[mode](height) }}
      viewBox="0 0 486 128"
      {...props}>
      <g
        className="WistiaLogo--swoopies"
        opacity={swoopiesHidden ? '0' : '1'}
        transform={swoopiesTransform}>
        <path
          d="
            M104.5,43.8c1.8-10.8-4.3-13.8-4.3-13.8s0.3,8.8-15.9,10.7c-14.4,1.7
            -62.5,0.4-62.5,0.4s0,0,15.5,17.8c4.2,4.8,6.4,5.4,11.1,5.7c4.7,0.3
            15.1,0.2,22.2-0.3c7.7-0.6,18.7-3.1,26.1-8.9C100.4,52.4,103.7,48.3
            104.5,43.8z
          "
          fill={COLOR_MODES[color].swoopTop}/>
        <path
          d="
            M105.5,55c0,0-1.9,3.9-11.6,10c-4.1,2.6-12.7,5.4-23.7,6.4c-6,0.6-16.9
            0.1-21.6,0.1c-4.7,0-6.9,1-11.1,5.8 C21.7,94.9,21.7,94.9,21.7,94.9s
            5.4,0,9.5,0c4.1,0,29.7,1.5,41-1.6C109.1,83.1,105.5,55,105.5,55z
          "
          fill={COLOR_MODES[color].swoopBottom}/>
      </g>
      <g
        className="WistiaLogo--text"
        fill={COLOR_MODES[color].text}
        opacity={textHidden ? '0' : '1'}
        transform={textTransform}>
        <path
          d="
            M210,29.8h9.4l-26.5,65.8h-2.1l-21.4-53.3l-21.6,53.3h-2l-26.4-65.8h
            9.4l18,45.1L165,29.8h8.9l18.3,45.1L210,29.8z
          "
          transform={letterTransformW}/>
        <path
          d="M231.5,29.8h9.4v65.5h-9.4V29.8z"
          transform={letterTransformI1}/>
        <path
          d="
            M276.4,67.8l-7.1-4.3c-4.5-2.7-7.6-5.4-9.5-8.1c-1.9-2.6-2.8-5.7-2.8
            -9.1c0-5.2,1.8-9.3,5.4-12.6c3.6-3.2,8.2-4.8,13.9-4.8c5.5,0,10.5,1.5
            15,4.6v10.6c-4.7-4.5-9.8-6.8-15.2-6.8c-3.1,0-5.6,0.7-7.5,2.1c-2,1.4
            -3,3.2-3,5.4c0,2,0.7,3.8,2.2,5.5c1.5,1.7,3.8,3.5,7,5.4l7.2,4.2c8,4.8
            12,10.8,12,18.2c0,5.2-1.8,9.5-5.3,12.8c-3.5,3.3-8.1,4.9-13.7,4.9c
            -6.5,0-12.4-2-17.7-6V78.1c5.1,6.4,10.9,9.6,17.6,9.6c2.9,0,5.4-0.8
            7.3-2.5s2.9-3.7,2.9-6.1C285.1,75.2,282.2,71.4,276.4,67.8z
          "
          transform={letterTransformS}/>
        <path
          d="M303.4,29.7h54.7V38h-22.8v57.2h-9.4V38h-22.5V29.7z"
          transform={letterTransformT}/>
        <path
          d="M371.9,29.8h9.4v65.5h-9.4V29.8z"
          transform={letterTransformI2}/>
        <path
          d="
            M421.5,29.4h6.6l29.4,65.9h-9.6l-8.7-19.4h-27.9L403,95.3h-9.6L421.5
            29.4zM435.3,67.5l-10.6-23.7l-9.8,23.7H435.3z
          "
          transform={letterTransformA}/>
      </g>
      <style jsx>{`
        g, path {
          transition:
            fill linear ${ DIMENSIONS.BASE_MS }ms,
            opacity ease ${ DIMENSIONS.BASE_MS * 6 }ms,
            transform ease ${ DIMENSIONS.BASE_MS * 8 }ms;
        }

        svg {
          /* Ensure it will always fit on mobile */
          max-height: 22vw;
          max-width: 100%;
          transition: all ease-out ${ DIMENSIONS.BASE_MS * 4 }ms;
        }
      `}</style>
    </svg>
  );
};

Object.assign(WistiaLogo, {
  defaultProps: {
    color: 'standard',
    height: 128,
    mode: 'standard'
  },
  propTypes: {
    color: propTypes.oneOf(Object.keys(COLOR_MODES)),
    height: propTypes.number,
    mode: propTypes.oneOf(Object.keys(WIDTHS))
  }
});

export default WistiaLogo;
