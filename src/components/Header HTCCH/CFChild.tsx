import React from "react";
import styles from "./HTCCH.module.css";
export default function CFChild(props: any) {
  const { accordionArrow, cAN, sAN, number, title, content, cSM } = props;
  return (
    <div className={styles.accordionCard}>
      <div className={styles.headLine}>
        <h5>{title}</h5>
        <img
          src={accordionArrow}
          alt="accordionArrow"
          className={
            cAN === number && cSM
              ? `${styles.accordionArrowChangeL}`
              : cAN !== number && cSM
              ? styles.accordionArrowL
              : cAN === number && cSM !== true
              ? styles.accordionArrowChange
              : styles.accordionArrow
          }
          onClick={() => {
            if (cAN === number) {
              sAN(null);
            } else {
              sAN(number);
            }
          }}
        />
      </div>
      {cAN === number ? (
        <div className={styles.bodyLine}>
          <p>{content}</p>
        </div>
      ) : null}
    </div>
  );
}
