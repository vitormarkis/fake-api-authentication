import { api } from "../../services/api"
import { IUser, IUserAuthenticate } from "./types"

export async function loginRequest(userData: IUserAuthenticate) {
  try {
    const request = await api.post("/login", userData)
    return request.data
  } catch (error) {
    return null
  }
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user")
  if (!json) return null
  return JSON.parse(json) ?? null
}
