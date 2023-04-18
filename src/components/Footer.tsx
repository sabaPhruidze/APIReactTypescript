import styles from "./styles.module.css";
import copyRightImgWhite from "../icon/copyrightWhite.svg";
export default function Footer(props: any) {
  const { cSM, sPageNum, cPageNum } = props;
  return (
    <div
      className={
        cSM
          ? styles.footerContainerChange
          : cSM !== true
          ? styles.footerContainer
          : undefined
      }
    >
      <div className={cSM ? styles.footerNavChange : styles.footerNav}>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(0)}>
          Home
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(2)}>
          Contact
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(3)}>
          confidential agreement
        </a>
        <a href="#" className={`${styles.nav}`} onClick={() => sPageNum(4)}>
          help
        </a>
      </div>
      <div
        className={styles.privacy}
        style={{ display: "flex", height: "40px" }}
      >
        <img
          src={copyRightImgWhite}
          alt="copyRight"
          className={cSM ? styles.copyRightImgBlack : styles.copyRightImg}
        />
        <p>2023-...</p>
      </div>
    </div>
  );
}
