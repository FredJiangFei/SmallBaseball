import React from 'react';

interface IToggleContext {
  on: boolean;
  toggle: () => void;
}

// @ts-ignore
const ToggleContext = React.createContext<IToggleContext>();

type Props = {
  children: React.ReactNode;
};

function ToggleProvider({ children }: Props) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>;
}

export { ToggleProvider, ToggleContext };
