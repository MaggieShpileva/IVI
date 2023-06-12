import type { Meta, StoryObj } from "@storybook/react";
import PosterPerson from "../components/PosterPerson";

const meta: Meta<typeof PosterPerson> = {
  title: "PosterPerson",
  component: PosterPerson,
};

export default meta;
type Story = StoryObj<typeof PosterPerson>;

export const personForSlider: Story = {
  args: {
    lang: "ru",
    person: {
      filmsNumber: 28,
      person: {
        id: 21495,
        personPicture: "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/21495.jpg",
        personLang: [
          {
            lang: "ru",
            personName: "Кристиан Бэйл",
          },
          {
            lang: "en",
            personName: "Christian Bale",
          },
        ],
      },
    },
  },
};
