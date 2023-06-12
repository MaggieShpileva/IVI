import { Meta, Story } from "@storybook/react";
import { ResponseTopMovieKPType } from "@/types/types";
import PosterTopTen, { PosterProps } from "../components/Carts/TopTen";

export default {
  title: "Poster",
  component: PosterTopTen,

  argTypes: {},
} as Meta<PosterStoryProps>;

type PosterStoryProps = Pick<PosterProps, "num" | "film">;

export const Default: Story<PosterStoryProps> = ({ ...args }) => (
  <PosterTopTen {...args} />
);

Default.args = {
  num: 5,
  film: {
    id: 123,
    poster: {
      previewUrl:
        "https://kinopoiskapiunofficial.tech/images/posters/kp/309.jpg",
      url: "https://kinopoiskapiunofficial.tech/images/posters/kp/309.jpg",
    },
  },
};
Default.storyName = "PosterTopMovie";
