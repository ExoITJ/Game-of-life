import React from 'react';
import VpButton from './vp-button';
import type { Meta, StoryObj } from '@storybook/react';
import c from '../../styles/common.module.css';

const meta: Meta<typeof VpButton> = {
  title: 'VpButton',
  component: VpButton,
};
export default meta;

type Story = StoryObj<typeof VpButton>;

export const Example: Story = {
  render: () => (
    <div className={c.centeredItem}>
      <VpButton>Пример</VpButton>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className={c.centeredItem}>
      <VpButton loading>Пример</VpButton>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className={c.centeredItem}>
      <VpButton disabled>Пример</VpButton>
    </div>
  ),
};
