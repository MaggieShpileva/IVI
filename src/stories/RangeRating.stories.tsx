import type { Meta, StoryObj } from "@storybook/react";
import RangeRating from "../components/RangeRating";

const meta: Meta<typeof RangeRating> = {
  title: "RangeRating",
  component: RangeRating,
};

export default meta;
type Story = StoryObj<typeof RangeRating>;

export const Rating: Story = {
  args: {
    rtl: false,
    ratingMin: 3.0,
    ratingMax: 10.0,
  },
};
