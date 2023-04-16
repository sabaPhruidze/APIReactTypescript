import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/register";
import "./App.css";
import { useState } from "react";
function App() {
  const [cShowLogin, sShowLogin] = useState<boolean>(false);
  const [cShowRegister, sShowRegister] = useState<boolean>(false);
  const [cRemoveRegLog, sRemoveRegLog] = useState<boolean>(false); // this will show or remove register login
  const [cUserName, sUserName] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [cSM, sSM] = useState<boolean>(false); //current Sun moon change , set sun moon change
  //more visit in header
  return (
    <div className={cSM ? "containerChange" : "container"}>
      {cShowLogin ? (
        <Login
          sShowLogin={sShowLogin}
          sRemoveRegLog={sRemoveRegLog}
          cUserName={cUserName}
          sUserName={sUserName}
          cSM={cSM}
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
        cUserName={cUserName}
        cSM={cSM}
      />
      <Body cSM={cSM} sSM={sSM} />
      <Footer cSM={cSM} cShowLogin={cShowLogin} cShowRegister={cShowRegister} />
    </div>
  );
}
export default App;
