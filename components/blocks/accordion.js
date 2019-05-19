import { useContext } from "react";
import COLORS from "../../utils/colors";
import ClassNames from "../../utils/classnames";
import { PerksContext } from "../../context/PerksContext";

const AccordionChild = ({ children, name, title, icon }) => {
  const [state, setState] = useContext(PerksContext);
  const isSelected = state.selectedPerk === name ? "selected" : null;

  const classNames = new ClassNames(["Accordion__child", isSelected]);

  return (
    <button
      className={classNames}
      onClick={() => setState(state => ({ ...state, selectedPerk: name }))}
    >
      {icon}
      {title}
      {isSelected && children}
    </button>
  );
};

const AccordionHeadline = ({ children }) => (
  <h4 className="Accordion__headline">{children}</h4>
);

const Accordion = ({ children }) => {
  return (
    <div className="Accordion">
      {children}
      <style jsx>
        {`
          .Accordion {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 75%;
          }

          .Accordion :global(.Accordion__headline) {
            align-self: center;
            color: ${COLORS.GRAY_6};
            font-size: 32px;
            font-weight: 400;
            margin-bottom: 50px;
            max-width: 900px;
            text-align: left;
          }

          .Accordion :global(.Accordion__child) {
            background: transparent;
          }

          .Accordion :global(.Accordion__child.selected) {
            background: pink;
          }
        `}
      </style>
    </div>
  );
};

Object.defineProperties(Accordion, {
  Child: {
    value: ClassNames.extend(AccordionChild, "AccordionChild")
  },
  Headline: {
    value: ClassNames.extend(AccordionHeadline, "AccordionHeadline")
  }
});

export default Accordion;
