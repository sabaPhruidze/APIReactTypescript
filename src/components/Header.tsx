import styles from "./styles.module.css"
import logo from "../icon/logo.svg"
import { useState,useEffect } from "react"

export default function Header(props:any) {
  const {cShowLogin,sShowLogin} = props
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <nav>
        <a href="#" className={`${styles.nav}`}>Home</a>
        <a href="#" className={`${styles.nav}`}>Technology</a>
        <a href="#" className={`${styles.nav}`}>Contact</a>
        <a href="#" className={`${styles.nav}`}>confidential agreement</a>
        <a href="#" className={`${styles.nav}`}>help</a>
      </nav>
      <div className={styles.regLog}>
        <button style={{marginRight: 20}} className={styles.btn} onClick={() => {sShowLogin(true)}}>Login</button>
        <button className={styles.btn}>Register</button>
      </div>
    </div>
  )
}
