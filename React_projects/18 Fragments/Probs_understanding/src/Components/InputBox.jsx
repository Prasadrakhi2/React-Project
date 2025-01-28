import styles from "./InputBox.module.css"

const InputBox = () =>{

    const handleEvent = (event) =>{
        console.log(event.target.value)
    }

    return <input className={styles.input} type="text" placeholder="Enter food item here..."  onChange={handleEvent}/>
    // given by the reference
}

export default InputBox;