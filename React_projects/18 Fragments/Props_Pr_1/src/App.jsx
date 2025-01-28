import './App.css'
import ErrorMsg from './Components/ErrorMsg'
import TeamList from './Components/TeamLeast'

function App() {

  
  // let teams = []

  let teams = ["australis", "englend" , "India" , "pakistan" , "new ziland"]

  return (
    <>
    <h1>Matches of the team</h1>
    <ErrorMsg value={teams}></ErrorMsg>
    <TeamList value={teams}></TeamList>
    </>
  )
}

export default App
