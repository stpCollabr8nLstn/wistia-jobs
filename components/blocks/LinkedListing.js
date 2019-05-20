import ClassNames from "../../utils/classnames";
import COLORS from "../../utils/colors";

const LinkedListingSection = ({ children }) => (
  <div className="LinkedListing__section Heading--3">{children}</div>
);

const LinkedListingLink = ({ children, link }) => (
  <div className="LinkedListing__link Text">
    <a href={link}>{children}</a>
  </div>
);

const LinkedListing = ({ children }) => (
  <div className="LinkedListing">
    {children}
    <style jsx>{`
      .LinkedListing :global(.LinkedListing__section) {
        padding-top: 24px;
      }
      .LinkedListing :global(.LinkedListing__link a) {
        color: ${COLORS.BLUE_DARK};
        text-decoration: none;
      }
    `}</style>
  </div>
);

Object.defineProperties(LinkedListing, {
  Section: {
    value: ClassNames.extend(LinkedListingSection, "LinkedListingSection")
  },
  Link: {
    value: ClassNames.extend(LinkedListingLink, "LinkedListingLink")
  }
});

export default LinkedListing;
