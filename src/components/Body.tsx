import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import moonRegular from "../icon/moonRegular.svg";
import sunRegular from "../icon/sunRegular.svg";
import Home from "./Header HTCCH/Home";
import Technology from "./Header HTCCH/Technology";
import Contact from "./Header HTCCH/Contact";
import ConfidentialAgreement from "./Header HTCCH/ConfidentialAgreement";
import Help from "./Header HTCCH/Help";
interface UserCredentials {
  username: string;
  password: string;
}

export default function Body(props: any) {
  const { cSM, sSM, cPageNum } = props;
  return (
    <div className={cSM ? styles.bodyContainerChange : styles.bodyContainer}>
      <img
        src={cSM ? moonRegular : sunRegular}
        alt="Change background color to dark"
        className={cSM ? styles.moonRegular : styles.sunRegular}
        onClick={() => {
          sSM(!cSM);
        }}
        title="click to change the background color"
      />
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
