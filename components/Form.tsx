// Form wrapper from blitz.js : https://github.com/blitz-js/blitz/blob/canary/packages/generator/templates/app/_forms/hookform/Form.tsx
import React, { useState, ReactNode } from "react"
import { FormProvider, useForm, UseFormProps } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react"

import ButtonAction from "@/components/ds/ButtonAction"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<React.ComponentPropsWithoutRef<"form">, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  successText?: string
  schema?: S
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"]
}

interface OnSubmitResult {
  FORM_ERROR?: string
  [prop: string]: any
}

export const FORM_ERROR = "FORM_ERROR"

/**
 * Composant Form qui wrap le formulaire de react-hook-form.
 * Permet l'injection d'un schéma zod et d'inférer le type pour les values.
 */
export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  successText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: "onBlur",
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  })
  // Erreur globale pour l'ensemble du formulaire.
  const [formError, setFormError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)

  return (
    <FormProvider {...ctx}>
      <form
        onSubmit={ctx.handleSubmit(async (values) => {
          setSuccess(false)

          const result = (await onSubmit(values)) || {}
          if (!result) {
            setSuccess(true)
          }
          for (const [key, value] of Object.entries(result)) {
            if (key === FORM_ERROR) {
              setFormError(value)
            } else {
              ctx.setError(key as any, {
                type: "submit",
                message: value,
              })
            }
          }
        })}
        className="form"
        {...props}
      >
        {formError && (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>{formError}</AlertDescription>
          </Alert>
        )}
        {success && successText && (
          <Alert status="success">
            <AlertIcon />
            <AlertDescription> {successText}</AlertDescription>
          </Alert>
        )}
        {/* Form fields supplied as children are rendered here */}
        {children}

        {submitText && <ButtonAction type="submit" disabled={ctx.formState.isSubmitting} mt={6} label={submitText} />}
      </form>
    </FormProvider>
  )
}

export default Form
