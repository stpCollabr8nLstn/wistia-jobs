import COLORS from "../../utils/colors";

const BodyText = ({ children }) => (
  <div>
    <div className="BodyText">{children}</div>
    <style jsx>
      {`
        .BodyText {
          color: ${COLORS.GRAY_5};
          font-size: 21px;
          font-weight: 400;
          line-height: 1.5;
          margin: 25px auto 30px;
        }
      `}
    </style>
  </div>
);

export default BodyText;
