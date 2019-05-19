import React, { useState } from "react";

const PerksContext = React.createContext([{}, () => {}]);

const PerksProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <PerksContext.Provider value={[state, setState]}>
      {children}
    </PerksContext.Provider>
  );
};

export { PerksContext, PerksProvider };
