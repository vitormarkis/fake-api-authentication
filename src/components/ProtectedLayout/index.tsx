import { useNavigate } from "react-router-dom"
import useAuth from "../../context/AuthProvider/useAuth"

interface P {
  children: JSX.Element
}

const ProtectedLayout: React.FC<P> = ({ children }) => {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.email) {
    return (
      <div>
        <h1>Você não tem permissão para acessar essa página.</h1>
        <button className="form-button" onClick={() => navigate("/login")}>Fazer login</button>
      </div>
    )
  }

  return children
}

export default ProtectedLayout
