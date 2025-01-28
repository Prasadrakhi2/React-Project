const TeamList =({value}) =>{
    return(
        <>
        <ul className="list-group">
            {value.map((name) => <li key={name} className="list-group-item">{name}</li>)}
        </ul>
        </>
    )
}
export default TeamList;