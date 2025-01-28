import './App.css'

function App() {

  // let food_item = ["rote", "chaval", "dal", "milk"]
  
  let food_item = []

  //if-else statement
  // if(food_item.length === 0){
  //   return <h2>I'm Hunggry</h2>
  // }

  //ternary operater
  // let element = food_item.length === 0 ?<h2>I'm Hunggry</h2>:null

  return(
  <>
    <h1>Healdy Food</h1>

    {/* {food_item.length === 0 ?<h2>I'm Hunggry</h2>:null}  ternary oprater */}
    {/* also*/}
    {/* {element} */}

    {/* logical operater */}
    {food_item.length === 0 && <h2>I'm Hunggry</h2>}
    
    <ul className="list-group">
      {food_item.map((item) => <li key={item} className="list-group-item">{item}</li>)}
</ul>
  </>
  )
}

export default App;
