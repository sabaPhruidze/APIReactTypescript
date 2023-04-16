import styles from "./styles.module.css";

export default function Footer(props: any) {
  const { cSM, cShowRegister, cShowLogin } = props;
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
      Footer
    </div>
  );
}
