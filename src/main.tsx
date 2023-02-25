import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
import ProtectedLayout from "./components/ProtectedLayout"
import AuthProvider from "./context/AuthProvider"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: (
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
