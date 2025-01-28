const ErrorMesg = ({value}) =>{
    
//   let food_items = ["dal", "chaval", "ghee", "achar"]

    return(
        <>
            {{value}.length === 0 && <h2>I'm still hungry</h2> }
        </>
    )
}

export default ErrorMesg;