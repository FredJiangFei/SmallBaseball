import { Switch } from './switch/switch';
import { ToggleProvider } from '../contexts/ToggleContext';
import useToggle from '../hooks/useToggle';

export function Toggle({ children }: any) {
  return <ToggleProvider>{children}</ToggleProvider>;
}

export function ToggleOn({ children }: any) {
  const { on } = useToggle();
  return on ? children : null;
}

export function ToggleOff({ children }: any) {
  const { on } = useToggle();
  return on ? null : children;
}

export function ToggleButton({ ...props }: any) {
  const { on, toggle } = useToggle();
  return <Switch on={on} onClick={toggle} {...props} />;
}
