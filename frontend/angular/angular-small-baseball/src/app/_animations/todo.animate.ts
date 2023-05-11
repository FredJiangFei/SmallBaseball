import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

export const todoHoverAnim = trigger('todoHover', [
  state('out', style({ transform: 'scale(1)', 'box-shadow': 'none' })),
  state(
    'hover',
    style({ transform: 'scale(1.01)', 'box-shadow': '2px 2px 2px 0px #ccc' })
  ),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out')),
]);

export const todoAddAndRemoveAnim = trigger('todoAddAndRemove', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('1s', style({ opacity: 0 })),
  ]),
]);

export const slideToRight = trigger('slideAnim', [
  state('void', style({ position: 'fixed', width: '100%', height: '80%' })),
  state('*', style({ position: 'fixed', width: '100%', height: '80%' })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('.5s ease-in-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)' }),
    animate('.5s ease-in-out', style({ transform: 'translateX(100%)' })),
  ]),
]);
