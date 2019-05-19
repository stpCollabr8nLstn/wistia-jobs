import COLORS from "../../utils/colors";
import ClassNames from "../../utils/classnames";

const TileCircle = ({ children }) => (
  <div className="Tile__circle">{children}</div>
);

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

          .Tile :global(.Tile__circle) {
            height: 128px;
            width: 128px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 24px 0;
            background: ${COLORS.SKY_BLUE};
          }
          .Tile :global(.Tile__circle > svg) {
            width: 72px;
            height: 144px;
            stroke: ${COLORS.GOLD};
          }
          @media (min-width: 768px) {
            .Tile {
              width: 328px;
            }
          }

          @media (min-width: 500px) {
            .Tile {
              width: 256px;
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
  }
});

export default Tile;
