import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/register";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// npm install react-bootstrap

import "./App.css";
import { useState } from "react";
function App() {
  const [cShowLogin, sShowLogin] = useState<boolean>(false);
  const [cShowRegister, sShowRegister] = useState<boolean>(false);
  const [cRemoveRegLog, sRemoveRegLog] = useState<boolean>(false); // this will show or remove register login
  const [cRemoveLSlogin, sRemoveLSlogin] = useState<boolean>(false);
  const [cLoginUserName, sLoginUserName] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [cPageNum, sPageNum] = useState<number>(0);
  const [cSM, sSM] = useState<boolean>(false); //current Sun moon change , set sun moon change
  //more visit in header
  // const shouldHideOverflow = cPageNum === 2 || cPageNum === 3;
  const [cTechnologyunlocked, sTechnologyunlocked] = useState<boolean>(false);
  return (
    <div className={cSM ? "containerChange" : "containerFirst"}>
      {cShowLogin ? (
        <Login
          sShowLogin={sShowLogin}
          sRemoveRegLog={sRemoveRegLog}
          cLoginUserName={cLoginUserName}
          sLoginUserName={sLoginUserName}
          cSM={cSM}
          cRemoveRegLog={cRemoveRegLog}
          cRemoveLSlogin={cRemoveLSlogin}
          cTechnologyunlocked={cTechnologyunlocked}
          sTechnologyunlocked={sTechnologyunlocked}
        />
      ) : null}
      {cShowRegister ? (
        <Register sShowRegister={sShowRegister} cSM={cSM} />
      ) : null}
      <Header
        cShowLogin={cShowLogin}
        sShowLogin={sShowLogin}
        cShowRegister={cShowRegister}
        sShowRegister={sShowRegister}
        cRemoveRegLog={cRemoveRegLog}
        sRemoveRegLog={sRemoveRegLog}
        cLoginUserName={cLoginUserName}
        cSM={cSM}
        sSM={sSM}
        cPageNum={cPageNum}
        sPageNum={sPageNum}
        cRemoveLSlogin={cRemoveLSlogin}
        sRemoveLSlogin={sRemoveLSlogin}
        cTechnologyunlocked={cTechnologyunlocked}
        sTechnologyunlocked={sTechnologyunlocked}
      />
      <Body cSM={cSM} sSM={sSM} cPageNum={cPageNum} />
      <Footer
        cSM={cSM}
        cShowLogin={cShowLogin}
        cShowRegister={cShowRegister}
        cPageNum={cPageNum}
        sPageNum={sPageNum}
      />
    </div>
  );
}
export default App;
