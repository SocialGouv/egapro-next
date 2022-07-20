import React, { FunctionComponent } from "react"
import { Stack as StackChakra, StackProps as StackPropsChakra } from "@chakra-ui/react"

type StackProps = StackPropsChakra

const Stack: FunctionComponent<StackProps> = ({ children, ...rest }: StackProps) => {
  return <StackChakra {...rest}>{children}</StackChakra>
}

export default Stack
