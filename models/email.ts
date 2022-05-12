import { fetcher } from "@/utils/fetcher"

export const sendValidationEmail = (email: string) =>
  fetcher("/token", {
    email,
    url: `${window.location.href}?token=`,
  })
