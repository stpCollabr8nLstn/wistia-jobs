import { Children } from 'react';
import ClassNames from '../../utils/classnames';
import Color from '../../utils/color';
import COLORS, { COLOR_SHADE_MAP } from '../../utils/colors';
import DIMENSIONS from '../../utils/dimensions';
import propTypes from 'prop-types';

const BORDER = 2;
const OFFSET = 3;

// For an external link:
//
// <AnchorButton href="external.com">foo</AnchorButton>
//
// For an internal link (note "passHref"):
//
// <Link href="/soapbox" passHref={true}>
//   <AnchorButton>foo</AnchorButton>
// </Link>
//
// (or if you need the 'active' class, use <ActiveLink>)
//
// Note that the implementation uses two elements rather than an element with a
// pseudoelement. This is to avoid the bug seen on wistiacom where there is a
// hover hazard at the bottom edge of every button that causes the button
// position to flicker (your base hover target must not itself move on hover, or
// there will be places that trigger an endless loop).

const AnchorButton = ({
  borderColor,
  children,
  className,
  elem: Elem,
  primaryColor,
  shadowColor,
  size,
  style,
  textColor,
  ...props
}) => {
  const anchorStyle = {};
  const ghostStyle = {};
  const interiorStyle = {};
  const classNames = new ClassNames(['AnchorButton']);
  const color = new Color(primaryColor);
  const isWhite = color.toString() === '#FFFFFF';

  // TEXT COLOR. This can be explicitly provided or it can be derived
  // automatically from other options.

  if (textColor) {
    anchorStyle.color = textColor;
  } else if (color.luminance > 0.75 || color.alpha < 0.5) {
    anchorStyle.color = COLORS.GRAY_6;
  } else {
    anchorStyle.color = '#FFF';
  }

  // BORDER COLOR. A button is bordered when a border color is explicitly
  // provided or when the primary color is at all transparent. In the latter
  // case, the border color matches the text color.
  //
  // Note that white does not always mean there is a border; it must be explicit
  // in such cases, since then it would depend on the background.

  if (borderColor instanceof Color || typeof borderColor === 'string') {
    interiorStyle.borderColor = borderColor;
  } else if (borderColor !== false) {
    if (color.alpha === 0 || (borderColor && isWhite)) {
      interiorStyle.borderColor = new Color(COLORS.GRAY_2);
    } else if (color.alpha !== 1 || borderColor) {
      interiorStyle.borderColor = anchorStyle.color;
    }
  }

  // BACKGROUND COLORS. If the primary color is at all transparent, we must
  // switch to a more complex method of providing the "shadow" effect that may
  // not be as effective cross browser (but hopefully still looks basically
  // alright). One caveat: if both the border and the shadow are transparent,
  // the overlap would be visible.

  if (color.alpha === 1) {
    anchorStyle.backgroundColor =
      shadowColor ||
      COLOR_SHADE_MAP[primaryColor] ||
      (isWhite && interiorStyle.borderColor) ||
      color.darken(0.15).saturate(1.1);
  } else {
    ghostStyle.boxShadow = `0 ${OFFSET + BORDER}px 0 0 ${
      shadowColor || interiorStyle.borderColor
      }`;
  }

  interiorStyle.backgroundColor = color;

  Object.assign(anchorStyle, style);

  classNames.add(`AnchorButton--${size}`);

  const textLuminance = new Color(anchorStyle.color).luminance;

  if (textLuminance > color.luminance || textLuminance > 0.5) {
    classNames.add('AnchorButton--light-on-dark');
  }

  if (Children.count(children) > 1) {
    classNames.add('AnchorButton--multiple-children');

    children = Children.map(children, child => typeof child === 'string'
      ? <span className="AnchorButton__sibling-text">{child}</span>
      : child
    );
  }

  // This next bit is the only way, currently, to make Styled JSX work with
  // nodes whose element name is a reference. It’s not the prettiest thing, but
  // it’s better than duplicating all the functionality here in <Button>.
  //
  // Apparently addressing this gap is on their todo list. When Styled JSX
  // improves handling for cases like these, we can simplify this component.

  const { props: { className: styledJSXClassName, children: styles } } = (
    <scope>
      <style jsx>{`
        .AnchorButton {
          border-radius: ${ DIMENSIONS.BASE_RADIUS_PX}px;
          cursor: pointer; /* In case it is used without a href */
          display: inline-flex;
          font-weight: 500;
          min-width: ${ DIMENSIONS.BASE_PX * 12}px;
          opacity: ${ props.disabled ? 0.5 : 1};
          position: relative;
          white-space: nowrap;
        }

        .AnchorButton:link {
          text-decoration: none;
          transition: none;
        }

        .AnchorButton:link,
        .AnchorButton:visited,
        .AnchorButton:active {
          color: white;
        }

        .AnchorButton :global(.Icon) {
          height: 1em;
          width: 1em;
        }

        .AnchorButton :global(.AnchorButton__sibling-text) {
          flex: 1;
          text-align: center;
        }

        .AnchorButton--light-on-dark {
          /* Only for special cases! Never do this for regular text! */
          -webkit-font-smoothing: antialiased;
        }

        .AnchorButton--multiple-children > .AnchorButton__interior {
          justify-content: space-between;
        }

        .AnchorButton--large,
        .AnchorButton--large > .AnchorButton__interior {
          font-size: ${ DIMENSIONS.FONT_SIZES[3]};
          height: ${ DIMENSIONS.BASE_PX * 5}px;
        }

        .AnchorButton--regular,
        .AnchorButton--regular > .AnchorButton__interior {
          font-size: ${ DIMENSIONS.FONT_SIZES[1]};
          height: ${ DIMENSIONS.BASE_PX * 4}px;
        }

        .AnchorButton--small,
        .AnchorButton--small > .AnchorButton__interior {
          font-size: ${ DIMENSIONS.FONT_SIZES[1]};
          height: ${ DIMENSIONS.BASE_PX * 3}px;
        }

        .AnchorButton--tiny > .AnchorButton__interior {
          padding-left: ${ DIMENSIONS.BASE_PX * 1.1}px;
          padding-right: ${ DIMENSIONS.BASE_PX * 1.1}px;
        }

        .AnchorButton--tiny,
        .AnchorButton--tiny > .AnchorButton__interior {
          font-size: 14px;
          height: ${ DIMENSIONS.BASE_PX * 2.6}px;
        }

        .AnchorButton--wide :global(.AnchorButton__interior) {
          padding-left: ${ DIMENSIONS.BASE_PX * 2}px;
          padding-right: ${ DIMENSIONS.BASE_PX * 2}px;
        }

        .AnchorButton__ghost-hook {
          border-radius: ${ DIMENSIONS.BASE_RADIUS_PX}px;
          height: ${ DIMENSIONS.BASE_PX * 4}px;
          margin-bottom: ${ OFFSET + BORDER}px;
          width: 100%;
          z-index: 1;
        }

        .AnchorButton__ghost-hook__context {
          align-items: flex-end;
          bottom: 0;
          display: flex;
          height: 0;
          left: 0;
          overflow: hidden;
          position: absolute;
          right: 0;
          transition: height linear ${ DIMENSIONS.BASE_MS / 3}ms;
        }

        .AnchorButton__interior {
          align-items: center;
          border: ${ BORDER}px solid transparent;
          border-radius: ${ DIMENSIONS.BASE_RADIUS_PX}px;
          bottom: 0;
          display: flex;
          flex-grow: 1;
          justify-content: center;
          padding: 0 ${ DIMENSIONS.BASE_PX}px;
          position: relative;
          transition: all linear ${ DIMENSIONS.BASE_MS / 2}ms;
        }

        .AnchorButton:hover:not(:active) > .AnchorButton__interior {
          bottom: ${ OFFSET}px;
        }

        .AnchorButton:hover:not(:active) > .AnchorButton__ghost-hook__context {
          height: ${ OFFSET * 3}px;
        }
      `}</style>
    </scope>
  );

  classNames.add(className);
  classNames.add(styledJSXClassName);

  const ghostHookClassNames = new ClassNames([
    'AnchorButton__ghost-hook',
    styledJSXClassName
  ]);

  const ghostHookContextClassNames = new ClassNames([
    'AnchorButton__ghost-hook__context',
    styledJSXClassName
  ]);

  const interiorClassNames = new ClassNames([
    'AnchorButton__interior',
    styledJSXClassName
  ]);

  return (
    <Elem
      className={classNames}
      style={anchorStyle}
      {...props}>

      <div className={ghostHookContextClassNames}>
        <div
          className={ghostHookClassNames}
          style={ghostStyle} />
      </div>

      <div
        className={interiorClassNames}
        style={interiorStyle}>
        {children}
      </div>
      {styles}
    </Elem>
  );
};

export default Object.assign(AnchorButton, {
  defaultProps: {
    borderColor: undefined,
    className: '',
    elem: 'a',
    primaryColor: 'transparent',
    shadowColor: undefined,
    size: 'regular',
    style: {},
    textColor: undefined
  },
  propTypes: {
    borderColor: propTypes.oneOfType([propTypes.color, propTypes.bool]),
    className: propTypes.string,
    elem: propTypes.string,
    primaryColor: propTypes.color,
    shadowColor: propTypes.color,
    size: propTypes.oneOf(['tiny', 'small', 'regular', 'large']),
    style: propTypes.object,
    textColor: propTypes.color
  }
});
