import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Home from "./Header HTCCH/Home";
import Technology from "./Header HTCCH/Technology";
import Contact from "./Header HTCCH/Contact";
import ConfidentialAgreement from "./Header HTCCH/ConfidentialAgreement";
import Help from "./Header HTCCH/Help";

export default function Body(props: any) {
  const { cSM, sSM, cPageNum } = props;
  return (
    <div className={cSM ? styles.bodyContainerChange : styles.bodyContainer}>
      {cPageNum === 0 ? (
        <Home cSM={cSM} />
      ) : cPageNum === 1 ? (
        <Technology cSM={cSM} />
      ) : cPageNum === 2 ? (
        <Contact cSM={cSM} />
      ) : cPageNum === 3 ? (
        <ConfidentialAgreement cSM={cSM} />
      ) : (
        <Help cSM={cSM} />
      )}
    </div>
  );
}
