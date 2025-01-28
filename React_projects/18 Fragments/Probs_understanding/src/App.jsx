import './App.css'
import Food_items from './Components/Food_items'
import ErrorMesg from './Components/ErrorMesg'
import Container from './Components/Container'
import InputBox from './Components/InputBox'

function App() {
    
  // let food_items = []
  let food_items = ["dal", "chaval", "ghee", "achar", "dahi"]

  return (
    <>
    <Container>
    <h1 className='kg-heading'>Healdy food</h1>

    <ErrorMesg value = {food_items}></ErrorMesg>
    
    <InputBox></InputBox>
    <Food_items value = {food_items}></Food_items>
    </Container>


    {/*<Container><p>Above food is good for your health and improve your emunity</p></Container> */}
    </>
  )
}

export default App
