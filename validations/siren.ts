import { z } from "zod"

export const SirenSchema = z.object({
  siren: z
    .string({ required_error: "Le SIREN est requis" })
    .min(1, { message: "Le SIREN est requis" })
    .regex(/^[0-9]{9}$/, { message: "Le SIREN est invalide" }),
})
