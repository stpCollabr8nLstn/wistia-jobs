import COLORS from "../../utils/colors";

const BodyText = ({ children, align, lineHeight }) => (
  <div>
    <div className="BodyText">{children}</div>
    <style jsx>
      {`
        .BodyText {
          color: ${COLORS.GRAY_5};
          font-size: 21px;
          font-weight: 400;
          line-height: ${lineHeight || 1.5};
          margin: 25px auto 30px;
          text-align: ${align || "left"};
        }
      `}
    </style>
  </div>
);

export default BodyText;
