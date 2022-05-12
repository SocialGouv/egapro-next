import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import * as React from "react"
// import { z } from "zod"

// import { fieldValidator, InputControl, InputControlProps } from "./form-lib"

// type FieldEmailProps = Partial<InputControlProps>

// const FieldInput = z
//   .string({ required_error: "L'adresse mail est requise" })
//   .min(1, { message: "L'adresse mail est requise" })
//   .email({ message: "L'adresse mail est invalide" })

export function FieldEmail() {
  // return (
  //   <InputControl
  //     name="email"
  //     label="Email"
  //     placeholder="Email"
  //     rafConfig={{
  //       parse: (email: string) => email && email.trim().toLowerCase(),
  //       validate: fieldValidator(FieldInput),
  //       ...rest?.rafConfig,
  //     }}
  //     {...rest}
  //     type="text"
  //   />
  // )

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" type="email" />
      <FormHelperText>Veuillez renseigner votre email.</FormHelperText>
    </FormControl>
  )
}
