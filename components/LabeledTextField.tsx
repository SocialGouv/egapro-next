import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import React, { forwardRef, ComponentPropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"

export interface LabeledTextFieldProps extends ComponentPropsWithoutRef<"input"> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: ComponentPropsWithoutRef<"div">
  labelProps?: ComponentPropsWithoutRef<"label">
  helperText?: string
  placeholder?: string
}

// eslint-disable-next-line react/display-name
export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  // eslint-disable-next-line no-unused-vars
  ({ label, outerProps, labelProps, name, helperText, placeholder, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name]) ? errors[name].join(", ") : errors[name]?.message || errors[name]

    return (
      <FormControl isDisabled={isSubmitting} isInvalid={error} {...outerProps}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input id={name} {...register(name)} placeholder={placeholder} />
        <FormHelperText>{helperText}</FormHelperText>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    )
  },
)

export default LabeledTextField
