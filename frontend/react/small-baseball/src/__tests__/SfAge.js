import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import SfAge from '../components/SfAge';

global.IS_REACT_ACT_ENVIRONMENT = true;

beforeEach(() => {
  document.body.innerHTML = '';
});

test('age increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div');
  document.body.append(div);

  const root = createRoot(div);
  act(() => root.render(<SfAge />));
  const [decrement, increment] = div.querySelectorAll('button');
  const message = div.firstChild.querySelector('div');

  expect(message.textContent).toBe('Age: 0');

  act(() => increment.click());
  expect(message.textContent).toBe('Age: 1');

  act(() => decrement.click());
  expect(message.textContent).toBe('Age: 0');
});
