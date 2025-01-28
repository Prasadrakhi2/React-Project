import Button from "./Components/Button"
import styles from "./App.module.css"
import Display from "./Components/Display"

function App() {

  return(
    <div className={styles.calculater}>
      <Display></Display>
      <Button></Button>
    </div>
  )
}

export default App
