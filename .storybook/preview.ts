import type { Preview } from '@storybook/nextjs'
import "/home/letizia/OnlyBooksFrontend/src/app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;