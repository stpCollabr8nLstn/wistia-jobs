import COLORS from '../../../utils/colors';
import PRODUCT_ASSETS from '../../../utils/about-assets-content';

const ColorSwatch = ({ color }) => {
  return (
    <div className="ColorSwatch">
      <div className="ColorSwatch__visual" />
      <div className="ColorSwatch__hex">
        {color}
      </div>
      <style jsx>{`
        .ColorSwatch{
          border-radius: 5px;
          border: 1px solid ${COLORS.GRAY_1};
          float: left;
          height: 225px;
          margin: 10px;
          width: 152px;
        }
        .ColorSwatch__visual{
          background: ${color};
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          height: 159px;
          width: 151px;
        }
        .ColorSwatch__hex{
          color: ${COLORS.GRAY_3};
          font-size: 18px;
          margin-top: 22px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

const ColorSwatches = ({ productName }) => {
  const colors = PRODUCT_ASSETS[productName].colors;
  return (
    <div className="ColorSwatches">
      {colors.map(color => {
        return (
          <ColorSwatch key={color} color={color} />
        );
      })}
      <style jsx>{`
        .ColorSwatches{
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          margin 0 -10px;
          max-width: 1084px;
          padding-top: 25px;
        }
        @media (max-width: 1100px){
          .ColorSwatches{
            justify-content: center;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default ColorSwatches;
