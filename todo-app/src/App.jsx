import { useEffect, useState } from "react"
import Todo from "./components/Todo/todo"
import Stats from "./components/stats/Stats"
import Filters from "./components/Filters/Filters"

function App() {
  const [TodoName, setTodoName] = useState("")
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })
const [shownTodos, setShownTodos] = useState(todos)
const [filter, setFilter ] = useState("all")

useEffect(() => {
  setShownTodos(todos)
}, [todos])


  useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleAdd = () => {
    const newTodo ={
      id: crypto.randomUUID(),
      name: TodoName,
      status: false 
    }
    setTodos((todosOld) => [newTodo, ...todosOld])
  }
  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))

  }
  const handleToggle = (id) => {
    setTodos((todos) => todos.map((todo) => todo.id === id ? 
    {...todo, status: !todo.status} : todo ))
  }
  

  return (
    <div className="container">

      <div className="header">
        <h1>Todo App</h1>
        <p>Управляйте своими задачами</p>
      </div>

      <div className="add-todo">
        <div className="input-container">
          <input
            onChange={(e) => setTodoName(e.target.value)}
            value={TodoName}

            type="text" className="todo-input" placeholder="Добавить новую задачу..." id="todoInput" />
          <button
            onClick={handleAdd}
            className="add-btn" id="addBtn">Добавить</button>
        </div>
      </div>

     <Filters filter={ filter} setFilter={setFilter} />

      <div className="todo-list">
        {shownTodos.map((el) => <Todo  {...el} handleToggle={handleToggle} handleDelete={handleDelete}
         key={el.id} />)}


        <Stats todos={todos}/>

      </div>
    </div>
  )
}

export default App


