import styles from "./Item_Component.module.css"
import Todo_item from "./Todo_item";

const Item_Component = ({itemComponent}) =>{
    return(
        <div className={styles.containerItem}>
            {itemComponent.map((item)=>(<Todo_item todoname={item.name} tododate={item.dueDate}></Todo_item>))}
      </div>
    )
}

export default Item_Component;