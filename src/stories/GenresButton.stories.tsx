import type { Meta, StoryObj } from '@storybook/react';
import GenresButton from '../components/Filters/GenresButton';

const meta: Meta<typeof GenresButton> = {
  title: 'GenresButton',
  component: GenresButton,
};

export default meta;
type Story = StoryObj<typeof GenresButton>;

export const BigButton: Story = {
  args: {
    size: 'big',
    genres: 'Исторические',
    id: 11,
  },
};

export const SmallButton: Story = {
  args: {
    size: 'small',
    genres: 'Комедии',
    id: 12,
  },
};
