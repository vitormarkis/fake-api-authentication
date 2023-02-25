export interface IUser {
  email?: string
  token?: string
}

export interface IUserAuthenticate {
  email: string
  password: string
}

export interface IContext extends IUser {
  authenticate: (userData: IUserAuthenticate) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children: React.ReactNode
}
