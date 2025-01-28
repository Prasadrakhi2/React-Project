import styles from "./Button.module.css"
const Button = () =>{

    let number = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]


    return(
        <div className={styles.buttonContainer}>
                {number.map((item)=> <button key ={item} className={styles.button}>{item}</button>)}
              </div>
    )
}

export default Button;