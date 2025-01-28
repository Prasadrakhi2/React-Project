import AppName from "./components/AppName"
import TodoList from "./components/TodoList"
import Todo_item1 from "./Todo_item1"
import Todo_item2 from "./Todo_item2"
import "./App.css";


function App() {

  return(
    <center className="To-Container">
      <AppName></AppName>
      <TodoList></TodoList>
      <div className="container-item">
        <Todo_item1></Todo_item1>
        <Todo_item2></Todo_item2>
      </div>
    </center>
  )
}

export default App;
