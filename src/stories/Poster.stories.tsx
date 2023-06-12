import { Meta, Story } from "@storybook/react";
import Poster, { PosterMovieProps } from "../components/Poster";
export default {
  title: "MoviePoster",
  component: Poster,

  argTypes: {},
} as Meta<PosterStoryProps>;

type PosterStoryProps = Pick<PosterMovieProps, "film">;

export const Default: Story<PosterStoryProps> = ({ ...args }) => (
  <Poster {...args} />
);
Default.args = {
  film: {
    id: 309,
    filmPoster: "https://kinopoiskapiunofficial.tech/images/posters/kp/309.jpg",
    filmGrade: 7.9,
    filmYear: 2002,
    filmTime: 107,
    filmAge: "16",
    filmLang: [
      {
        lang: "ru",
        filmName: "Эквилибриум",
      },
      {
        lang: "en",
        filmName: "Equilibrium",
      },
    ],
    genres: [
      {
        id: 9,
        name: "драма",
      },

      {
        id: 1,
        name: "триллер",
      },
    ],
    countries: [
      {
        id: 1,
        name: "США",
      },
    ],
    actors: [
      {
        id: 2110,
        name: "Энгус Макфадьен",
      },
      {
        id: 3713,
        name: "Дэвид Хеммингс",
      },
    ],
    directors: [
      {
        id: 25995,
        name: "Курт Уиммер",
      },
    ],
  },
};
Default.storyName = "MoviePoster";
