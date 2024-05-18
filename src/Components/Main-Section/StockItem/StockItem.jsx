import { useState } from "react";
import items from "./stockitems.json";

import styles from "./style.module.css";

const { layout, card, item1, dropDown } = styles;

const StockItem = ({searchText}) => {
  console.log("hello" , searchText);
  const [isOpenIndex , setIsOpenIndex] =  useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const manageOpened = (id) => {
    if(isOpen){
     if(isOpenIndex == id){
       setIsOpen(false);
      setIsOpenIndex(null);
     } else {
      setIsOpen(true);
      setIsOpenIndex(id)
     }
    }
    else {
      setIsOpenIndex(id);
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      <section className={layout}>
        {items.filter(item => {
            const listItem = item.name.toLowerCase();
            const textData = searchText.toLowerCase();
            return listItem.includes(textData);
        }).map(({ id, name, viewed, trade, risk }) => {
          return (
            <div key={id}>
              <div className={card} onClick={() => manageOpened(id)}>
                <div className={item1}>
                  <img src="assets/dollar.png" alt="dollar" />
                  <p>{name}</p>
                  <span>|</span>
                </div>
                <div className={item1}>
                  <img src="assets/viewed.png" alt="dollar" />
                  <p>{viewed}</p>
                  <span>|</span>
                </div>
                <div className={item1}>
                  <img src="assets/trade.png" alt="dollar" />
                  <p>{trade}</p>
                  <span>|</span>
                </div>
                <div className={item1}>
                  <img src="assets/risk.png" alt="dollar" />
                  <p>{risk}</p>
                  <span>|</span>
                </div>
              </div>
              { isOpenIndex == id && isOpen && (
                <div
                  type="checkbox"
                  style={{ cursor: "text" }}
                  className={dropDown}
                >
                  <p>
                    <strong>${name}</strong> just announced an acquisition of{" "}
                    <strong>$NFLX</strong> at <strong>${viewed} B</strong>.
                  </p>
                  <p>
                    This is an{" "}
                    <span
                      style={{ color: "#53ACFF", textDecoration: "underline" }}
                    >
                      arbitrage opportunity
                    </span>
                    , with the max gain being %X if the deal closes, but the
                    possible risk is %Y if the deal fails, If the deal success
                    is % and therefore the recommended play is{" "}
                    <span
                      style={{ color: "#53ACFF", textDecoration: "underline" }}
                    >
                      long/short
                    </span>{" "}
                    $ABC
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default StockItem;
