import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";
import { configureStore } from "@reduxjs/toolkit";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;