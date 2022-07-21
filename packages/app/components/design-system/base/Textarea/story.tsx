import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Textarea from "."

export default {
  title: "Component/Textarea",
  component: Textarea,
  args: {
    placeholder: "Placeholder",
  },
} as ComponentMeta<typeof Textarea>

export const Base: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />

export const isInvalid: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} isInvalid />

export const isValid: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} isValid />

export const isDisabled: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} isDisabled />

export const isReadOnly: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} isReadOnly />
