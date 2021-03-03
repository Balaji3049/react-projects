import Button from "../ui-core/Button";

export default {
  title: "Base/Text Buttons",
  component: Button,
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "click here",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "click here",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};
