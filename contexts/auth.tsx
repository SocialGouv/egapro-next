import React from "react"
import { useRouter } from "next/router"

import { EXPIRED_TOKEN_MESSAGE, FetchError } from "@/utils/fetcher"
import { getTokenInfo } from "@/models/token"

const initialContext = {
  email: "",
  ownership: [] as string[],
  staff: false,
  isAuthenticated: false,
  // eslint-disable-next-line no-unused-vars
  login: (token: string) => {},
  logout: () => {},
}

const AuthContext = React.createContext<typeof initialContext>(initialContext)
AuthContext.displayName = "AuthContext"

// TODO : ne plus utiliser que ce contexte. En particulier, dans Simulateur, il y a tout un traitement qui utilise getTokenInfo directement.

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [context, setContext] = React.useState(initialContext)

  const login = React.useCallback(
    async (token: string) => {
      if (token) {
        localStorage.setItem("token", token)

        try {
          const tokenInfo = await getTokenInfo()

          if (tokenInfo) {
            localStorage.setItem("tokenInfo", JSON.stringify(tokenInfo?.jsonBody) || "")

            const newContext = {
              ...context,
              ...(tokenInfo?.jsonBody?.email && { email: tokenInfo?.jsonBody?.email }),
              ...(tokenInfo?.jsonBody?.ownership && { ownership: tokenInfo?.jsonBody?.ownership }),
              ...(tokenInfo?.jsonBody?.staff && { staff: tokenInfo?.jsonBody?.staff }),
              isAuthenticated: Boolean(tokenInfo?.jsonBody?.email),
            }

            setContext(newContext)
          }
        } catch (error) {
          // If token has expired, we remove it from localStorage and state.
          console.error(error)

          localStorage.setItem("token", "")
          localStorage.setItem("tokenInfo", "")
        }
      }
    },
    [context],
  )

  const logout = React.useCallback(function logout() {
    localStorage.setItem("token", "")
    localStorage.setItem("tokenInfo", "")
    setContext(initialContext)
  }, [])

  React.useEffect(() => {
    // tentative de login au mount du composant
    login(localStorage.getItem("token") || "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <AuthContext.Provider value={{ ...context, logout, login }}>{children}</AuthContext.Provider>
}

export function useUser(): typeof initialContext {
  const context = React.useContext(AuthContext)

  if (!context) throw new Error("useUser must be used in a <AuthContextProvider />")

  return context
}

/**
 * Check if a token is present in the URL bar. If so, run login with it.
 */
export function useCheckTokenInURL() {
  const { login } = useUser()
  const router = useRouter()

  // useEffect called at every render, to try to login with the token in the URL.
  React.useEffect(() => {
    async function runEffect() {
      const urlParams = new URLSearchParams(window.location.search)

      const tokenInURL = urlParams.get("token")

      if (tokenInURL) {
        await login(tokenInURL)
        // Reset the token in the search params so it won't be in the URL and won't be bookmarkable (which is a bad practice?)
        router.push({ search: "" })
      }
    }

    runEffect()
  })
}

export function useLogoutIfExpiredToken(error: FetchError) {
  const { logout } = useUser()
  React.useEffect(() => {
    if (error?.info === EXPIRED_TOKEN_MESSAGE) {
      logout()
    }
  }, [error, logout])
}
