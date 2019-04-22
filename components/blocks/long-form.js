import Color from '../../utils/color';
import COLORS from '../../utils/colors';
import propTypes from 'prop-types';
import ClassNames from '../../utils/classnames';

const LongFormIcon = ({ children }) =>
  <div className="LongForm__icon">{children}</div>;

const LongFormHeadline = ({ ElemName = 'h2', children }) =>
  <ElemName className="LongForm__headline">{children}</ElemName>;

const LongFormBody = ({ children }) =>
  <div className="LongForm__body">{children}</div>;

const LongFormButtonRow = ({ children }) =>
  <div className="LongForm__ButtonRow">{children}</div>;

const LongFormMinorCta = ({ children }) =>
  <div className="LongForm__MinorCta">{children}</div>;

const LongFormMedia = ({ children }) =>
  <div className="LongForm__media">{children}</div>;

const LongForm = ({
  backgroundColor,
  bodyMaxWidth,
  iconMaxWidth,
  textColor,
  children,
  ...props
}) => {

  backgroundColor = new Color(backgroundColor);
  const style = { backgroundColor };

  const isBackgroundDark = new Color(backgroundColor).isColorDarkForInversion();

  style.color = props.textColor || (isBackgroundDark && 'white');

  const isColorWhite = style.color === 'white';
  const anchorColor = isColorWhite ? 'white' : COLORS.SKY_BLUE;
  const minorCtaColor = isBackgroundDark ? 'white' : COLORS.GRAY_4;
  const classNames = new ClassNames([
    'LongForm',
    props.className
  ]);

  Object.assign(style, props.style);

  return (
    <div className={classNames} style={style}>
      <div className="LongForm__content">
        {children}
      </div>
      <style jsx>{`
        .LongForm {
          padding: 100px 20px;
        }

        .LongForm :global(.LongForm__icon) {
          margin: 0 auto 25px;
          max-width: ${iconMaxWidth}px;
        }

        .LongForm :global(.LongForm__icon img) {
          max-width: 100%;
        }

        /*
          Rehydrated LongForm icon images often com back with an assigned
          max-width which is variable to the image's size. we need to override
          when the image has a .markdown class (which says that it came from
          Contentful) in a not-cool !important kind of way.
        */
        .LongForm :global(.LongForm__icon img.markdown) {
          max-width: 100% !important;
        }


        .LongForm :global(.LongForm__headline) {
          color: ${style.color || COLORS.GRAY_6};
          font-size: 36px;
          font-weight: 500;
          margin-bottom: 25px;
          text-align: center;
        }

        .LongForm :global(.LongForm__body) {
          color: ${style.color || COLORS.GRAY_5};
          font-size: 21px;
          font-weight: 400;
          line-height: 1.5;
          max-width: ${bodyMaxWidth}px;
          margin: 25px auto 30px;
        }

        .LongForm :global(.LongForm__body img) {
          max-width: 100%;
        }

        .LongForm :global(.LongForm__body a) {
          color: ${anchorColor};
          text-decoration: ${isBackgroundDark ? 'underline' : 'none'};
        }

        .LongForm :global(.LongForm__body a:hover:not(.AnchorButton)) {
          color: ${new Color(anchorColor).setAlpha(0.8)};
          text-decoration: underline;
        }

        .LongForm :global(.LongForm__body ul) {
          list-style-type: disc;
        }
        .LongForm :global(.LongForm__body ul li) {
          margin: 10px 0;
        }

        .LongForm :global(.LongForm__body p.markdown),
        .LongForm :global(.LongForm__body img.markdown) {
          margin: 0 0 15px;
        }

        .LongForm :global(.LongForm__ButtonRow) {
          text-align: center;
        }

        .LongForm :global(.LongForm__ButtonRow .AnchorButton) {
          margin: 5px 13px;
          min-width: 200px;
        }

        .LongForm :global(.LongForm__MinorCta) {
          color: ${minorCtaColor};
          font-size: 18px;
          margin-top: 20px;
          text-align: center;
        }

        .LongForm :global(.LongForm__MinorCta a) {
          color: ${minorCtaColor};
        }

        .LongForm :global(.LongForm__MinorCta a:hover) {
          color: ${new Color(minorCtaColor).setAlpha(0.8)};
        }

        .LongForm :global(.LongForm__media) {
          margin: 65px auto 0;
          max-width: 1100px;
        }

        .LongForm :global(.LongForm__media > *) {
          margin: 0 auto;
          max-width: 100%;
        }

        @media (max-width: 420px) {
          .LongForm :global(.LongForm__headline) {
            font-size: 30px;
          }
          .LongForm :global(.LongForm__body) {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

Object.defineProperties(LongForm, {
  Icon: {
    value: ClassNames.extend(LongFormIcon, 'LongFormIcon')
  },
  Headline: {
    value: ClassNames.extend(LongFormHeadline, 'LongFormHeadline')
  },
  Body: {
    value: ClassNames.extend(LongFormBody, 'LongFormBody')
  },
  ButtonRow: {
    value: ClassNames.extend(LongFormButtonRow, 'LongFormButtonRow')
  },
  MinorCta: {
    value: ClassNames.extend(LongFormMinorCta, 'LongFormMinorCta')
  },
  Media: {
    value: ClassNames.extend(LongFormMedia, 'LongFormMedia')
  }
});

propTypes.color = propTypes.oneOfType([
  propTypes.string,
  propTypes.instanceOf(Color)
]);

Object.assign(LongForm, {
  defaultProps: {
    backgroundColor: 'transparent',
    bodyMaxWidth: 780,
    iconMaxWidth: 75,
    style: {},
    textColor: COLORS.GRAY_6
  },
  propTypes: {
    backgroundColor: propTypes.color,
    bodyMaxWidth: propTypes.number,
    style: propTypes.object,
    textColor: propTypes.color
  }
});

export default LongForm;
