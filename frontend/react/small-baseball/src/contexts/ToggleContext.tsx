import React from 'react';

interface IToggleContext {
  on: boolean;
  toggle: () => void;
  togglerProps: any;
}

// @ts-ignore
const ToggleContext = React.createContext<IToggleContext>();

type Props = {
  children: React.ReactNode;
};

function ToggleProvider({ children }: Props) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  const togglerProps = {
    'aria-pressed': on,
    onClick: toggle,
  };

  return (
    <ToggleContext.Provider value={{ on, toggle, togglerProps }}>{children}</ToggleContext.Provider>
  );
}

export { ToggleProvider, ToggleContext };
