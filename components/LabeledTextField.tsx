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
  showError?: boolean
}

// eslint-disable-next-line react/display-name
export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  // eslint-disable-next-line no-unused-vars
  ({ name, label, type = "text", outerProps, labelProps, helperText, placeholder, showError = true }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name]) ? errors[name].join(", ") : errors[name]?.message || errors[name]

    return (
      <FormControl isDisabled={isSubmitting} isInvalid={showError && error} {...outerProps}>
        <FormLabel htmlFor={name} {...labelProps}>
          {label}
        </FormLabel>
        <Input id={name} type={type} {...register(name)} placeholder={placeholder} />
        <FormHelperText>{helperText}</FormHelperText>
        <FormErrorMessage>{showError && error}</FormErrorMessage>
      </FormControl>
    )
  },
)

export default LabeledTextField
