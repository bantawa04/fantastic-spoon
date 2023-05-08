import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bulma/css/bulma.min.css"
import "./App.scss"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import View from "./page/todo/view"
import Hero from "./components/Hero"
import Edit from "./page/todo/edit"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <App />
      </>
    ),
  },
  {
    path: "view/:id",
    element: (
      <>
        <Hero />
        <View />
      </>
    ),
  },
  {
    path: "edit/:id",
    element: (
      <>
        <Hero />
        <Edit />
      </>
    ),
  },
])
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

postMessage({ payload: "removeLoading" }, "*")
