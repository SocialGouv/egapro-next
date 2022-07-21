import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import ButtonGroup from "."
import Button from "../Button"

export default {
  title: "Component/ButtonGroup",
  component: ButtonGroup,
  subcomponents: { Button },
  args: {},
} as ComponentMeta<typeof ButtonGroup>

export const Base: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button theme="tertiary" label="Button" />
    <Button theme="tertiary" label="Button" />
    <Button theme="tertiary" label="Button" />
  </ButtonGroup>
)

export const isAttached: ComponentStory<typeof Button> = () => (
  <ButtonGroup isAttached>
    <Button theme="tertiary" label="Button" />
    <Button theme="tertiary" label="Button" />
    <Button theme="tertiary" label="Button" />
  </ButtonGroup>
)
