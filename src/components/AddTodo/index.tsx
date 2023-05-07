import React from "react"
interface IAddTodo {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  handleSubmit: any
  hasError: boolean
  value: string
}
const AddTodo: React.FC<IAddTodo> = ({
  handleChange,
  handleBlur,
  hasError = false,
  value,
  handleSubmit,
}) => {
  return (
    <div className="formWrapper">
      <div className="columns">
        <div className="column is-full">
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input
                className={`input ${hasError ? "is-danger" : null}`}
                type="text"
                value={value}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
              />
            </p>
            <p className="control">
              <a className="button is-dark" onClick={(e) => handleSubmit(e)}>
                Add
              </a>
            </p>
          </div>
          {hasError && (
            <p className="help is-danger">Please enter valid todo</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddTodo
