import React from 'react';

const useToggleProps = () => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return {
    on,
    toggle,
    togglerProps: {
      'aria-pressed': on,
      onClick: toggle,
    },
  };
};

export default useToggleProps;
