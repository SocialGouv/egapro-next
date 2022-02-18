import { StyleFunctionProps } from "@chakra-ui/theme-tools"
import defaultTheme from "@chakra-ui/theme"

const components = {
  components: {
    Button: {
      baseStyle: {
        fontWeight: "normal",
      },
    },

    Heading: {
      baseStyle: {
        fontWeight: "semibold",
      },
    },
    Input: {
      baseStyle: (props: StyleFunctionProps) => ({
        field: {
          _placeholder: {
            color: props.colorMode === "dark" ? "gray.400" : "gray.500",
          },
        },
      }),
    },
    Select: {
      variants: {
        outline: (props: StyleFunctionProps) => ({
          ...defaultTheme.components.Input.variants.outline(props),
          field: {
            ...defaultTheme.components.Input.variants.outline(props).field,
            borderColor: "gray.400",
            background: "white",
            _readOnly: {
              background: "primary.200",
              borderColor: "transparent",
            },
          },
        }),
      },
    },

    Table: {
      sizes: {
        sm: {
          th: {
            px: "2",
            py: "2",
            lineHeight: "1",
            fontSize: "xs",
          },
          td: {
            px: "2",
            py: "1.5",
            fontSize: "sm",
            lineHeight: "1",
          },
          caption: {
            px: "1",
            py: "2",
            fontSize: "xs",
          },
        },
      },
    },
  },
}

export default components
