import React from "react";
import { Box, Button as ButtonChakra } from "@chakra-ui/react";

type ButtonProps = {
  label?: string;
  theme?: "primary" | "secondary" | "tertiary" | "tertiary-no-border";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

const Button = ({
  label,
  theme = "primary",
  size = "md",
  ...rest
}: ButtonProps) => {
  return (
    <ButtonChakra
      size={size}
      bg={
        theme === "primary"
          ? "var(--background-action-high-blue-france)"
          : "transparent"
      }
      border={`1px solid ${
        (theme === "secondary" && "var(--text-action-high-blue-france)") ||
        (theme === "tertiary" && "var(--grey-925-125)") ||
        "transparent"
      }`}
      color={
        theme === "primary"
          ? "var(--text-inverted-blue-france)"
          : "var(--text-action-high-blue-france)"
      }
      _focus={{
        boxShadow: "none",
      }}
      _hover={{
        bg:
          theme === "primary"
            ? "var(--background-action-high-blue-france-hover)"
            : "rgba(0, 0, 0, 0.05)",
      }}
      _active={{
        bg:
          theme === "primary"
            ? "var(--background-action-high-blue-france-active)"
            : "rgba(0, 0, 0, 0.1)",
      }}
      sx={{
        "&:focus-visible": {
          "outline-color": "var(--outline-focus-blue)",
          "outline-offset": "0.125rem",
          "outline-width": "0.125rem",
        },
        "&:disabled": {
          opacity: 1,
          bg:
            theme === "primary"
              ? "var(--background-disabled-grey)"
              : "transparent",
          borderColor:
            theme === "secondary"
              ? "var(--border-disabled-grey)"
              : "transparent",
          color: "var(--text-disabled-grey)",
        },
        ".chakra-button__icon svg": {
          width: size === "lg" ? 6 : 4,
          height: size === "lg" ? 6 : 4,
        },
      }}
      {...rest}
    >
      <Box as="span" sx={{ transform: "translateY(-1px)" }}>
        {label}
      </Box>
    </ButtonChakra>
  );
};

export default Button;
