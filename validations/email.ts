import { z } from "zod"

export const EmailSchema = z.object({
  email: z
    .string({ required_error: "L'adresse mail est requise" })
    .min(1, { message: "L'adresse mail est requise" })
    .email({ message: "L'adresse mail est invalide" }),
})
