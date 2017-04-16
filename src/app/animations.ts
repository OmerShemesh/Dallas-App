import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


export const flyIn = trigger('flyIn', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(500)
      ])
    ]);