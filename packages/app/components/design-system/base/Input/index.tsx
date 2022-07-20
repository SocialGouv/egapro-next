import React from "react"
import { Input as InputChakra, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"

type InputChakraProps = {
  isDisabled?: boolean
  isInvalid?: boolean
  isValid?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

const Input = ({ isInvalid, isValid, leftIcon, rightIcon, ...rest }: InputChakraProps) => {
  return (
    <InputGroup color="var(--text-label-grey)">
      {leftIcon && <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>}
      <InputChakra
        bg="var(--background-contrast-grey)"
        color="var(--text-label-grey)"
        borderRadius={"0.25rem 0.25rem 0 0"}
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          borderBottomColor: "var(--border-plain-grey)",
        }}
        _readOnly={{
          color: "var(--text-disabled-grey)",
          borderBottomColor: "var(--border-disabled-grey)",
        }}
        {...rest}
        sx={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: `0.125rem solid ${
            (isInvalid && "var(--border-plain-error)") ||
            (isValid && "var(--border-plain-success)") ||
            "var(--border-plain-grey)"
          }`,
          "&:focus-visible": {
            "outline-color": "var(--outline-focus-blue)",
            "outline-offset": "0.125rem",
            "outline-width": "0.125rem",
          },
          "&:disabled": {
            opacity: 1,
            color: "var(--text-disabled-grey)",
            borderBottomColor: "var(--border-disabled-grey)",
          },
          "&::placeholder": {
            opacity: 1,
            fontStyle: "italic",
            color: "var(--text-mention-grey)",
          },
        }}
      />
      {rightIcon && <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement>}
    </InputGroup>
  )
}

export default Input
