import { Divider } from 'native-base';
import colors from '../config/colors';

const components = {
  // Box: {
  //   variants: {
  //     linear: {
  //       bg: {
  //         linearGradient: {
  //           colors: ['lightBlue.300', 'violet.800'],
  //           start: [0, 0],
  //           end: [1, 0],
  //         },
  //       },
  //     },
  //   },
  // },
  Button: {
    baseStyle: ({ colorMode }) => {
      return {
        _disabled: {
          bg: 'gray.500',
        },
        _light: { bg: 'red.300' },
        _dark: { bg: 'blue.300' },
      };
    },
    defaultProps: {
      colorScheme: 'primary',
    },
    variants: {
      outline: {
        border: '2px solid',
        borderColor: 'primary.500',
        bg: 'white',
        _pressed: {
          border: '2px solid',
          borderColor: 'secondary.500',
          bg: 'secondary.300',
        },
      },
      linear: {
        bgColor: 'green.300',
      }
    },
  },
  Heading: {
    baseStyle: {
      textAlign: 'center',
      my: 4,
      _light: { color: 'red.300' },
      _dark: { color: 'blue.300' },
    },
    defaultProps: {
      size: 'md',
    },
  },
  Text: {
    baseStyle: {
      color: 'coolGray.600',
      _dark: { color: 'warmGray.300' },
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
        fontSize: '14px',
      },
    },
    variants: {
      link: {
        color: colors.secondary,
      },
      subTitle: {
        fontWeight: 'bold',
        _light: {
          color: 'violet.500',
        },
        _dark: {
          color: 'violet.400',
        },
      },
    },
  },
  Input: {
    defaultProps: {
      focusBorderColor: 'primary.500',
      size: 'md',
    },
    variants: {
      outline: {
        borderRadius: 'md',
        borderColor: 'gray.300',
        borderWidth: 1,
        _hover: {
          borderColor: 'gray.400',
        },
        _focus: {
          boxShadow: 'outline',
          borderColor: 'secondary.400',
        },
        _disabled: {
          opacity: 0.4,
        },
      },
    },
  },
  Divider: {
    baseStyle: {
      bg: colors.light
    }
  }
};

export default components;
