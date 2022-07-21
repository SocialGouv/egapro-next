import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Checkbox from "."

export default {
  title: "Component/Checkbox",
  component: Checkbox,
  args: {
    children: <>Label checkbox</>,
  },
} as ComponentMeta<typeof Checkbox>

export const Base: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const withHintText: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} hintText="Texte de description additionnel" />
)

export const isValid: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} isValid />

export const isInvalid: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} isInvalid />

export const isDisabled: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} isDisabled />

export const isReadOnly: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} isReadOnly />
