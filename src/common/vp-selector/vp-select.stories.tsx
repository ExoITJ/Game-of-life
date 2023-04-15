import React, { useState } from 'react';
import VpSelector from './vp-selector';
import type { Meta, StoryObj } from '@storybook/react';
import c from '../../styles/common.module.css';

const meta: Meta<typeof VpSelector> = {
  title: 'VpSelector',
  component: VpSelector,
};
export default meta;

type Story = StoryObj<typeof VpSelector>;

export const Example: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className={c.centeredItem}>
        <VpSelector
          value={value}
          label="Выберите значение"
          onChange={(e) => setValue(e.currentTarget.value)}
        >
          <option value="">Выберите значение</option>
          <option value="1">Первое</option>
          <option value="2">Второе</option>
          <option value="3">Третье</option>
        </VpSelector>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className={c.centeredItem}>
      <VpSelector disabled value="">
        <option value="">Выберите значение</option>
        <option value="1">Первое</option>
        <option value="2">Второе</option>
        <option value="3">Третье</option>
      </VpSelector>
    </div>
  ),
};
