import type { Meta, StoryObj } from "@storybook/react";
import RangeScore from "../components/RangeScore";

const meta: Meta<typeof RangeScore> = {
  title: "RangeScore",
  component: RangeScore,
};

export default meta;
type Story = StoryObj<typeof RangeScore>;

export const ScoreRating: Story = {
  args: {
    rtl: false,
    scoreMin: 10000,
    scoreMax: 1000000,
  },
};
