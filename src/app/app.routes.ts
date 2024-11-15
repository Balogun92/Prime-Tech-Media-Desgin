import { Routes } from '@angular/router';
import { Design1Component } from './pages/design1/design1.component';
import { Design2Component } from './pages/design2/design2.component';
import { Design3Component } from './pages/design3/design3.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'design1',
    pathMatch: 'full'
  },
  {
    path: 'design1',
    component: Design1Component
  },
  {
    path: 'design2',
    component: Design2Component
  },
  {
    path: 'design3',
    component: Design3Component
  },

];
