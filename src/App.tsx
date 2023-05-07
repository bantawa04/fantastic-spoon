import AddTodo from "@/components/AddTodo"
import { useState } from "react"
import Hero from "./components/Hero"
import TodoItem from "./components/TodoItem"
import Count from "./components/Count"

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

  const [todos, setTodos] = useState<Todos>({
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

  return (
    <div className="container">
      <Hero />
      <AddTodo
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
