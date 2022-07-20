import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Select from "."

export default {
  title: "Component/Select",
  component: Select,
  args: {
    placeholder: "Placeholder",
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
} as ComponentMeta<typeof Select>

export const Base: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const isInvalid: ComponentStory<typeof Select> = (args) => <Select {...args} isInvalid />

export const isValid: ComponentStory<typeof Select> = (args) => <Select {...args} isValid />

export const isDisabled: ComponentStory<typeof Select> = (args) => <Select {...args} isDisabled />

export const isReadOnly: ComponentStory<typeof Select> = (args) => <Select {...args} isReadOnly />
