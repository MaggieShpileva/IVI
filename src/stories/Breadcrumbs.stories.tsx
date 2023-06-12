import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from '../components/Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Pages: Story = {
  args: {
    type: 'pages',
    del: '/',
    breadcrumbs: [
      { item: 'Мой Иви', path: 'https://www.ivi.ru/' },
      { item: 'Фильмы', path: 'https://www.ivi.ru/movies' },
      { item: 'Комедии', path: 'https://www.ivi.ru/movies/comedy' },
    ],
  },
};

export const Films: Story = {
  args: {
    type: 'films',
    del: ' - ',
    breadcrumbs: [
      { item: 'Мой Иви', path: 'https://www.ivi.ru/' },
      { item: 'Фильмы', path: 'https://www.ivi.ru/movies' },
      { item: 'Комедии', path: 'https://www.ivi.ru/movies/comedy' },
    ],
  },
};
