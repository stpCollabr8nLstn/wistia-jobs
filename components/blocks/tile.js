import propTypes from "prop-types";
import COLORS from "../../utils/colors";
import ClassNames from "../../utils/classnames";

const TileCircle = ({ children, backgroundColor }) => (
  <div className="Tile__circle">
    {children}
    <style jsx>{`
      .Tile__circle {
        height: 128px;
        width: 128px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px 0;
        background: ${COLORS[backgroundColor]};
      }
    `}</style>
  </div>
);

Object.assign(TileCircle, {
  defaultProps: {
    backgroundColor: "SKY_BLUE"
  },
  propTypes: {
    backgroundColor: propTypes.string
  }
});

const TileIcon = ({ children, strokeColor, fillColor }) => (
  <div className="Tile__Icon">
    {children}
    <style jsx>{`
      .Tile__Icon :global(> svg) {
        width: 72px;
        height: 144px;
        stroke: ${COLORS[strokeColor]};
        fill: ${COLORS[fillColor] || "transparent"};
      }

      .Tile__Icon :global(> svg g) {
        width: 72px;
        height: 144px;
        stroke: ${COLORS[strokeColor]};
        fill: ${COLORS[fillColor] || "transparent"};
      }
    `}</style>
  </div>
);

Object.assign(TileIcon, {
  defaultProps: {
    strokeColor: "SKY_BLUE"
  },
  propTypes: {
    strokeColor: propTypes.string
  }
});

const Tile = ({ children }) => {
  return (
    <div className="Tile">
      {children}
      <style jsx>
        {`
          .Tile {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 224px;
          }
          .Tile :global(h3) {
            font-weight: bold;
            font-size: 24px;
            text-align: center;
          }

          @media (min-width: 500px) {
            .Tile {
              width: 256px;
            }
          }
          @media (min-width: 768px) {
            .Tile {
              width: 328px;
            }
          }
        `}
      </style>
    </div>
  );
};

Object.defineProperties(Tile, {
  Circle: {
    value: ClassNames.extend(TileCircle, "TileCircle")
  },
  Icon: {
    value: ClassNames.extend(TileIcon, "TileIcon")
  }
});

export default Tile;
