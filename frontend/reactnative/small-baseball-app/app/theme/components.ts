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
        }
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
    },
  },
  Heading: {
    baseStyle: {
      textAlign: 'center',
      my: 4,
    },
    defaultProps: {
      size: 'md',
    },
  },
  Text: {
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
};

export default components;
