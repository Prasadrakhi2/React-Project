const ErrorMsg = ({value}) =>{
    return (
        <>
        {value.length === 0 && <h1>No team is participating</h1> }
        </>
    )
}

export default ErrorMsg;