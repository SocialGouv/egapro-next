import React, { FunctionComponent } from "react"
import { ButtonGroup as ButtonGroupChakra } from "@chakra-ui/react"

type ButtonGroupProps = {
  isAttached?: boolean
}

const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ children, isAttached, ...rest }) => {
  return (
    <ButtonGroupChakra
      isAttached={isAttached}
      {...rest}
      spacing={4}
      sx={{
        "button + button": {
          borderLeft: isAttached && "none",
        },
      }}
    >
      {children}
    </ButtonGroupChakra>
  )
}

export default ButtonGroup
