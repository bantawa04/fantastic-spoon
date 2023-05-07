import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bulma/css/bulma.min.css"
import "./App.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

postMessage({ payload: "removeLoading" }, "*")
