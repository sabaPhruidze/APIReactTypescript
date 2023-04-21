import styles from "./styles.module.css";
import logo from "../icon/logo.svg";
import Home from "./Header HTCCH/Home";
import Technology from "./Header HTCCH/Technology";
import Contact from "./Header HTCCH/Contact";
import ConfidentialAgreement from "./Header HTCCH/ConfidentialAgreement";
import Help from "./Header HTCCH/Help";
import moonRegular from "../icon/moonRegular.svg";
import sunRegular from "../icon/sunRegular.svg";
import { useState, useEffect } from "react";

export default function Header(props: any) {
  const {
    sShowLogin,
    sShowRegister,
    cRemoveRegLog,
    sRemoveRegLog,
    cLoginUserName,
    cSM,
    sSM,
    sPageNum,
  } = props;
  return (
    <div
      className={cSM ? styles.headerContainerChange : styles.headerContainer}
    >
      <img
        src={cSM ? moonRegular : sunRegular}
        alt="Change background color to dark"
        className={cSM ? styles.moonRegular : styles.sunRegular}
        onClick={() => {
          sSM(!cSM);
        }}
        title="click to change the background color"
      />
      <img src={logo} alt="logo" className={styles.logo} />
      <nav>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(0)}>
          Home
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(1)}>
          Technology
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(2)}>
          Contact
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(3)}>
          confidential agreement
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(4)}>
          help
        </a>
      </nav>
      <div className={styles.regLog}>
        {cRemoveRegLog !== true ? (
          <>
            <button
              style={{ marginRight: 20 }}
              className={cSM ? styles.btnChange : styles.btn}
              onClick={() => {
                sShowLogin(true);
              }}
            >
              Login
            </button>
            <button
              className={cSM ? styles.btnChange : styles.btn}
              onClick={() => {
                sShowRegister(true);
              }}
            >
              Register
            </button>
          </>
        ) : (
          <>
            {/* <> and </> makes like an JSX */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className={styles.user}>{cLoginUserName}</div>
              <button
                style={{ marginLeft: 20 }}
                className={cSM ? styles.btnChange : styles.btn}
                onClick={() => {
                  sRemoveRegLog(false);
                }}
              >
                Log out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
