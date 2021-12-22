import React from 'react';

import { MyPopup } from './Popup';

export default {
  title: 'Example/Popup',
  component: MyPopup,
};

const Template = (args) => <MyPopup {...args} />;

export const Default = Template.bind({});