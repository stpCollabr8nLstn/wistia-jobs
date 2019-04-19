import { Component } from 'react';
import ClassNames from '../../utils/classnames';
import propTypes from 'prop-types';
import { SOAPBOX_COLORS } from '../../utils/colors';
import DIMENSIONS from '../../utils/dimensions';

// This is the canonical transitionable Soapbox SVG which can become the text
// logo or any of the Soapbox icons. The version used in Soapbox has additional
// states that can be viewed at https://soapbox.wistia.com/style-guide. There
// are several other difference (this one is IE compatible; the way size is
// configured, hover-multi, etc).

export const MODES = [
  'camera',         // triangle-right left + square right
  'logo',           // full soapbox logo
  'splitscreen',    // person left + square right
  'trio',           // three shapes side by side (circle triangle square)
];

const WIDTHS = {
  camera      : height => height,
  logo        : height => height * 8,
  splitscreen : height => height * 2,
  trio        : height => height * 4,
};

export default class SoapboxLogos extends Component {
  static defaultProps = {
    className    : '',
    colorMode    : 'standard',
    height       : 15,
    mode         : 'logo',
    useLogoWidth : false
  };

  static propTypes = {
    className    : propTypes.string,
    colorMode    : propTypes.oneOf([
      'hover-multi',
      'multi',
      'night',
      'standard',
      'dark',
    ]),
    height       : propTypes.number,
    mode         : propTypes.oneOf(MODES),
    useLogoWidth : propTypes.bool
  };

  state = {
    mouseEntered: false
  };

  mouseEnterHandler = () =>
    this.setState({ mouseEntered: true });

  mouseLeaveHandler = () =>
    this.setState({ mouseEntered: false });

  render() {
    const {
      className,
      colorMode,
      height,
      mode,
      useLogoWidth,
      ...props
    } = this.props;

    const classNames = new ClassNames([
      'Soapbox', `Soapbox--${ mode }`, className
    ]);

    let letterColor, circleColor, squareColor, triangleColor;
    switch (colorMode) {
      case 'night':
        letterColor = circleColor = squareColor = triangleColor
          = SOAPBOX_COLORS.BLACK;
        break;
      case 'hover-multi':
        letterColor = this.state.mouseEntered
          ? SOAPBOX_COLORS.BLUE_MEDIUM
          : SOAPBOX_COLORS.BLUE_DARK;
        circleColor = squareColor = triangleColor = SOAPBOX_COLORS.BLUE_DARK;
        break;
      case 'multi':
        letterColor = SOAPBOX_COLORS.BLUE_MEDIUM;
        circleColor = SOAPBOX_COLORS.RED_MEDIUM;
        squareColor = SOAPBOX_COLORS.YELLOW_MEDIUM;
        triangleColor = SOAPBOX_COLORS.TEAL_MEDIUM;
        break;
      case 'dark':
        letterColor = circleColor = squareColor = triangleColor
          = SOAPBOX_COLORS.GRAY_DARK;
        break;
      default:
        letterColor = circleColor = squareColor = triangleColor
          = SOAPBOX_COLORS.BLUE_DARK;
    }

    let letterOpacity = 0;
    let circleOpacity = 0;
    let squareOpacity = 0;
    let triangleOpacity = 0;
    let transformS = 'translate(439 500) scale(0 1) translate(-439 -500)';
    let transformP = 'translate(3937 515) scale(0 1) translate(-3937 -515)';
    let transformB = 'translate(5038 515) scale(0 1) translate(-5038 -515)';
    let transformX = 'translate(7489 515) scale(0 1) translate(-7489 -515)';
    let transformCircle = 'translate(0 0)';
    let transformSquare = 'translate(0 0)';
    let transformTriangle = 'translate(0 0)';

    switch (mode) {
      case 'camera':
        squareOpacity = triangleOpacity = 1;
        transformSquare =
          `scale(0.667) translate(2250 250)`;
        transformTriangle =
          `translate(4000 691) scale(0.36 0.62)` +
          `rotate(-30) translate(-4775 -1500)`;
        break;
      case 'logo':
        circleOpacity = letterOpacity = squareOpacity = triangleOpacity = 1;
        transformCircle =
          'translate(-2473 0)';
        transformSquare =
          'translate(2370 30) scale(0.97)';
        transformTriangle =
          'translate(2160 500) scale(1.05 1.1) translate(-3465 -500)';
        transformS =
          'translate(439 500) scale(1 1) translate(-439 -500)';
        transformP =
          'translate(3937 515) scale(1 1) translate(-3937 -515)';
        transformB =
          'translate(5038 515) scale(1 1) translate(-5038 -515)';
        transformX =
          'translate(7489 515) scale(1 1) translate(-7489 -515)';
        break;
      case 'splitscreen':
        circleOpacity = squareOpacity = triangleOpacity = 1;
        transformCircle =
          'translate(3500 250) scale(0.5) translate(-4000 -500)';
        transformSquare =
          'translate(500 0)';
        transformTriangle =
          'translate(3500 1000) scale(0.545) translate(-4000 -1000)';
        break;
      case 'trio':
        circleOpacity = squareOpacity = triangleOpacity = 1;
        transformCircle =
          'translate(4000 500) scale(0.96) translate(-5582 -480)';
        transformSquare =
          'translate(4000 500) scale(0.92) translate(-2326 -480)';
        transformTriangle =
          'translate(-20 -20)';
        break;
    }

    return (
      <svg
        alt="Soapbox"
        className={classNames}
        height={height}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
        preserveAspectRatio="xMidYMax slice"
        viewBox="0 0 8000 1000"
        width={WIDTHS[useLogoWidth ? 'logo' : mode](height)}
        {...props}>

        <circle
          className="Soapbox__shape Soapbox__shape--circle"
          cx="4000"
          cy="500"
          fill={circleColor}
          opacity={circleOpacity}
          r="500"
          transform={transformCircle}/>

        <rect
          className="Soapbox__shape Soapbox__shape--square"
          fill={squareColor}
          height="1000"
          opacity={squareOpacity}
          transform={transformSquare}
          width="1000"
          x="3500"
          y="0"/>

        <polygon
          className="Soapbox__shape Soapbox__shape--triangle"
          fill={triangleColor}
          opacity={triangleOpacity}
          points="4535,1000 3465,1000 4000,74.3"
          transform={transformTriangle}/>

        <g
          fill={letterColor}
          opacity={letterOpacity}>
          <path
            className="Soapbox__letter"
            d="
              M64 716.8 252.2 646.4C295.1 737.6 369.8 801.1 458.4 801.1 545.6
              801.1 603.7 767.9 603.7 701.6 603.7 633.9 520.7 607.7 419.7 575.9
              274.4 528.9 102.8 475.1 102.8 273.4 102.7 124.3 225.9 0 441.8 0
              620.3 0 740.7 105 778 241.7L589.8 302.5C563.5 243.1 517.8 198.9
              430.7 198.9 354.6 198.9 313.1 226.5 313.1 277.6 313.1 327.3 387.8
              350.8 477.8 381.2 624.4 428.2 814 489 814 703 814 890.8 654.9 1000
              452.8 1000 264.6 1000 122.1 893.6 64 716.8Z
            "
            transform={transformS}/>

          <path
            className="Soapbox__letter"
            d="
              M3554.5 30H3982.6C4231.2 30 4319.5 186.6 4319.5 341.8C4319.5 485.9
              4222.8 652.2 3982.6 652.2H3764.4V1000H3554.5V30ZM4101.3 341.8C
              4101.3 293.3 4075.1 229.6 3990.8 229.6H3764.3V454H3990.8C4070.9
              454 4101.3 394.4 4101.3 341.8Z
            "
            transform={transformP}/>

          <path
            className="Soapbox__letter"
            d="
              M5090.5 30C5329.6 30 5409.7 161.6 5409.7 293.3 5409.7 377.8 5382.1
              455.4 5300.5 494.2 5402.8 533 5441.5 631.4 5441.5 709 5441.5 850.3
              5354.4 1000 5108.5 1000H4634.5V30H5090.5ZM5195.5 316.8C5195.5
              273.8 5180.3 226.7 5091.9 226.7H4844.6V408.2H5069.8C5156.8 408.3
              5195.5 372.3 5195.5 316.8ZM5228.7 704.8C5228.7 653.5 5203.8 598.1
              5080.8 598.1H4844.5V801.8H 5118.1C5202.4 801.8 5228.7 747.8 5228.7
              704.8Z
            "
            transform={transformB}/>

          <path
            className="Soapbox__letter"
            d="
              M7489 693.8L7289.5 1000H7041.5L7365.7 501.1L7059.5 30H7307.5L7489
              308.5L 7669.1 30H7918.5L7613.7 501.1L7936.5 1000H7688.5L7489 693.8
              Z
            "
            transform={transformX}/>
        </g>

        <style jsx>{`
          .Soapbox {
            transition: width ${ DIMENSIONS.BASE_MS * 4 }ms linear;
          }

          .Soapbox__letter {
            transition:
              color ${ DIMENSIONS.BASE_MS }ms linear,
              opacity ${ DIMENSIONS.BASE_MS }ms linear,
              transform ${ DIMENSIONS.BASE_MS * 3 }ms ease-out;
          }

          .Soapbox__shape {
            transition: all ${ DIMENSIONS.BASE_MS * 6 }ms ease-out;
          }

          .Soapbox--logo .Soapbox__letter {
            transition-delay: ${ DIMENSIONS.BASE_MS * 7 }ms;
          }
        `}</style>
      </svg>
    );
  }
}
