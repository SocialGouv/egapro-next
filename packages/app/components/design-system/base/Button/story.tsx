import React from "react"
import { RiSettings5Line } from "react-icons/ri"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "./index"
import Stack from "../../layout/Stack"

export default {
  title: "Component/Button",
  component: Button,
  args: { label: "Button" },
} as ComponentMeta<typeof Button>

export const Base: ComponentStory<typeof Button> = (args) => <Button onClick={action("button-click")} {...args} />

export const allTheme: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4} isInline align="center">
    <Button onClick={action("button-click")} {...args} />
    <Button onClick={action("button-click")} {...args} theme="secondary" />
    <Button onClick={action("button-click")} {...args} theme="tertiary" />
    <Button onClick={action("button-click")} {...args} theme="tertiary-no-border" />
  </Stack>
)

export const allSize: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4} isInline align="center">
    <Button onClick={action("button-click")} {...args} size="sm" />
    <Button onClick={action("button-click")} {...args} />
    <Button onClick={action("button-click")} {...args} size="lg" />
  </Stack>
)

export const isLoading: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4} isInline align="center">
    <Button onClick={action("button-click")} {...args} isLoading />
    <Button onClick={action("button-click")} {...args} isLoading theme="secondary" />
    <Button onClick={action("button-click")} {...args} isLoading theme="tertiary" />
    <Button onClick={action("button-click")} {...args} isLoading theme="tertiary-no-border" />
  </Stack>
)

export const isDisabled: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4} isInline align="center">
    <Button onClick={action("button-click")} {...args} isDisabled />
    <Button onClick={action("button-click")} {...args} isDisabled theme="secondary" />
    <Button onClick={action("button-click")} {...args} isDisabled theme="tertiary" />
    <Button onClick={action("button-click")} {...args} isDisabled theme="tertiary-no-border" />
  </Stack>
)

export const withIcon: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4}>
    <Stack spacing={4} isInline align="center">
      <Button onClick={action("button-click")} {...args} leftIcon={<RiSettings5Line />} size="lg" />
      <Button onClick={action("button-click")} {...args} leftIcon={<RiSettings5Line />} theme="secondary" />
      <Button onClick={action("button-click")} {...args} leftIcon={<RiSettings5Line />} theme="tertiary" size="sm" />
    </Stack>
    <Stack spacing={4} isInline align="center">
      <Button onClick={action("button-click")} {...args} rightIcon={<RiSettings5Line />} size="lg" />
      <Button onClick={action("button-click")} {...args} rightIcon={<RiSettings5Line />} theme="secondary" />
      <Button onClick={action("button-click")} {...args} rightIcon={<RiSettings5Line />} theme="tertiary" size="sm" />
    </Stack>
  </Stack>
)
