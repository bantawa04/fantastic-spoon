import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const View: React.FC = () => {
  const [todo, setTodo] = useState<{
    id: number
    title: string
    status: boolean
  }>()

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]")
    const todoItem = todos.todos.find(
      (t: { id: number; title: string; status: boolean }) =>
        t.id === parseInt(id ?? "-1")
    )

    setTodo(todoItem)
  }, [id])
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <p className="subtitle">{todo?.title}</p>
        </div>
        <footer className="card-footer">
          <Link to={"/"} className="card-footer-item">
            Back to list
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default View
