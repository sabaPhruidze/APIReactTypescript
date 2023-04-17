import React from "react";
import styles from "./HTCCH.module.css";
import axios from "axios";
import warning from "../../icon/warning.svg";
import success from "../../icon/success.svg";
import { useState, useEffect } from "react";
export default function Contact(props: any) {
  const { cSM } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const [cUserName, sUserName] = useState<string>("");
  const [cEmail, sEmail] = useState<string>("");
  const [cTextArea, sTextArea] = useState<string>("");

  type post = {
    name: string;
    email: string;
    text: string;
  };
  const [cSendInfo, sSendInfo] = useState<post>();
  const [cSend, sSend] = useState<boolean>(false);

  const [cError1, sError1] = useState<boolean>(false);
  const [cError2, sError2] = useState<boolean>(false);
  const [cError3, sError3] = useState<boolean>(false);
  const [cSuccess1, sSucess1] = useState<boolean>(false);
  const [cSuccess2, sSucess2] = useState<boolean>(false);
  const [cSuccess3, sSucess3] = useState<boolean>(false);
  // I can do the all instructions such as get,post,put,delete using only async, but axios is much comfortable when you have a different paths for different instructions
  //unfortunatelly I didn't learn yet how to make backEnd So I am using Another persons dataBase which will be seen https://coding-world.com/fake-contact/ website
  //or you can check in devTool
  // const axiosInstance = axios.create({
  //   baseURL: "",
  //   timeout: 1000,
  // });

  useEffect(() => {
    const createUser = async () => {
      const response = await axios.post(
        "https://coding-world.com/back/public/api/fake-contact/add",
        cSendInfo
      );
    };
    console.log("sf");
    createUser(); // the function must be summond after writing eat
  }, [cSend]);

  function sendInfo() {
    sSendInfo({
      name: cUserName,
      email: cEmail,
      text: cTextArea,
    });
    sSend(!cSend);
  }

  function regexCheck(name: string, email: string, text: string) {
    const nameRegex = /^(?=.*[a-zA-Z]{3})[\s\S]*$/;
    const nameRR = nameRegex.test(name); //regex result

    const emailRegex = /^(?=.*[a-zA-Z]{3})[\s\S]*@gmail\.com$/;
    const emailRR = emailRegex.test(email);

    const textRegex = /^(?=.*[a-zA-Z]{7})[\s\S]*$/;
    const textRR = textRegex.test(text);

    if (nameRR && emailRR && textRR) {
      sError1(false);
      sError2(false);
      sError3(false);
      sSucess1(true);
      sSucess2(true);
      sSucess3(true);
      sendInfo();
    } else if (nameRR === false && emailRR && textRR) {
      sError1(true);
      sError2(false);
      sError3(false);
      sSucess1(false);
      sSucess2(true);
      sSucess3(true);
    } else if (nameRR && emailRR === false && textRR) {
      sError1(false);
      sError2(true);
      sError3(false);
      sSucess1(true);
      sSucess2(false);
      sSucess3(true);
    } else if (nameRR && emailRR && textRR === false) {
      sError1(false);
      sError2(false);
      sError3(true);
      sSucess1(true);
      sSucess2(true);
      sSucess3(false);
    } else if (nameRR === false && emailRR === false && textRR) {
      sError1(true);
      sError2(true);
      sError3(false);
      sSucess1(false);
      sSucess2(false);
      sSucess3(true);
    } else if (nameRR === false && emailRR && textRR === false) {
      sError1(true);
      sError2(false);
      sError3(true);
      sSucess1(false);
      sSucess2(true);
      sSucess3(false);
    } else if (nameRR && emailRR === false && textRR === false) {
      sError1(false);
      sError2(true);
      sError3(true);
      sSucess1(true);
      sSucess2(false);
      sSucess3(false);
    } else {
      sError1(true);
      sError2(true);
      sError3(true);
      sSucess1(false);
      sSucess2(false);
      sSucess3(false);
    }
  }
  return (
    <div
      className={
        cSM ? `${styles.dFlexRowChange} ${styles.dFlexRow}` : styles.dFlexRow
      }
    >
      <div className={styles.contactForm}>
        <h1>Contact form</h1>
        <p>Fill in the fields below and click the submit button</p>
        <form method="post" onSubmit={handleSubmit}>
          <div className={`${styles.dFlexColumn} ${styles.name}`}>
            {cError1 ? (
              <img src={warning} alt="warning" className={styles.warning1} />
            ) : undefined}
            {cSuccess1 ? (
              <img src={success} alt="success" className={styles.success1} />
            ) : undefined}
            <label htmlFor="name" className={styles.name}>
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => sUserName(e.target.value)}
              value={cUserName}
              placeholder="At least 3 letters"
            />
          </div>
          <div className={`${styles.dFlexColumn} ${styles.email}`}>
            {cError2 ? (
              <img src={warning} alt="warning" className={styles.warning2} />
            ) : undefined}
            {cSuccess2 ? (
              <img src={success} alt="success" className={styles.success2} />
            ) : undefined}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => sEmail(e.target.value)}
              value={cEmail}
              placeholder='At least 3 letters with the end "gmail.com"'
            />
          </div>
          <div className={`${styles.dFlexColumn} ${styles.textArea}`}>
            {cError3 ? (
              <img src={warning} alt="warning" className={styles.warning3} />
            ) : undefined}
            {cSuccess3 ? (
              <img src={success} alt="success" className={styles.success3} />
            ) : undefined}
            <label htmlFor="textArea">Message</label>
            <textarea
              name="textArea"
              id="textArea"
              className={styles.textArea}
              onChange={(e) => sTextArea(e.target.value)}
              value={cTextArea}
              placeholder="At least 7 letters"
            ></textarea>
          </div>
          <button
            className={
              cSM
                ? `${styles.btnChange} ${styles.btnSubmit}`
                : `${styles.btn} ${styles.btnSubmit}`
            }
            onClick={() => {
              regexCheck(cUserName, cEmail, cTextArea);
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <div className={styles.contactInfo}></div>
    </div>
  );
}
