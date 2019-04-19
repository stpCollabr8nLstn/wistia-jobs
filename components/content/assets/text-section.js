import TextSectionButtons from './text-section-buttons';

const TextSection = ({ epsUrl, pngUrl, title, children }) => {
  return (
    <div className="TextSection">
      <div className="TextSection__content">
        <h3>{title}</h3>
        {children}
      </div>
      <div className="TextSection__buttons">
        <TextSectionButtons
          epsUrl={epsUrl}
          pngUrl={pngUrl}
        />
      </div>
      <style jsx>{`
        .TextSection{
          min-height: 90px;
          padding-top: 50px;
        }
        .TextSection h3{
          font-size: 32px;
          font-weight: 500;
          padding-bottom: 25px;
        }
        .TextSection__buttons{
          display: flex;
          float: right;
          justify-content: space-between;
          margin-top: -55px;
          width: 380px;
        }
        @media (max-width: 450px){
          .TextSection__buttons{
            flex-wrap: wrap;
            width: 200px;
          }
        }
        @media (max-width: 1100px){
          .TextSection__content{
            align-items: center;
            text-align: center;
          }
          .TextSection__buttons{
            float: none;
            margin: 0px auto;
            padding: 20px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TextSection;
