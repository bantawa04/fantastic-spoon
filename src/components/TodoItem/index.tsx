import React from "react"

interface TodoItem {
  todo: any
  handleDelete?: any
  handleComplete?: any
}
const TodoItem: React.FC<TodoItem> = ({
  todo,
  handleDelete,
  handleComplete,
}) => {
  return (
    <div className="todosWrapper">
      <div className="todoItem">
        <div className="changeStatus">
          <input
            type="checkbox"
            value={`${todo.status ? "true" : "false"}`}
            onChange={() => handleComplete(todo.id)}
          />
        </div>
        <div className={`taskTitle ${todo?.status ? "completed" : ""}`}>
          {todo?.title}
        </div>
        <div className="delete" onClick={() => handleDelete(todo.id)}></div>
      </div>
    </div>
  )
}
export default TodoItem
