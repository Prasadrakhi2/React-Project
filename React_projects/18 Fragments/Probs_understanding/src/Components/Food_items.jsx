import Item from "./Item";

const Food_items = ({value}) =>{
    
//   let food_items = ["dal", "chaval", "ghee", "achar"]


    return(<>
        <ul className="list-group">
            {value.map((item) => <Item key={item} food_items={item}></Item> )}
            {/* here => food_items={item} => work as the argument in the function */}
        </ul>
    </>
    )
}

export default Food_items;