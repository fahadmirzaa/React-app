import AppName from "./components/AppName.jsx";
import AddTodo from "./components/addTodo.jsx";
import TodoItem from "./components/todoItem.jsx";

function App() {
    return (<center className='todo-container'>
        <AppName/>
        <AddTodo></AddTodo>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
    </center>)
}

export default App
