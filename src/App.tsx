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
  //more visit in header
  return (
    <div className="container">
      {cShowLogin ? (
        <Login
          sShowLogin={sShowLogin}
          sRemoveRegLog={sRemoveRegLog}
          cUserName={cUserName}
          sUserName={sUserName}
        />
      ) : null}
      {cShowRegister ? <Register sShowRegister={sShowRegister} /> : null}
      <Header
        cShowLogin={cShowLogin}
        sShowLogin={sShowLogin}
        cShowRegister={cShowRegister}
        sShowRegister={sShowRegister}
        cRemoveRegLog={cRemoveRegLog}
        sRemoveRegLog={sRemoveRegLog}
        cUserName={cUserName}
      />
      <Body />
      <Footer />
    </div>
  );
}
export default App;
