import React from "react"
import { Box, Button as ButtonChakra } from "@chakra-ui/react"

type ButtonProps = {
  label?: string
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "tertiary" | "tertiary-no-border"
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

const Button = ({ label, size, ...rest }: ButtonProps) => {
  return (
    <ButtonChakra
      sx={{
        ".chakra-button__icon svg": {
          width: size === "lg" ? 6 : 4,
          height: size === "lg" ? 6 : 4,
        },
      }}
      size={size}
      {...rest}
    >
      <Box as="span" sx={{ transform: "translateY(-1px)" }}>
        {label}
      </Box>
    </ButtonChakra>
  )
}

export default Button
