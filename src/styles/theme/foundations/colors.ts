import { theme } from '@chakra-ui/react';

import tailwindColors from './tailwindColors';

export const colors = {
  ...theme.colors,
  ...tailwindColors,
  brand: {
    50: '#24e175',
    100: '#19b95e',
    200: '#16a352',
    300: '#138c47',
    400: '#10763c',
    500: '#0A4925',
    600: '#041c0e',
    700: '#010603',
    800: '#000000',
    900: '#000000',
  },
  gray: tailwindColors.blueGray,
  success: theme.colors.green,
  error: theme.colors.red,
  warning: theme.colors.yellow,
};
