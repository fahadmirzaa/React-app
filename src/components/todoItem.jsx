function TodoItem() {
    return <div className="container text-center">
        <div className="row">
            <div className="col-6">
                Buy Milk
            </div>
            <div className="col-4">
                5/12/2100
            </div>
            <div className="col-2">
                <button type="button"
                        className="btn btn-danger">Delete
                </button>
            </div>
        </div>
    </div>
}

export default TodoItem;