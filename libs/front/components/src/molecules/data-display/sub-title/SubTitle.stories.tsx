import { Story, ComponentMeta } from '@storybook/react';

import { SubTitle } from './SubTitle';

export default {
  component: SubTitle,
  title: 'Shared/molecules/SubTitle',
} as ComponentMeta<typeof SubTitle>;

const Template: Story = (_) => <SubTitle>Typescript</SubTitle>;

export const Primary = Template.bind({});
Primary.args = {};
