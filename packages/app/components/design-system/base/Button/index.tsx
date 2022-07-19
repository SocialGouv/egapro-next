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
        theme === "primary" ? "var(--blue-france-sun-113-625)" : "transparent"
      }
      border={`1px solid ${
        (theme === "secondary" && "var(--blue-france-sun-113-625)") ||
        (theme === "tertiary" && "var(--grey-925-125)") ||
        "transparent"
      }`}
      color={
        theme === "primary" ? "var(--white)" : "var(--blue-france-sun-113-625)"
      }
      _focus={{
        boxShadow: "none",
      }}
      _hover={{
        bg:
          theme === "primary"
            ? "var(--blue-france-sun-113-625-hover)"
            : "var(--grey-1000-50-hover)",
      }}
      _active={{
        bg:
          theme === "primary"
            ? "var(--blue-france-sun-113-625-active)"
            : "var(--grey-1000-50-active)",
      }}
      sx={{
        "&:focus-visible": {
          "outline-color": "var(--blue-focus)",
          "outline-offset": "0.125rem",
          "outline-width": "0.125rem",
        },
        "&:disabled": {
          opacity: 1,
          bg: theme === "primary" ? "var(--grey-925-125)" : "transparent",
          borderColor:
            theme === "secondary" ? "var(--grey-925-125)" : "transparent",
          color: "var(--grey-625-425)",
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
