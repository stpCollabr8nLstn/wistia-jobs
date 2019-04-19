import DIMENSIONS from '../../../utils/dimensions';
import COLORS from '../../../utils/colors';
import PRODUCT_ASSETS from '../../../utils/about-assets-content';

const LogoSwatches = ({ productName }) => {
  const LogoComponentFull = PRODUCT_ASSETS[productName].logoComponents.full;
  const LogoComponentIcon = PRODUCT_ASSETS[productName].logoComponents.icon;
  return (
    <div className="LogoSwatches">
      <div className="LogoSwatch LogoSwatch--full">
        <LogoComponentFull />
      </div>
      <div className="LogoSwatch LogoSwatch--small">
        <LogoComponentIcon />
      </div>
      <style jsx>{`
      .LogoSwatches{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .LogoSwatch{
        align-items: center;
        border-radius: ${DIMENSIONS.BASE_RADIUS_PX};
        border: 1px solid ${COLORS.GRAY_1};
        display: flex;
        justify-content: center;
        margin-top: 20px;
        padding: 25px 0;
      }
      .LogoSwatch--full{
        height: 225px;
        width: 700px;
      }
      .LogoSwatch--full img{
        max-height: 40px;
        margin: 70px auto;
      }
      .LogoSwatch--small{
        height: 225px;
        width: 360px;
      }
      .LogoSwatch--small img{
        height: 45px;
        margin: 73px auto;
      }
      @media (max-width: 1100px){
        .LogoSwatches{
          justify-content: center;
        }
      }
      @media (max-width: 1100px){
        .LogoSwatch--small{
          width: 700px;
        }
      }
      `}</style>
    </div>
  );
};

export default LogoSwatches;
