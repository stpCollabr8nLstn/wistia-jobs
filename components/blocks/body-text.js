import propTypes from "prop-types";
import COLORS from "../../utils/colors";

const BodyText = ({ children, align }) => (
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
          text-align: ${align || "left"};
        }
      `}
    </style>
  </div>
);

propTypes.align = propTypes.oneOf(["left", "right", "center"]);

Object.assign(BodyText, {
  defaultProps: {
    align: "left"
  },
  propTypes: {
    align: propTypes.align
  }
});

export default BodyText;
