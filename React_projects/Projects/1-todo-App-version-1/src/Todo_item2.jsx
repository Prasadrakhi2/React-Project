function Todo_item2(){
    
    let name ='Go to Collage';
    let date = '04/10/2023';

    return(
        <div class="container">
            <div class="row kg-row">
                <div class="col-6">{name}</div>
                <div class="col-4">{date}</div>
                <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Todo_item2;