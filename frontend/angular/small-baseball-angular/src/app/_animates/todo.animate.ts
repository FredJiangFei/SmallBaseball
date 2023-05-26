import {
  trigger,
  state,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

export const todoHoverAnim = trigger('todoHover', [
    state('out', style({ transform: 'scale(1)', 'box-shadow': 'none' })),
    state('hover', style({ transform: 'scale(1.01)', 'box-shadow': '2px 2px 2px 0px #ccc' })),
    transition('out => hover', animate('100ms ease-in')),
    transition('hover => out', animate('100ms ease-out')),
]);
