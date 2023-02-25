import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IUserAuthenticate } from "../../context/AuthProvider/types"
import useAuth from "../../context/AuthProvider/useAuth"

const Login: React.FC = () => {
  const [userFields, setUserFields] = useState<IUserAuthenticate>({} as IUserAuthenticate)
  const navigate = useNavigate()
  
  const auth = useAuth()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    try {
      await auth.authenticate(userFields)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setUserFields(prev => ({ ...prev, [name]: value }))
  }


  return (
    <div style={{ width: 320, marginInline: "auto" }}>
      <form
        method="post"
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 5 }}
      >
        <input
          autoComplete="off"
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="vitor@gmail.com"
        />
        <input
          autoComplete="off"
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Digite sua senha..."
        />
        <button
          className="form-button"
          type="submit"
        >
          Logar
        </button>
      </form>
    </div>
  )
}

export default Login
