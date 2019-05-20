import COLORS from "../../utils/colors";
import ClassNames from "../../utils/classnames";

const AccordionTitle = ({ children }) => (
  <div className="Accordion__title">{children}</div>
);

const AccordionIcon = ({ children }) => (
  <div className="Accordion__icon">{children}</div>
);

const AccordionBody = ({ children }) => (
  <div className="Accordion__body">{children}</div>
);

const AccordionChild = ({ children, isSelected, strokeColor, onClick }) => {
  const classNames = new ClassNames([
    "Accordion__child",
    isSelected ? "Accordion__child--selected" : null
  ]);
  return (
    <button className={classNames} onClick={onClick}>
      <div className="AccordionChild__content">{children}</div>

      <style jsx>{`
        .AccordionChild__content {
          display: grid;
          grid-template-columns: 64px 1fr;
        }

        .AccordionChild__content :global(.Accordion__icon) {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          grid-row: 1 / span 2;
          grid-column: 1 / span 1;
        }

        .AccordionChild__content :global(.Accordion__icon > svg) {
          margin: 18px auto;
          height: 36px;
          width: 36px;
          stroke: ${COLORS[strokeColor] || COLORS.BLUE};
        }

        .AccordionChild__content :global(.Accordion__title) {
          grid-row: 1 / span 1;
          grid-column: 2 / span 1;
          margin: 24px 8px;
          color: ${COLORS.GRAY_5};
          font-size: 18px;
          font-weight: 400;
          line-height: 1.5;
          text-align: left;
        }
        .AccordionChild__content :global(.Accordion__body) {
          grid-row: 2 / span 1;
          grid-column: 2 / span 1;
          margin: 0 8px 24px;
          color: ${COLORS.GRAY_5};
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          text-align: left;
        }
      `}</style>
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
            text-align: center;
          }

          .Accordion :global(.Accordion__child) {
            background: transparent;
            width: 570px;
            border: 1px solid ${COLORS.GRAY_3};
            border-top: none;
          }

          .Accordion :global(.Accordion__child:nth-child(2)) {
            border-top: 1px solid ${COLORS.GRAY_3};
          }

          .Accordion :global(.Accordion__child--selected) {
            background: ${COLORS.GRAY_1};
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
  },
  Title: {
    value: ClassNames.extend(AccordionTitle, "AccordionTitle")
  },
  Icon: {
    value: ClassNames.extend(AccordionIcon, "AccordionIcon")
  },
  Body: {
    value: ClassNames.extend(AccordionBody, "AccordionBody")
  }
});

export default Accordion;
