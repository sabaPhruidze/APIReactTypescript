import styles from "./styles.module.css";
import close from "../icon/close.svg";
import warning from "../icon/warning.svg";
import success from "../icon/success.svg";
import registerImgBlack from "../images/SignUpBlack.svg";
import registerImgWhite from "../images/SignUpWhite.svg";
import Age from "./Age";
import { useState, useEffect } from "react";

//register credential interface
interface userRegisterCredentials {
  username: string | number | readonly string[] | undefined;
  email: string | number | readonly string[] | undefined;
  password: string | number | readonly string[] | undefined;
}
//register credential interface

export default function Register(props: any) {
  // props
  const { sShowRegister, cSM } = props;
  //props

  // register credentials useState
  const [cRUserName, sRUserName] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [cEmail, sEmail] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [cRPassword, sRPassword] = useState<
    string | number | readonly string[] | undefined
  >("");
  // register credentials useState

  //error success states
  const [cError1, sError1] = useState<boolean>(false);
  const [cError2, sError2] = useState<boolean>(false);
  const [cError3, sError3] = useState<boolean>(false);
  const [cSuccess1, sSucess1] = useState<boolean>(false);
  const [cSuccess2, sSucess2] = useState<boolean>(false);
  const [cSuccess3, sSucess3] = useState<boolean>(false);
  //error success states
  //local storage values
  const [cLSValue, sLSValue] = useState<boolean | null>(false);
  //local storage values

  //prevent default from form
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // When we click the button it will not go on another site
    event.preventDefault();
  };

  // save Register In Local Storage step 1
  const saveRILStorage = () => {
    const userRegisterCredentials: userRegisterCredentials = {
      username: cRUserName,
      email: cEmail,
      password: cRPassword,
    };
    //this function saves the value in localStorage step 2
    saveURCredentials(userRegisterCredentials);
  };
  //save User Register Credentials
  const saveURCredentials = (
    userRegisterCredentials: userRegisterCredentials
  ) => {
    localStorage.setItem(
      "userRegisterCredentials",
      JSON.stringify(userRegisterCredentials)
    );
  };
  // localStorage save
  // regex
  function validateInput(input1: any, input2: any, input3: any) {
    const regexUserName = /^(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])(?=.*\d).*$/;
    const isValidUserName = regexUserName.test(input1);

    const regexEmail =
      /^(?=.*\d)(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])[a-zA-Z\d]{3,}@gmail\.com$/;
    const isValidEmail = regexEmail.test(input2);

    const regexPassword =
      /^(?=.*\d)(?=.*[a-zA-Z]{7,})(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/;
    const isValidPassword = regexPassword.test(input3);
    if (isValidUserName && isValidPassword && isValidEmail) {
      sSucess1(true); //if Email was write than you get a notification about it
      sSucess2(true);
      sSucess3(true);
      sError1(false);
      sError2(false);
      sError3(false);
      saveRILStorage();
      sShowRegister(false);
      //if the information is correctly written like regex wanted the info will be saved in localStorage
      //after this we will try to work the login if only userNames and passwords are same as the registered one

      // Store cLStorage in localStorage
    } else if (
      isValidUserName &&
      isValidPassword != true &&
      isValidEmail != true
    ) {
      // Display error message when input is invalid
      sSucess1(true);
      sSucess2(false);
      sSucess3(false);
      sError1(false);
      sError2(true);
      sError3(true);
    } else if (
      isValidUserName != true &&
      isValidPassword &&
      isValidEmail != true
    ) {
      // Display error message when input is invalid
      sSucess1(false);
      sSucess2(true);
      sSucess3(false);
      sError1(true);
      sError2(false);
      sError3(true);
    } else if (
      isValidUserName != true &&
      isValidPassword != true &&
      isValidEmail
    ) {
      // Display error message when input is invalid
      sSucess1(false);
      sSucess2(false);
      sSucess3(true);
      sError1(true);
      sError2(true);
      sError3(false);
    } else if (isValidUserName && isValidPassword && isValidEmail != true) {
      // Display error message when input is invalid
      sSucess1(true);
      sSucess2(true);
      sSucess3(false);
      sError1(false);
      sError2(false);
      sError3(true);
    } else if (isValidUserName && isValidPassword != true && isValidEmail) {
      // Display error message when input is invalid
      sSucess1(true);
      sSucess2(false);
      sSucess3(true);
      sError1(false);
      sError2(true);
      sError3(false);
    } else if (isValidUserName != true && isValidPassword && isValidEmail) {
      // Display error message when input is invalid
      sSucess1(false);
      sSucess2(true);
      sSucess3(true);
      sError1(true);
      sError2(false);
      sError3(false);
    } else {
      // Display error message when input is invalid
      sSucess1(false);
      sSucess2(false);
      sSucess3(false);
      sError1(true);
      sError2(true);
      sError3(true);
    }
  }

  // localStorage does not work but tomorrow I will take care of that

  return (
    <div className={styles.loginContainer}>
      <form
        action=""
        method="post"
        className={cSM ? styles.formRChange : styles.formR}
        onSubmit={handleFormSubmit}
      >
        <img
          src={close}
          alt="close"
          className={cSM ? styles.closeImgChange : styles.closeImg}
          onClick={() => {
            sShowRegister(false);
          }}
          title="Click here to close the component"
        />
        <img
          src={cSM ? registerImgWhite : registerImgBlack}
          alt="register"
          className={styles.registerImg}
        />
        <div className={styles.dFlexRow}>
          {cError1 ? (
            <img
              src={warning}
              alt="warning"
              className={styles.warningSuccesRU}
            />
          ) : undefined}
          {cSuccess1 ? (
            <img
              src={success}
              alt="success"
              className={styles.warningSuccesRU}
            />
          ) : undefined}
          <label htmlFor="userName" style={{ cursor: "pointer" }}>
            Username
          </label>
          <input
            type="text"
            id="userName"
            onChange={(e) => sRUserName(e.target.value)}
            value={cRUserName}
            placeholder="At least 1 digit,3 letters (first letter capitalized)"
          />
        </div>
        <div className={styles.dFlexRow}>
          {cError3 ? (
            <img
              src={warning}
              alt="warning"
              className={styles.warningSuccesRE}
            />
          ) : undefined}
          {cSuccess3 ? (
            <img
              src={success}
              alt="success"
              className={styles.warningSuccesRE}
            />
          ) : undefined}
          <label htmlFor="Email" style={{ cursor: "pointer" }}>
            Email
          </label>
          <input
            type="email"
            id="Email"
            onChange={(e) => sEmail(e.target.value)}
            value={cEmail}
            placeholder='At least 1 digit,3 letters,with the end:"@gmail.com"'
          />
        </div>
        <p className={styles.ageName}>Birthday date</p>
        <Age />
        <div className={styles.dFlexRow}>
          {cError2 ? (
            <img
              src={warning}
              alt="warning"
              className={styles.warningSuccesRP}
            />
          ) : undefined}
          {cSuccess2 ? (
            <img
              src={success}
              alt="success"
              className={styles.warningSuccesRP}
            />
          ) : undefined}
          <label htmlFor="password" style={{ cursor: "pointer" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => sRPassword(e.target.value)}
            value={cRPassword}
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
            validateInput(cRUserName, cEmail, cRPassword);
            sLSValue(true);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
