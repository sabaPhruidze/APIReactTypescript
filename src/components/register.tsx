import styles from "./styles.module.css";
import close from "../icon/close.svg";
import warning from "../icon/warning.svg";
import success from "../icon/success.svg";
import register from "../icon/register.svg";
import Age from "./Age";
import { useState, useEffect } from "react";
interface UserCredentials {
  username: string | number | readonly string[] | undefined;
  email: string | number | readonly string[] | undefined;
  password: string | number | readonly string[] | undefined;
}

export default function Register(props: any) {
  const [cUserName, sUserName] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [cEmail, sEmail] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [cPassword, sPassword] = useState<
    string | number | readonly string[] | undefined
  >("");
  //error success states
  const [cError1, sError1] = useState<boolean>(false);
  const [cError2, sError2] = useState<boolean>(false);
  const [cError3, sError3] = useState<boolean>(false);
  const [cSuccess1, sSucess1] = useState<boolean>(false);
  const [cSuccess2, sSucess2] = useState<boolean>(false);
  const [cSuccess3, sSucess3] = useState<boolean>(false);

  const [cLValue, sLValue] = useState<boolean | null>(false);
  // const cLVal = useRef(cLValue);
  const { sShowRegister, cSM } = props;
  //error success states
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // When we click the button it will not go on another site
  };
  //this function gets ready the values to use it for localStorage
  // localStorage save
  const handleSave = () => {
    const userCredentials: UserCredentials = {
      username: cUserName,
      email: cEmail,
      password: cPassword,
    };
    //this function saves the value in localStorage
    saveUserCredentials(userCredentials);
  };
  const saveUserCredentials = (userCredentials: UserCredentials) => {
    localStorage.setItem("userCredentials", JSON.stringify(userCredentials));
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
      handleSave();
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
        <img src={register} alt="register" className={styles.registerImg} />
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
            onChange={(e) => sUserName(e.target.value)}
            value={cUserName}
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
            validateInput(cUserName, cEmail, cPassword);
            sLValue(true);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
