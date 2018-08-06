import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Components
import { HomeComponent } from './components/home/home.component';
import { ProfileFormComponent } from './components/profile/profile-form/profile-form.component';

const ROUTES: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'profile',
  canActivate: [AuthGuard],
  children: [{
    path: '',
    component: ProfileFormComponent
  }]
}, {
  path: '**',
  redirectTo: 'home'
}];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES, { onSameUrlNavigation: 'reload' });
