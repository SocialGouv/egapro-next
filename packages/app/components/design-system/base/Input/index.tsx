import React from "react";
import {
  Input as InputChakra,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

type InputChakraProps = {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};

const Input = ({
  isInvalid,
  isValid,
  leftIcon,
  rightIcon,
  ...rest
}: InputChakraProps) => {
  return (
    <InputGroup>
      {leftIcon && (
        <InputLeftElement pointerEvents="none" children={leftIcon} />
      )}
      <InputChakra
        bg="var(--grey-950)"
        borderRadius={"0.25rem 0.25rem 0 0"}
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          borderBottomColor: "var(--grey-425)",
        }}
        _readOnly={{
          borderBottomColor: "var(--grey-850)",
        }}
        {...rest}
        sx={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: `0.125rem solid ${
            (isInvalid && "var(--red-marianne-472)") ||
            (isValid && "var(--success-525)") ||
            "var(--grey-425)"
          }`,
          "&:focus-visible": {
            "outline-color": "var(--blue-focus)",
            "outline-offset": "0.125rem",
            "outline-width": "0.125rem",
          },
          "&:disabled": {
            opacity: 1,
            borderBottomColor: "var(--grey-850)",
          },
        }}
      />
      {rightIcon && (
        <InputRightElement pointerEvents="none" children={rightIcon} />
      )}
    </InputGroup>
  );
};

export default Input;
