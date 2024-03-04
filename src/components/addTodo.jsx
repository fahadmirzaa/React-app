function AddTodo() {
    return <div className="container">
        <div className="row todo-row">
            <div className="col-6">
                <input type='text' placeholder='Enter Todo'/>
            </div>
            <div className="col-4">
                <input type='date' placeholder='Date'/>
            </div>
            <div className="col-2">
                <button type="button"
                        className="btn btn-success todo-btn">Add
                </button>
            </div>
        </div>
        </div>
        }

        export default AddTodo;