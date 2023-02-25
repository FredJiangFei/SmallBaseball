import { extendTheme } from 'native-base';

const componentsTheme = {
  Box: {
    baseStyle: ({ colorMode }) => {
      return {
        rounded: 'lg',
        bg: colorMode === 'dark' ? 'red.300' : 'blue.300',
      };
    },

    variants: {
      linear: {
        bg: {
          linearGradient: {
            colors: ['lightBlue.300', 'violet.800'],
            start: [0, 0],
            end: [1, 0],
          },
        },
      },
    },
  },
  Heading: {
    defaultProps: {
      size: 'md',
    },
  },
  Text: {
    baseStyle: {
      // color: 'emerald.400',
    },
    defaultProps: {
      size: 'sm',
    },
    sizes: {
      xl: {
        fontSize: '64px',
      },
      lg: {
        fontSize: '32px',
      },
      md: {
        fontSize: '16px',
      },
      sm: {
        fontSize: '12px',
      },
    },
  },
};

const newTheme = {
  colors: {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    amber: {
      400: '#d97706',
    },
  },
  space: {
    // 1: 8,
    // 2: 16,
  },
  components: componentsTheme,
};
const theme = extendTheme(newTheme);

export default theme;
