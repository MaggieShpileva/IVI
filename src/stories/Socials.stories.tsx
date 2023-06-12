import type { Meta, StoryObj } from '@storybook/react';
import Socials from '../components/Socials';

const meta: Meta<typeof Socials> = {
  title: 'Socials',
  component: Socials,
};

export default meta;
type Story = StoryObj<typeof Socials>;

export const SocialsFooter: Story = {};
