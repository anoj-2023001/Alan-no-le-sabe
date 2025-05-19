import { Routes, Route } from "react-router-dom"
import Login from "./pages/Auth/Login.jsx"
import Register from "./pages/Auth/Register.jsx"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />  
      <Route path="/register" element={<Register />} />
  </Routes>

  )
}
