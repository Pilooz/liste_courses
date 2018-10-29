import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

// Components
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';

const ROUTES: Routes = [{
  path: 'index',
  canActivate: [UnauthGuard],
  component: IndexComponent
}, {
  path: 'home',
  canActivate: [AuthGuard],
  component: HomeComponent
}, {
  path: '**',
  redirectTo: 'index'
}];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES, { onSameUrlNavigation: 'reload' });
