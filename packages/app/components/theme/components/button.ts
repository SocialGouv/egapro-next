import { StyleFunctionProps } from "@chakra-ui/theme-tools"
import type { ComponentStyleConfig } from "@chakra-ui/theme"
import { mode } from "@chakra-ui/theme-tools"
import { utils } from "../utils"

export const Button: ComponentStyleConfig = {
  defaultProps: {
    variant: "primary",
    size: "md",
  },
  baseStyle: {
    borderRadius: 0,
    fontWeight: "500",
  },
  sizes: {
    lg: {
      h: 13,
      minW: 13,
      fontSize: "lg",
      px: 6,
    },
    md: {
      h: 10,
      minW: 10,
      fontSize: "md",
      px: 4,
    },
    sm: {
      h: 8,
      minW: 8,
      fontSize: "sm",
      px: 3,
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: mode("blue-france.113.main", "blue-france.625.main")(props),
      color: mode("grey.1000.main", "blue-france.113.main")(props),
      border: "1px solid",
      borderColor: mode("blue-france.113.main", "blue-france.625.main")(props),
      _hover: {
        bg: mode("blue-france.113.hover", "blue-france.625.hover")(props),
        borderColor: mode("blue-france.113.hover", "blue-france.625.hover")(props),
        _disabled: {
          bg: mode("grey.925.main", "grey.125.main")(props),
          borderColor: mode("grey.925.main", "grey.125.main")(props),
        },
      },
      _focus: { boxShadow: "none" },
      _active: {
        bg: mode("blue-france.113.active", "blue-france.625.active")(props),
        borderColor: mode("blue-france.113.active", "blue-france.625.active")(props),
      },
      _disabled: {
        opacity: 1,
        bg: mode("grey.925.main", "grey.125.main")(props),
        borderColor: mode("grey.925.main", "grey.125.main")(props),
        color: mode("grey.625.main", "grey.425.main")(props),
      },
      ...utils.focusOutline,
    }),
    secondary: (props: StyleFunctionProps) => ({
      bg: "transparent",
      color: mode("blue-france.113.main", "blue-france.625.main")(props),
      border: "1px solid",
      borderColor: mode("blue-france.113.main", "blue-france.625.main")(props),
      _hover: {
        bg: mode("#f5f5f5", "#292929")(props),
      },
      _focus: { boxShadow: "none" },
      _active: {
        bg: mode("#ebebeb", "rgba(255, 255, 255, 0.1)")(props),
      },
      _disabled: {
        opacity: 1,
        borderColor: mode("grey.925.main", "grey.125.main")(props),
        color: mode("grey.625.main", "grey.425.main")(props),
      },
      ...utils.focusOutline,
    }),
    tertiary: (props: StyleFunctionProps) => ({
      bg: "transparent",
      color: mode("blue-france.113.main", "blue-france.625.main")(props),
      border: "1px solid",
      borderColor: mode("grey.925.main", "#202020")(props),
      _hover: {
        bg: mode("#f5f5f5", "#292929")(props),
        borderColor: mode("#f5f5f5", "#292929")(props),
        _disabled: { borderColor: "transparent" },
      },
      _focus: { boxShadow: "none" },
      _active: {
        bg: mode("#ebebeb", "#3b3b3b")(props),
        borderColor: mode("#ebebeb", "#3b3b3b")(props),
      },
      _disabled: {
        opacity: 1,
        borderColor: "transparent",
        color: mode("grey.625.main", "grey.425.main")(props),
      },
      ...utils.focusOutline,
    }),
    "tertiary-no-border": (props: StyleFunctionProps) => ({
      bg: "transparent",
      color: mode("blue-france.113.main", "blue-france.625.main")(props),
      border: "1px solid",
      borderColor: "transparent",
      _hover: {
        bg: mode("#f5f5f5", "#292929")(props),
        borderColor: mode("#f5f5f5", "#292929")(props),
        _disabled: { borderColor: "transparent" },
      },
      _focus: { boxShadow: "none" },
      _active: {
        bg: mode("#ebebeb", "#3b3b3b")(props),
        borderColor: mode("#ebebeb", "#3b3b3b")(props),
      },
      _disabled: {
        opacity: 1,
        borderColor: "transparent",
        color: mode("grey.625.main", "grey.425.main")(props),
      },
      ...utils.focusOutline,
    }),
  },
}
