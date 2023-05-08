import React from "react"
import { IonIcon } from "@ionic/react"
import { closeCircleOutline, createOutline, eyeOutline } from "ionicons/icons"
import { Link } from "react-router-dom"
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
        <div className="actions has-text-black">
          <div className="view">
            <Link to={`/view/${todo.id}`}>
              <IonIcon icon={eyeOutline} />
            </Link>
          </div>
          <div className="edit">
            <Link to={`/edit/${todo.id}`}>
              <IonIcon icon={createOutline} />
            </Link>
          </div>
          <div className="destroy" onClick={() => handleDelete(todo.id)}>
            <IonIcon icon={closeCircleOutline} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TodoItem
