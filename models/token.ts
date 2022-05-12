import { fetcher } from "@/utils/fetcher"

export type TokenInfoType = {
  avg: number
  count: number
  max: number
  min: number
}

/**
 * Get token infor for current user.
 *
 * @returns
 */
// export async function getTokenInfo(): Promise<{ data: TokenInfoType | null }> {
export async function getTokenInfo(): Promise<any> {
  const data = await fetcher("/me")

  return {
    data,
  }
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
