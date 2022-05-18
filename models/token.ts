import { fetcher } from "@/utils/fetcher"

export type TokenInfoType = {
  email: string
  déclarations: Array<any>
  ownership: Array<string>
  staff: boolean
}

/**
 * Get token infor for current user.
 *
 * @returns
 */
// export async function getTokenInfo(): Promise<{ data: TokenInfoType | null }> {
export async function getTokenInfo(): Promise<TokenInfoType> {
  return await fetcher("/me")
}

/**
 * Get a token from API for an other user.
 * Only for staff member.
 *
 * @param {*} email
 * @returns { token: string}
 */
export async function generateImpersonateToken(email: string) {
  return fetcher(`/token?email=${email}`)
}
