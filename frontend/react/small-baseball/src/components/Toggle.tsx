import React from 'react';
import { Switch } from './switch/switch';

export function Toggle({ children }: any) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  return React.Children.map(children, child => {
    return typeof child.type === 'string' ? child : React.cloneElement(child, { on, toggle });
  });
}

export function ToggleOn({ on, children }: any) {
  return on ? children : null;
}

export function ToggleOff({ on, children }: any) {
  return on ? null : children;
}

export function ToggleButton({ on, toggle, ...props }: any) {
  return <Switch on={on} onClick={toggle} {...props} />;
}
