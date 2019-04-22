import ClassNames from '/browser/classes/class-names';

const IconSnacks = props => (
  <svg
    {...props}
    className="Icon IconSnacks"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2px"
    viewBox="0 0 50 50">
    <circle cx="18.51" cy="32.19" r="9.73" strokeMiterlimit="10" />
    <line x1="6.14" x2="28.24" y1="32.19" y2="32.19" />
    <line x1="28.24" x2="42.92" y1="24.55" y2="24.55" />
    <polygon
      points="
        40.86 40.92 30.2 40.92 27.2 16.74 43.86 16.74 40.86 40.92
      "
    />
    <polyline points="35.53 34.22 35.58 8.08 40.55 11.28" />
  </svg>
);

export default IconSnacks;
