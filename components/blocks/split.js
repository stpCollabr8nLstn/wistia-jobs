import ClassNames from '../../utils/classnames';
import COLORS from '../../utils/colors';
import DIMENSIONS from '../../utils/dimensions';
import propTypes from 'prop-types';
import Color from '../../utils/color';

// proportions:
//  if provided, overrides default behavior for determining proportions — for
//  example [ 2, 1 ] would make the left panel twice as wide as the right panel

const SplitIcon = ({ children }) =>
  <div className="Split__icon">{children}</div>;

const SplitHeadline = ({ ElemName = 'h2', children }) =>
  <ElemName className="Split__headline">{children}</ElemName>;

const SplitLeft = ({ children }) => children;

const SplitRight = ({ children }) => children;

const Split = ({
  autoFlush,
  backgroundColor,
  children,
  className,
  gutter,
  maxContentWidth,
  proportions,
  ...props
}) => {

  const preSplitContent = [];
  let leftSplit, rightSplit;

  for (const child of children) {
    if ([<Split.Headline />.type, <Split.Icon />.type].includes(child.type)) {
      preSplitContent.push(child);
    }
    if (child.type == <Split.Left />.type) {
      leftSplit = child;
    }
    if (child.type == <Split.Right />.type) {
      rightSplit = child;

    }
  }

  const classNames = new ClassNames([
    'Split',
    className
  ]);

  const leftChildClassNames = new ClassNames([
    'Split__panel',
    'Split__panel--left'
  ]);

  const rightChildClassNames = new ClassNames([
    'Split__panel',
    'Split__panel--right'
  ]);

  if (leftSplit && leftSplit.type == 'img') {
    leftChildClassNames.add('Split__panel--media');

    if (autoFlush && !proportions) {
      leftChildClassNames.add('Split__panel--ensmallen');
      rightChildClassNames.add('Split__panel--embiggen');
    }
  }

  if (rightSplit && rightSplit.type == 'img') {
    leftChildClassNames.add('Split__panel--media');

    if (autoFlush && !proportions) {
      leftChildClassNames.add('Split__panel--embiggen');
      rightChildClassNames.add('Split__panel--ensmallen');
    }
  }

  if (!autoFlush) {
    leftChildClassNames.add('Split__panel--padded');
    rightChildClassNames.add('Split__panel--padded');
  }

  if (!gutter) {
    leftChildClassNames.add('Split__panel--gutterless');
    rightChildClassNames.add('Split__panel--gutterless');
  }

  const leftStyles = proportions ? { flex: `${proportions[0]} 0 0%` } : {};
  const rightStyles = proportions ? { flex: `${proportions[1]} 0 0%` } : {};

  const contentStyles = (maxContentWidth && !autoFlush)
    ? {
      maxWidth: `${maxContentWidth}px`,
      marginLeft: 'auto',
      marginRight: 'auto'
    } : null;

  return (
    <div className={classNames} {...props}>
      {preSplitContent}
      <div className="Split__content" style={contentStyles}>
        <div className={leftChildClassNames} style={leftStyles}>
          {leftSplit}
        </div>
        <div className={rightChildClassNames} style={rightStyles}>
          {rightSplit}
        </div>
      </div>
      <style jsx>{`
        .Split {
          background-color: ${backgroundColor};
          display: flex;
          flex-direction: column;
          padding: 80px 0;
        }

        .Split__content {
          align-items: center;
          align-self: stretch;
          display: flex;
          flex-wrap: wrap;
          width: 100%; /* IE11 */
        }

        .Split :global(.Split__icon) {
          align-self: center;
          margin-bottom: 25px;
          max-width: 75px;
        }

        .Split :global(.Split__icon img),
        .Split :global(.Split__icon svg) {
          width: 100%;
        }

        .Split :global(.Split__headline) {
          align-self: center;
          color: ${COLORS.GRAY_6};
          font-size: 36px;
          font-weight: 500;
          margin-bottom: 50px;
          max-width: 900px;
          text-align: center;
        }

        .Split__panel {
          flex: 1 0 50%;
          padding-bottom: 20px;
          padding-top: 20px;
        }

        @media(max-width: 450px) {
          .Split__panel {
            min-width: 100%;
          }
        }

        @media(min-width: 450px) {
          .Split__panel {
            min-width: 450px;
          }
        }

        :global(.ie) .Split__panel {
          flex-basis: 35%;
        }

        .Split__panel--embiggen {
          flex-basis: 55%;
          padding-left: 4vw;
          padding-right: 4vw;
        }

        :global(.ie) .Split__panel--embiggen {
          flex-basis: 45%;
        }

        .Split__panel--ensmallen {
          flex-basis: 45%;
        }

        :global(.ie) .Split__panel--ensmallen {
          flex-basis: 35%;
        }

        :global(.ie) .Split__panel--media {
          display: block;
        }

        :global(.ie) .Split__panel--media :global(img) {
          height: 100%;
        }

        .Split__panel--media :global(> *) {
          overflow: hidden;
          width: 100%;
        }

        .Split__panel--media.Split__panel--left :global(> *) {
          border-radius: 0 5px 5px 0;
        }

        .Split__panel--media.Split__panel--right :global(> *) {
          border-radius: 5px 0 0 5px;
        }

        .Split__panel--padded {
          padding-left: 4vw;
          padding-right: 4vw;
        }

        .Split__panel--padded :global(img) {
          max-width: 100% !important;
        }

        .Split__panel--gutterless.Split__panel--left {
          padding-right: 0;
        }

        .Split__panel--gutterless.Split__panel--right {
          padding-left: 0;
        }

        .Split__panel--padded.Split__panel--media :global(> *) {
          border-radius: 5px;
        }

        /* Adjust child component padding */
        .Split__panel :global(.Band .Band__content),
        .Split__panel :global(.BulletBricks),
        .Split__panel :global(.Bricks),
        .Split__panel :global(.LinkPanelBricks) {
          padding-bottom: 0;
          padding-top: 0;
        }

        /* Band Adjustments */
        .Split__panel :global(.Band),
        .Split__panel :global(.Band .BandBody) {
          /* This seems to be true regardless of position */
          text-align: left;
        }

        .Split__panel :global(.Band .BandHeadline) {
          font-size: ${ DIMENSIONS.FONT_SIZES[4]};
          width: 100%;
        }
        .Split__panel :global(.Band .BandBody) {
          font-size: 21px;
        }

        .Split__panel :global(.Band .Band__content) {
          align-items: flex-start;
        }

        .Split__panel :global(.BandButtonRow) {
          align-self: flex-start;
        }
      `}</style>
    </div>
  );
};

Object.defineProperties(Split, {
  Headline: {
    value: ClassNames.extend(SplitHeadline, 'SplitHeadline')
  },
  Icon: {
    value: ClassNames.extend(SplitIcon, 'SplitIcon')
  },
  Left: {
    value: ClassNames.extend(SplitLeft, 'SplitLeft')
  },
  Right: {
    value: ClassNames.extend(SplitRight, 'SplitRight')
  }
});

Object.assign(Split, {
  defaultProps: {
    autoFlush: false,
    backgroundColor: undefined,
    proportions: undefined,
    maxContentWidth: 1300,
    gutter: true
  },
  propTypes: {
    autoFlush: propTypes.bool,
    backgroundColor: propTypes.oneOfType([
      propTypes.string,
      propTypes.instanceOf(Color)
    ]),
    gutter: propTypes.bool,
    maxContentWidth: propTypes.oneOfType([
      propTypes.bool,
      propTypes.number
    ]),
    proportions: propTypes.arrayOf(propTypes.number)
  }
});

export default Split;
