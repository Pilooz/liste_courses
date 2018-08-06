import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Components
import { HomeComponent } from './components/home/home.component';
import { ElderlyProfileFormComponent } from './components/elderly/elderly-profile-form/elderly-profile-form.component';
import { ElderlySkillsFormComponent } from './components/elderly/elderly-skills-form/elderly-skills-form.component';

const ROUTES: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'elderly',
  canActivate: [AuthGuard],
  children: [{
    path: '',
    component: ElderlyProfileFormComponent
  }, {
    path: ':elderlyId',
    children: [{
      path: 'skills',
      component: ElderlySkillsFormComponent
    }]
  }]
}, {
  path: '**',
  redirectTo: 'home'
}];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES, { onSameUrlNavigation: 'reload' });
