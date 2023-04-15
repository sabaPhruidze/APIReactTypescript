import styles from "./styles.module.css";
import { useState, useEffect } from "react";

interface UserCredentials {
  username: string;
  password: string;
}

export default function Body() {
  return <div className={styles.bodyContainer}></div>;
}
