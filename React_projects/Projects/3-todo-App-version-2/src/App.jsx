import AppName from "./components/AppName"
import TodoList from "./components/TodoList"
import "./App.css";
import Item_Component from "./components/Item_Component";


function App() {

  // create objects for the variavals
  const itemComponent =[
    {
      name : "Buy Milk",
      dueDate : "04/10/2023",
    },
    {
      name : "Go To Collage",
      dueDate : "04/10/2023",
    },
    {
      name : "coldrink",
      dueDate : "15/56/5424",
    },
  ]

  return( 
    <center className="To-Container">
      <AppName></AppName>
      <TodoList></TodoList>
      <Item_Component key={itemComponent} itemComponent={itemComponent}></Item_Component>
    </center>
  )
}

export default App;
