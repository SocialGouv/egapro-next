import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RiSettings5Line } from "react-icons/ri";

import Input from ".";
import Stack from "../../layout/Stack";

export default {
  title: "Component/Input",
  component: Input,
  args: {},
} as ComponentMeta<typeof Input>;

export const Base: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const withIcon: ComponentStory<typeof Input> = (args) => (
  <Stack spacing={4}>
    <Input {...args} leftIcon={<RiSettings5Line />} />;
    <Input {...args} rightIcon={<RiSettings5Line />} />;
  </Stack>
);
