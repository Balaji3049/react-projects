import Button from "../ui-core/Button";

export default {
  title: "Base/Buttons",
  component: Button,
  argTypes: {
    //backgroundColor: { control: 'color' }
  },
};

const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  color: "primary",
  label: "click here",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "contained",
  color: "secondary",
  label: "click here",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "contained",
  label: "Disabled",
  disabled: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Disabled",
  disabled: true,
};
