import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from '../components/Search/SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'SearchInput',
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const SearchProducers: Story = {
  args: {
    placeholder: 'Режиссёры',
  },
};
