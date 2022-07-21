import React from "react"
import { Box, Checkbox as CheckboxChakra } from "@chakra-ui/react"
import { RiCheckLine } from "react-icons/ri"

type SelectProps = {
  isDisabled?: boolean
  isInvalid?: boolean
  isValid?: boolean
  isReadOnly?: boolean
  isRequired?: boolean
  hintText?: string
}

const Select = ({ hintText, isInvalid, isValid, ...rest }: SelectProps) => {
  return (
    <div>
      <CheckboxChakra
        icon={<RiCheckLine />}
        isInvalid={isInvalid}
        {...rest}
        sx={{
          color: (isInvalid && "var(--text-default-error)") || (isValid && "var(--text-default-success)"),
          alignItems: "flex-start",
          ".chakra-checkbox__control": {
            transform: "translateY(1px)",
            border: "1px solid var(--border-action-high-grey)",
            borderRadius: "0.25rem",
          },
          ".chakra-checkbox__control[data-invalid]": {
            borderColor: "var(--border-action-high-grey)",
          },
          ".chakra-checkbox__control[data-checked]": {
            backgroundColor: "var(--background-active-blue-france)",
            borderColor: "var(--background-active-blue-france)",
          },
          ".chakra-checkbox__control[data-focus]": {
            boxShadow: "none",
            outlineColor: "var(--outline-focus-blue)",
            outlineOffset: "0.125rem",
            outlineWidth: "0.125rem",
            outlineStyle: "solid",
          },
        }}
      />
      {hintText && (
        <Box as="p" paddingLeft={8} fontSize="xs" color="var(--text-mention-grey)">
          {hintText}
        </Box>
      )}
    </div>
  )
}

export default Select
