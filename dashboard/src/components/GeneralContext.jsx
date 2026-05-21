import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [windowType, setWindowType] = useState(null);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setWindowType("BUY");
    setSelectedStockUID(uid);
  };

  const handleOpenSellWindow = (uid) => {
    setWindowType("SELL");
    setSelectedStockUID(uid);
  };

  const handleCloseWindow = () => {
    setWindowType(null);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeWindow: handleCloseWindow,
      }}
    >
      {props.children}
      {windowType === "BUY"  && <BuyActionWindow  uid={selectedStockUID} />}
      {windowType === "SELL" && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;