import React from "react"
interface ICount {
  count: number
}
const Count: React.FC<ICount> = ({ count }) => {
  return <h5 className="title is-5 mt-3 mb-3">{`Total tasks: ${count}`}</h5>
}

export default Count
