import React from 'react';

import { SmallWidget } from './SmallWidget';

export default {
  title: 'Example/Small Widget',
  component: SmallWidget,
};

const Template = (args) => <SmallWidget {...args} />;

export const Default = Template.bind({});