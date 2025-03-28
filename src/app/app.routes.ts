import { Routes } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { InitiativeComponent } from './initiative/initiative.component';

export const routes: Routes = [
  {
    path: '',
    component: FormControlComponent,
  },
  {
    path: 'initiative',
    component: InitiativeComponent,
  },
];
