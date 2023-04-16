import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import moonRegular from "../icon/moonRegular.svg";
import sunRegular from "../icon/sunRegular.svg";
import Carousel from "./Carousel";
interface UserCredentials {
  username: string;
  password: string;
}

export default function Body(props: any) {
  const { cSM, sSM } = props;
  return (
    <div className={cSM ? styles.bodyContainerChange : styles.bodyContainer}>
      <img
        src={cSM ? moonRegular : sunRegular}
        alt="Change background color to dark"
        className={cSM ? styles.moonRegular : styles.sunRegular}
        onClick={() => {
          sSM(!cSM);
        }}
        title="click to change the background color"
      />
      <Carousel />
    </div>
  );
}
