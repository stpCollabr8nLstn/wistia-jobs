import ClassNames from '/browser/classes/class-names';

const IconHeartBeat = props => (
  <svg
    {...props}
    className="Icon IconHeartBeat"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2px"
    viewBox="0 0 50 50">
    <path
      d="
        M42,26.07a10.38,10.38,0,0,0-17-12,10.38,10.38,0,0,0-18.83,6c0,1.77,1.12,
        3.9,2.24,5.59a26.44,26.44,0,0,0,3.34,4.05L25,43S41.24,27.07,41.93,26.09Z
      "
    />
    <polyline
      points="
        8.09 24.06 19.05 24.06 20.77 18.3 23.56 30.5 27.64 22.1 29.79 25.35
        41.91 25.35
      "
    />
  </svg>
);

export default IconHeartBeat;
