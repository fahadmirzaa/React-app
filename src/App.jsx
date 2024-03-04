import AppName from "./components/AppName.jsx";
import AddTodo from "./components/addTodo.jsx";
import TodoItem from "./components/todoItem.jsx";

function App() {
    return (<center>
        <AppName/>
        <AddTodo></AddTodo>
        <div className='items-container'>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div>
    </center>)
}

export default App
