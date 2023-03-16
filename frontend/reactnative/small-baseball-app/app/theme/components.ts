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
        rounded: 'lg',
        bgColor: 'amber.400',
        // bg: colorMode === 'dark' ? 'red.300' : 'blue.300',
      };
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
    variants: {
      title: {
        my: 4,
      },
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


export default components;
