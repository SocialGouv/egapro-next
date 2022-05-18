import React from "react"
import Link from "next/link"
import { Button } from "@chakra-ui/react"

import { ButtonProps } from "./ButtonAction"

type ButtonLinkProps = ButtonProps & {
  to: string
}

function ButtonLink({
  label,
  to,
  colorScheme = "primary",
  variant = "solid",
  leftIcon,
  rightIcon,
  size = "md",
  fullWidth,
}: ButtonLinkProps) {
  return (
    <Link href={to} passHref>
      <Button
        colorScheme={colorScheme}
        variant={variant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        size={size}
        sx={{
          width: fullWidth ? "100%" : "auto",
        }}
      >
        {label}
      </Button>
    </Link>
  )
}

export default ButtonLink
