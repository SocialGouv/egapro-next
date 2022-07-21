import React from "react"
import { Stack } from "@chakra-ui/react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "./index"
import { RiSettings5Line } from "react-icons/ri"

export default {
  title: "Component/Button",
  component: Button,
  args: { label: "Button" },
} as ComponentMeta<typeof Button>

export const Base: ComponentStory<typeof Button> = (args) => <Button onClick={action("button-click")} {...args} />

export const allSize: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4} isInline align="center">
    <Button onClick={action("button-click")} {...args} size="sm" />
    <Button onClick={action("button-click")} {...args} size="md" />
    <Button onClick={action("button-click")} {...args} size="lg" />
  </Stack>
)

export const allTheme: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4} isInline align="center">
    <Button onClick={action("button-click")} {...args} />
    <Button onClick={action("button-click")} {...args} variant="secondary" />
    <Button onClick={action("button-click")} {...args} variant="tertiary" />
    <Button onClick={action("button-click")} {...args} variant="tertiary-no-border" />
  </Stack>
)

export const isDisabled: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4} isInline align="center">
    <Button onClick={action("button-click")} {...args} isDisabled />
    <Button onClick={action("button-click")} {...args} variant="secondary" isDisabled />
    <Button onClick={action("button-click")} {...args} variant="tertiary" isDisabled />
    <Button onClick={action("button-click")} {...args} variant="tertiary-no-border" isDisabled />
  </Stack>
)

export const isLoading: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4} isInline align="center">
    <Button onClick={action("button-click")} {...args} isLoading />
    <Button onClick={action("button-click")} {...args} variant="secondary" isLoading />
    <Button onClick={action("button-click")} {...args} variant="tertiary" isLoading />
    <Button onClick={action("button-click")} {...args} variant="tertiary-no-border" isLoading />
  </Stack>
)

export const withIcon: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={4}>
    <Stack spacing={4} isInline align="center">
      <Button onClick={action("button-click")} {...args} leftIcon={<RiSettings5Line />} size="lg" />
      <Button onClick={action("button-click")} {...args} variant="secondary" leftIcon={<RiSettings5Line />} />
      <Button onClick={action("button-click")} {...args} variant="tertiary" leftIcon={<RiSettings5Line />} size="sm" />
    </Stack>
    <Stack spacing={4} isInline align="center">
      <Button onClick={action("button-click")} {...args} rightIcon={<RiSettings5Line />} size="lg" />
      <Button onClick={action("button-click")} {...args} variant="secondary" rightIcon={<RiSettings5Line />} />
      <Button onClick={action("button-click")} {...args} variant="tertiary" rightIcon={<RiSettings5Line />} size="sm" />
    </Stack>
  </Stack>
)
