function App_component_2(){

    let time = new Date();

    return( 
    <h3>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>
    )
}

export default App_component_2;