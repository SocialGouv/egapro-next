import { post } from "@/utils/fetcher"

export const sendValidationEmail = async (data: { email: string }) => {
  return post("/token", { ...data, url: `${window.location.href}?token=` })
}
