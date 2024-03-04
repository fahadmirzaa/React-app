let todoName = 'Buy Milk';
let todoDate = '5/12/2100';

function TodoItem() {
    return <div className="container">
        <div className="row todo-row">
            <div className="col-6">
                {todoName}
            </div>
            <div className="col-4">
                {todoDate}
            </div>
            <div className="col-2">
                <button type="button"
                        className="btn btn-danger todo-btn">Delete
                </button>
            </div>
        </div>
    </div>
}

export default TodoItem;