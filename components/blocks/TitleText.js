import COLORS from "../../utils/colors";

const TitleText = ({ children, align }) => (
  <div>
    {children}
    <style jsx>{`
      align-self: center;
      color: ${COLORS.GRAY_6};
      font-size: 32px;
      font-weight: 400;
      margin-bottom: 50px;
      max-width: 900px;
      text-align: ${align || "left"};
    `}</style>
  </div>
);

export default TitleText;
