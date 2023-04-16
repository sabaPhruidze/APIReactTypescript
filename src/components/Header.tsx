import styles from "./styles.module.css";
import logo from "../icon/logo.svg";
import { useState, useEffect } from "react";

export default function Header(props: any) {
  const {
    sShowLogin,
    sShowRegister,
    cRemoveRegLog,
    sRemoveRegLog,
    cUserName,
    cSM,
  } = props;
  return (
    <div
      className={cSM ? styles.headerContainerChange : styles.headerContainer}
    >
      <img src={logo} alt="logo" className={styles.logo} />
      <nav>
        <a href="#" className={`${styles.nav}`}>
          Home
        </a>
        <a href="#" className={`${styles.nav}`}>
          Technology
        </a>
        <a href="#" className={`${styles.nav}`}>
          Contact
        </a>
        <a href="#" className={`${styles.nav}`}>
          confidential agreement
        </a>
        <a href="#" className={`${styles.nav}`}>
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
              <div className={styles.user}>{cUserName}</div>
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
