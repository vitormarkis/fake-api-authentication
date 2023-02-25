import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IAuthProvider, IContext, IUser, IUserAuthenticate } from "./types"
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util"

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const userLocalStorage = getUserLocalStorage()
    if (userLocalStorage) setUser(userLocalStorage)
  }, [])

  async function authenticate(userData: IUserAuthenticate) {
    const response = await loginRequest(userData)
    const payload = { token: response.token, email: userData.email }

    setUser(payload)
    setUserLocalStorage(payload)

  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  return <AuthContext.Provider value={{ ...user, authenticate, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
