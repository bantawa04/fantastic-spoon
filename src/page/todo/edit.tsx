import TodoForm from "@/components/TodoForm"
import { toast } from "bulma-toast"
import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

interface Todo {
  id: number | string
  title: string
  status: boolean
}

interface Todos {
  todos: Todo[]
  count: number
}

const Edit: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [inputError, setInputError] = useState<boolean>(false)
  const [todo, setTodo] = useState<Todo>({
    id: "",
    title: "",
    status: false,
  })
  const [todos, setTodos] = useState<Todos>({
    todos: [],
    count: 0,
  })
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "{}")
    if (storedTodos) {
      console.log(storedTodos)
      setTodos(storedTodos)
    } else {
      toast({
        message: "Todo not found",
        type: "is-danger",
      })
    }
  }, [])

  useEffect(() => {
    const todoItem = todos.todos.find(
      (item) => item.id === parseInt(id ?? "-1")
    )
    if (todoItem) {
      setTodo(todoItem)
    } else {
      toast({
        message: "Todo not found",
        type: "is-danger",
      })
      navigate("/", { replace: true })
    }
    return () => {
      setTodo({
        id: "",
        title: "",
        status: false,
      })
    }
  }, [todos])

  const handleChange = (e: any) => {
    setTodo({ ...todo, title: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target?.value === "" || e.target?.value === null) {
      setInputError(true)
    } else {
      setInputError(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (todo.title === "" || todo.title === null) {
      setInputError(true)
      return
    }

    const updatedTodos = {
      ...todos,
      todos: todos.todos.map((item) =>
        item.id === parseInt(id ?? "-1") ? { ...item, title: todo.title } : item
      ),
    }

    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    toast({
      message: "Todo updated !",
      type: "is-success",
    })
    navigate("/", { replace: true })
  }

  return (
    <div className="container">
      <TodoForm
        hasError={inputError}
        value={todo?.title}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        label={"Update"}
      />
    </div>
  )
}

export default Edit
