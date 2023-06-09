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
  const [cMountLogin, sMountLogin] = useState<string | undefined>(undefined);
  const {
    sShowLogin,
    sShowRegister,
    cRemoveRegLog,
    sRemoveRegLog,
    cLoginUserName,
    cSM,
    sSM,
    sPageNum,
    cTechnologyunlocked,
    sTechnologyunlocked,
    cWriteLogOut,
    cShowLogin,
    sCWriteLogOut,
  } = props;
  useEffect(() => {
    const userLoginCredentials = localStorage.getItem("userLoginCredentials");
    if (userLoginCredentials) {
      const loginData = JSON.parse(userLoginCredentials);
      if (loginData) {
        sMountLogin(loginData.username); //when it will become true loginData.username will be written
      }
    }
  }, [cShowLogin, sRemoveRegLog]);

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
        <a
          href="#"
          className={
            (cTechnologyunlocked !== true && cSM) ||
            (cTechnologyunlocked && cSM !== true)
              ? `${styles.nav}`
              : `${styles.navChange}`
          }
          onClick={() => sPageNum(0)}
        >
          Home
        </a>
        <a
          href="#"
          className={styles.nav}
          onClick={() => {
            if (cTechnologyunlocked === false) {
              return "";
            } else {
              sPageNum(1);
            }
          }}
          style={{
            color:
              cTechnologyunlocked && cSM
                ? "black"
                : cTechnologyunlocked !== true && cSM
                ? "#8c8787"
                : cTechnologyunlocked && cSM !== true
                ? "white"
                : "#8c8787",
            textDecoration:
              (cTechnologyunlocked !== true && cSM) ||
              (cTechnologyunlocked !== true && cSM !== true)
                ? "none"
                : "",
          }}
          //by this it will be grey when you are not logged in and You cannot see the technology ,else you can open technology
        >
          Technology
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(2)}>
          Contact
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(3)}>
          Confidential agreement
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(4)}>
          help
        </a>
      </nav>
      <div className={styles.regLog}>
        {cRemoveRegLog !== true && cWriteLogOut !== true ? (
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
              <div className={styles.user}>{cMountLogin}</div>
              <button
                style={{ marginLeft: 20 }}
                className={cSM ? styles.btnChange : styles.btn}
                onClick={() => {
                  localStorage.removeItem("userLoginCredentials");
                  sRemoveRegLog(false);
                  sCWriteLogOut(false);
                  sTechnologyunlocked(false);
                  // using this when you log out the localStorage of userLoginCredentials will be removed
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
