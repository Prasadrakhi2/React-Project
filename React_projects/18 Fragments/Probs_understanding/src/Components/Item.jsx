import style from './Item.module.css'

const Item = ({food_items}) => {   //this type => "Array-Destucturing"
// const Item = (props) =>{  = it work same 

const handleBuyButton = (event)=>{
    console.log(event);
    console.log(`${food_items} being bouhht`)
}

    
return(
        <>
        <li className={`${style["kgItems"]} list-group-item`}><span className={style['kgSpam']}>{food_items}</span>

        <button onClick={(event) => handleBuyButton(event)} className={`${style.button} btn btn-info`}>buy</button></li> {/* call by function*/}{/*here event => also show the type of events i.e. the property show in the console}

        {/*
        <button onClick={handleBuyButton} className={`${style.button} btn btn-info`}>buy</button></li>
        
        //call buy refrence
        */}
        

        {/* or as object without ``
        <li className={style["kgItems"]}><span className={style['kgSpam']}>{food_items}</span></li> */}
        </>
    )
}

export default Item;