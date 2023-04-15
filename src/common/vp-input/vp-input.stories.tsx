import React, { useState } from 'react';
import VpInput from './vp-input';
import type { Meta, StoryObj } from '@storybook/react';
import c from '../../styles/common.module.css';

const meta: Meta<typeof VpInput> = {
  title: 'VpInput',
  component: VpInput,
};
export default meta;

type Story = StoryObj<typeof VpInput>;

export const Example: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className={c.centeredItem}>
        <VpInput
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className={c.centeredItem}>
      <VpInput disabled value="test" />
    </div>
  ),
};
