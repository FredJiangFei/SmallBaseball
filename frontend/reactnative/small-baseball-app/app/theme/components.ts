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
        borderRadius: 'md',
        rounded: 'lg',
        bgColor: 'amber.400',
        // bg: colorMode === 'dark' ? 'red.300' : 'blue.300',
      };
    },
    defaultProps: {
      colorScheme: 'primary',
    },
    sizes: {
      md: {
        px: 6,
        py: 3,
      },
      lg: {
        px: 8,
        py: 4,
      },
    },
    variants: {
      solid: {
        bg: 'primary.500',
        _hover: {
          bg: 'primary.600',
        },
      },
      outline: {
        border: '2px solid',
        borderColor: 'primary.500',
        bg: 'white',
        _hover: {
          bg: 'primary.500',
          color: 'white',
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
    baseStyle: {
      color: 'emerald.400',
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
        },
        _disabled: {
          opacity: 0.4,
        },
      },
    },
  },
};

export default components;
