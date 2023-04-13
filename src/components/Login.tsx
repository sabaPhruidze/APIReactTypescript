import styles from "./styles.module.css"
import Authentication from "../icon/Authentication-rafiki.svg"
import close from "../icon/close.svg"
import warning from "../icon/warning.svg"
import success from "../icon/success.svg"
import {useState} from "react"
export default function Login(props:any) {

    const [cUserName,sUserName] = useState<string | number | readonly string[] | undefined>("")
    const [cPassword,sPassword] = useState<string | number | readonly string[] | undefined>("")
    const [cError1,sError1] = useState<boolean>(false)
    const [cError2,sError2] = useState<boolean>(false)
    const [cSuccess1,sSucess1] = useState<boolean>(false)
    const [cSuccess2,sSucess2] = useState<boolean>(false)
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        // When we click the button it will not go on another site 
      };
      // regex
      function validateInput(input1:any,input2:any) {
        const regexUserName = /^(?=.*\d)(?=.*[A-Z][a-z]{2,})(?=.*\W).+$/;
        const isValidUserName = regexUserName.test(input1);
        
        const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]{7,})(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/
        const isValidPassword =regexPassword.test(input2)
        if (isValidUserName && isValidPassword) {
            sSucess1(true); //if Email was write than you get a notification about it
            sSucess2(true);
            sError1(false);
            sError2(false);
            console.log("nice");
            sShowLogin(false)
        } else if(isValidUserName && isValidPassword != true){
          // Display error message when input is invalid
          sSucess1(true);
          sSucess2(false);
          sError1(false);
          sError2(true);
          console.log("really negga") // if not succeed there will be a warning icon that tells you 
        }else if(isValidUserName !=true && isValidPassword){
            // Display error message when input is invalid
            sSucess1(false);
            sSucess2(true);
            sError1(true);
            sError2(false);
            console.log("really negga") // if not succeed there will be a warning icon that tells you 
          }else{
            // Display error message when input is invalid
            sSucess1(false);
            sSucess2(false);
            sError1(true);
            sError2(true);
            console.log("really negga") // if not succeed there will be a warning icon that tells you 
          }
      }
      const {sShowLogin} = props
  return (
    <div className={styles.loginContainer}>
        <form action="" method="post" className={styles.formL} onSubmit={handleFormSubmit}>
            <img src={close} alt="close" className={styles.closeImg} onClick={() => {sShowLogin(false)}}/>
            <img src={Authentication} alt="Authentication" className={styles.AuthenticationImg}/>
           <div className={styles.dFlexRow}>
                {cError1 ? <img src={warning} alt="warning" className={styles.warningSuccesEU}/> : undefined}
                {cSuccess1 ? <img src={success} alt="success" className={styles.warningSuccesEU}/> : undefined}
                <label htmlFor="userName" style={{cursor:"pointer"}}>Username</label>
                <input type="email" id="userName" onChange={e => sUserName(e.target.value)} value={cUserName} placeholder="At least 1 digit,3 letters (first letter capitalized),1 symbol"/>
           </div>
           <div className={styles.dFlexRow}>
                {cError2 ? <img src={warning} alt="warning" className={styles.warningSuccesEP}/> : undefined}
                {cSuccess2 ? <img src={success} alt="success" className={styles.warningSuccesEP}/> : undefined}
                <label htmlFor="password" style={{cursor:"pointer"}}>Password</label>
                <input type="password" id="password" onChange={e => sPassword(e.target.value)} value={cPassword} placeholder="At least one digit,seven letter and one symbol"/>
           </div>
           <button className={`${styles.btn} ${styles.btnLogin}`} type="submit" onClick={() => {
            validateInput(cUserName,cPassword);
           }}>Login</button>
        </form>
    </div>
  )
}
