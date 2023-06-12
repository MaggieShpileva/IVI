import type { Meta, StoryObj } from '@storybook/react';
import Sort from '../components/Sort';

const meta: Meta<typeof Sort> = {
  title: 'Sort',
  component: Sort,
};

export default meta;
type Story = StoryObj<typeof Sort>;

export const SortRating: Story = {};
