import { Children, Component } from 'react';
import ClassNames from '../../utils/classnames';
import Color from '../../utils/color';
import COLORS from '../../utils/colors';
import DIMENSIONS from '../../utils/dimensions';
import propTypes from 'prop-types';

// Band ////////////////////////////////////////////////////////////////////////

propTypes.color = propTypes.oneOfType([
  propTypes.string,
  propTypes.instanceOf(Color)
]);

export default class Band extends Component {
  static defaultProps = {
    accentColor: undefined,
    backgroundColor: 'transparent',
    bodyAlign: 'center',
    contentMaxWidth: 780,
    style: {},
    textColor: undefined
  };

  static propTypes = {
    accentColor: propTypes.color,
    backgroundColor: propTypes.color,
    bodyAlign: propTypes.string,
    contentMaxWidth: propTypes.number,
    style: propTypes.object,
    textColor: propTypes.color,
  };

  render() {
    const backgroundColor = new Color(this.props.backgroundColor);
    const style = { backgroundColor };
    const classNames = new ClassNames(['Band', this.props.className]);

    // Although text color can be explicit, by default we choose the appropriate
    // light/dark text based on the background color.
    const isBackgroundDark =
      new Color(backgroundColor).isColorDarkForInversion();

    style.color = this.props.textColor || (isBackgroundDark && 'white');

    if (style.color.luminance > backgroundColor.luminance) {
      style.WebkitFontSmoothing = 'antialiased';
    } else {
      classNames.add('Band--light');
    }

    const titleColors = style.color || COLORS.GRAY_6;
    const bodyColor = style.color || COLORS.GRAY_5;

    const isColorWhite = style.color === 'white';
    const anchorColor = isColorWhite ? 'white' : COLORS.SKY_BLUE;

    Object.assign(style, this.props.style);

    const childrenCount = this.props.children.length;

    let mediaMargin = '25px 0 0';

    const children = Children.map(this.props.children, (child, index) => {
      switch (child && child.type) {
        case Band.Media:
          // Give BandMedia a bottom margin too if it's not the last child
          // component in the Band.
          if (index + 1 < childrenCount) {
            mediaMargin = '25px 0';
          }
          return child;
        case undefined:
          return;
        default:
          return child;
      }
    });

    // If has 2 children, we'll assume it's a CTA banner and we'll increase
    // the padding
    const contentPadding = children.length == 2 ? '10vw 2vw 9.5vw' : '6vw 2vw';

    return (
      <div className={classNames} style={style}>
        <div className="Band__content">
          {children}
        </div>
        <style jsx>{`
          .Band {
            align-items: center;
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          .Band :global(.BandBody) {
            color: ${bodyColor};
            font-size: 24px;
            line-height: 1.45;
            max-width: ${this.props.contentMaxWidth}px;
            text-align: ${this.props.bodyAlign};
            width: 100%; /* IE11 */
          }

          .Band :global(.BandBody a) {
            color: ${anchorColor};
            text-decoration: ${isBackgroundDark ? 'underline' : 'none'};
          }

          .Band :global(.BandBody a:focus),
          .Band :global(.BandBody a:hover) {
            color: ${new Color(anchorColor).setAlpha(0.8)};
            text-decoration: underline;
          }

          .Band :global(p.BandBody, div.BandBody p) {
            margin: ${ DIMENSIONS.BASE_PX}px 0;
          }

          .Band :global(.BandBody ul) {
            list-style: disc;
          }
          .Band :global(.BandBody li) {
            margin: 10px 0;
          }

          .Band :global(.BandButtonRow) {
            margin: 25px 0;
          }

          .Band :global(.BandButtonRow .AnchorButton:not(:first-child)) {
            margin-left: 15px;
          }

          .Band :global(.BandMedia) {
            margin: ${mediaMargin};
            max-width: ${ this.props.contentMaxWidth}px;
            overflow: hidden;
            width: 100%;
          }

          .Band :global(.BandMedia > *) {
            max-width: 100%;
          }

          .Band :global(.BandMedia--flush) {
            margin: auto;
            max-width: ${ DIMENSIONS.BASE_PX * 58}px;
          }

          .Band :global(.BandTitle) {
            color: ${new Color(titleColors).setAlpha(0.6)};
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 22px;
            max-width: 900px;
          }

          .Band :global(.BandHeadline) {
            color: ${titleColors};
            font-feature-settings: "kern" 1, "liga" 1, "ss02" 1, "ss04" 1;
            font-size: 50px;
            font-weight: 500;
            line-height: 1.3;
            margin: 0 0 24px;
            max-width: 900px;
          }

          .Band :global(.Band__content) {
            align-items: center;
            display: flex;
            flex-direction: column;
            padding: ${contentPadding};
            width: 100%;
          }

          @media (max-width: 420px) {
            .Band :global(.BandTitle) {
              font-size: 20px;
              margin-bottom: 15px;
              margin-top: 20px;
            }
            .Band :global(.BandHeadline) {
              font-size: 32px;
            }
            .Band :global(.BandBody) {
              font-size: 20px;
            }
          }
        `}</style>
      </div>
    );
  }
}

// Band.BODY ///////////////////////////////////////////////////////////////////

const BandBody = ({ children, ...props }) => typeof children === 'string'
  ? <p {...props}>{children}</p>
  : <div{...props}>{children}</div>;

// Band.BUTTONROW //////////////////////////////////////////////////////////////

const BandButtonRow = ({ children, ...props }) =>
  <div {...props}>{children}</div>;

// Band.HEADLINE ///////////////////////////////////////////////////////////////

const BandHeadline = ({ children, heading, ...props }) => {
  const ElemName = Number.isInteger(heading) ? `h${heading}` : 'p';

  return (
    <ElemName {...props}>
      {children}
    </ElemName>
  );
};

Object.assign(BandHeadline, {
  defaultProps: {
    heading: undefined
  },
  propTypes: {
    heading: propTypes.oneOf([1, 2, 3, 4, 5, 6])
  }
});

// Band.MEDIA //////////////////////////////////////////////////////////////////

const BandMedia = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};


// Band.TITLE //////////////////////////////////////////////////////////////////

const BandTitle = ({ children, heading, ...props }) => {
  const ElemName = Number.isInteger(heading) ? `h${heading}` : 'p';

  return (
    <ElemName {...props}>
      {children}
    </ElemName>
  );
};

Object.assign(BandTitle, {
  defaultProps: {
    heading: undefined
  },
  propTypes: {
    heading: propTypes.oneOf([1, 2, 3, 4, 5, 6])
  }
});

////////////////////////////////////////////////////////////////////////////////

Object.defineProperties(Band, {
  Body: { value: ClassNames.extend(BandBody, 'BandBody') },
  ButtonRow: { value: ClassNames.extend(BandButtonRow, 'BandButtonRow') },
  Headline: { value: ClassNames.extend(BandHeadline, 'BandHeadline') },
  Media: { value: ClassNames.extend(BandMedia, 'BandMedia') },
  Title: { value: ClassNames.extend(BandTitle, 'BandTitle') }
});
