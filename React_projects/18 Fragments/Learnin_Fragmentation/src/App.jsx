import React from 'react';
import './App.css'

function App() {

  // list of the item in the array form
  let frout_name = ['mango', 'jayfal', 'banana', 'apple', 'kive']

  return(
  // <React.Fragment>
  <>
  <h1>frouts name</h1>
  <ul className="list-group">
      {frout_name.map((item) => <li key={item} className="list-group-item">{item}</li>)}
  
</ul>
{/* </React.Fragment> */}
</>
  )
}

export default App;
