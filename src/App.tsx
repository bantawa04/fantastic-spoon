import TodoForm from "@/components/TodoForm"
import { useEffect, useState } from "react"
import TodoItem from "./components/TodoItem"
import Count from "./components/Count"
import { toast } from "bulma-toast"
interface Todo {
  id?: number | string
  title: string
  status?: boolean
}
interface Todos {
  todos: Todo[]
  count: number
}
function App() {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    status: false,
  })
  const [inputError, setInputError] = useState<boolean>(false)

  const [todos, setTodos] = useState<Todos>(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return {
        todos: [
          {
            id: 1,
            title: "Test 1",
            status: false,
          },
          {
            id: 2,
            title: "Test 2",
            status: false,
          },
          {
            id: 3,
            title: "Test 3",
            status: true,
          },
        ],
        count: 3,
      }
    }
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (todo.title === "" || todo.title === null) {
      setInputError(true)
      return
    }
    const newId = todos.count + 1

    const newTodo: Todo = {
      id: newId,
      title: todo.title,
      status: todo.status,
    }
    toast({
      message: "Todo created !",
      type: "is-success",
    })
    setTodos((prevState) => ({
      todos: [...prevState.todos, newTodo],
      count: prevState.count + 1,
    }))

    setTodo({
      title: "",
      status: false,
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "" || e.target.value !== null) {
      setInputError(false)
    }
    setTodo((prevState) => ({
      ...prevState,
      title: e.target.value,
    }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target?.value === "" || e.target?.value === null) {
      setInputError(true)
    } else {
      setInputError(false)
    }
  }

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.todos.filter((todo) => todo.id !== id)
    setTodos((_) => ({
      count: todos.count - 1,
      todos: updatedTodos,
    }))
    toast({
      message: "Todo deleted !",
      type: "is-success",
    })
  }

  const handleStatus = (id: number) => {
    const updatedTodos = todos.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        }
      }
      return todo
    })
    setTodos((prevState) => ({
      ...prevState,
      todos: updatedTodos,
    }))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="container">
      <TodoForm
        handleChange={handleInputChange}
        hasError={inputError}
        value={todo.title}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
      />
      <Count count={todos.count} />
      {todos.todos.map((item) => (
        <TodoItem
          todo={item}
          key={item.id}
          handleDelete={deleteTodo}
          handleComplete={handleStatus}
        />
      ))}
    </div>
  )
}

export default App
