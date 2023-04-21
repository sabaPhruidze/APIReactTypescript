import styles from "./styles.module.css";
import logInImgBlack from "../images/loginBlack.svg";
import logInImgWhite from "../images/loginWhite.svg";
import close from "../icon/close.svg";
import warning from "../icon/warning.svg";
import success from "../icon/success.svg";
import { useEffect, useState } from "react";
export default function Login(props: any) {
  //props
  const {
    sShowLogin,
    sRemoveRegLog,
    cLoginUserName, // current login User name from input
    sLoginUserName, //set login User name from input
    cSM,
    cRemoveLSlogin,
  } = props;
  //input login password
  const [cPassword, sPassword] = useState<
    string | number | readonly string[] | undefined
  >("");
  //success fail
  const [cError1, sError1] = useState<boolean>(false);
  const [cError2, sError2] = useState<boolean>(false);
  const [cSuccess1, sSucess1] = useState<boolean>(false);
  const [cSuccess2, sSucess2] = useState<boolean>(false);
  // user local storage registered userName and password
  const [clSRUsername, sLSRUsername] = useState<string | number | symbol>();
  const [clSRPassword, sLSRPassword] = useState<string | number | symbol>();
  //prevent default form
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // When we click the button it will not go on another site
  };
  interface loginObj {
    username: string | number | readonly string[] | undefined;
    password: string | number | readonly string[] | undefined;
  }
  //save login in local storage
  const loginSave = () => {
    const loginSave: loginObj = {
      username: cLoginUserName,
      password: cPassword,
    };
    //this function saves the value in localStorage
    saveLoginCredentials(loginSave);
  };
  const saveLoginCredentials = (userLogin: loginObj) => {
    localStorage.setItem("userLoginCredentials", JSON.stringify(userLogin));
  };
  //save login in local storage

  //if you log out it will be deleted from localStorage

  // Get register's username and password from local storage
  useEffect(() => {
    getUserCredentials();
    handleGetUserName();
    handleGetPassword();
  }, []);

  const getUserCredentials = () => {
    const storedCredentials = localStorage.getItem("userRegisterCredentials");
    if (storedCredentials) {
      return JSON.parse(storedCredentials);
    }

    return { username: "", password: "" };
  };
  const handleGetUserName = () => {
    const userCredentials = getUserCredentials();
    sLSRUsername(userCredentials.username);
  };
  const handleGetPassword = () => {
    const userCredentials = getUserCredentials();
    sLSRPassword(userCredentials.password);
  };
  // Get register's username and password from local storage

  // regex
  function validateInput() {
    //                   input                        input
    if (clSRUsername === cLoginUserName && clSRPassword === cPassword) {
      sSucess1(true); //if Email was write than you get a notification about it
      sSucess2(true);
      sError1(false);
      sError2(false);
      sShowLogin(false);
      sRemoveRegLog(true);
      loginSave();
    } else if (clSRUsername === cLoginUserName && clSRPassword !== cPassword) {
      // Display error message when input is invalid
      sSucess1(true);
      sSucess2(false);
      sError1(false);
      sError2(true);
    } else if (clSRUsername !== cLoginUserName && clSRPassword === cPassword) {
      // Display error message when input is invalid
      sSucess1(false);
      sSucess2(true);
      sError1(true);
      sError2(false);
    } else {
      sSucess1(false);
      sSucess2(false);
      sError1(true);
      sError2(true);
    }
  }
  return (
    <div className={styles.loginContainer}>
      <form
        action=""
        method="post"
        className={cSM ? styles.formLChange : styles.formL}
        onSubmit={handleFormSubmit}
      >
        <img
          src={close}
          alt="close"
          className={cSM ? styles.closeImgChange : styles.closeImg}
          onClick={() => {
            sShowLogin(false);
          }}
          title="click here to close the Login page"
        />
        <img
          src={cSM ? logInImgWhite : logInImgBlack}
          alt="Authentication"
          className={styles.AuthenticationImg}
        />
        <div className={styles.dFlexRow}>
          {cError1 ? (
            <img
              src={warning}
              alt="warning"
              className={styles.warningSuccesEU}
              title="At least 1 digit,3 letters (first letter capitalized),1 symbol"
            />
          ) : undefined}
          {cSuccess1 ? (
            <img
              src={success}
              alt="success"
              className={styles.warningSuccesEU}
            />
          ) : undefined}
          <label htmlFor="userName" style={{ cursor: "pointer" }}>
            Username
          </label>
          <input
            type="email"
            id="userName"
            onChange={(e) => sLoginUserName(e.target.value)}
            value={cLoginUserName}
            placeholder="At least 1 digit,3 letters (first letter capitalized),1 symbol"
          />
        </div>
        <div className={styles.dFlexRow}>
          {cError2 ? (
            <img
              src={warning}
              alt="warning"
              className={styles.warningSuccesEP}
              title="At least one digit,seven letter and one symbol"
            />
          ) : undefined}
          {cSuccess2 ? (
            <img
              src={success}
              alt="success"
              className={styles.warningSuccesEP}
            />
          ) : undefined}
          <label htmlFor="password" style={{ cursor: "pointer" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => sPassword(e.target.value)}
            value={cPassword}
            placeholder="At least one digit,seven letter and one symbol"
          />
        </div>
        <button
          className={
            cSM
              ? `${styles.btn} ${styles.btnLoginChange}`
              : `${styles.btn} ${styles.btnLogin}`
          }
          type="submit"
          onClick={() => {
            validateInput();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
