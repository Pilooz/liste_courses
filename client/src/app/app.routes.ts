import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

// Components
import { HomeComponent } from './components/home/home.component';
import { ElderlyProfileFormComponent } from './components/elderly/elderly-profile-form/elderly-profile-form.component';
import { ElderlySkillsFormComponent } from './components/elderly/elderly-skills-form/elderly-skills-form.component';
import { ElderlyResolver } from './resolver/elderly.resolver';
import { ElderlyFoodFormComponent } from './components/elderly/elderly-food-form/elderly-food-form.component';
import { ElderlyCookingImplicationComponent } from './components/elderly/elderly-cooking-implication/elderly-cooking-implication.component';

const ROUTES: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'elderly',
  canActivate: [AuthGuard],
  children: [{
    path: '',
    canDeactivate: [UnsavedChangesGuard],
    component: ElderlyProfileFormComponent
  }, {
    path: ':elderlyId',
    resolve: { elderly: ElderlyResolver },
    children: [{
      path: '',
      component: ElderlyProfileFormComponent,
      canDeactivate: [UnsavedChangesGuard]
    }, {
      path: 'food',
      component: ElderlyFoodFormComponent,
      canDeactivate: [UnsavedChangesGuard]
    }, {
      path: 'cookingImplication',
      component: ElderlyCookingImplicationComponent,
      canDeactivate: [UnsavedChangesGuard]
    }, {
      path: 'skills',
      component: ElderlySkillsFormComponent,
      canDeactivate: [UnsavedChangesGuard]
    }]
  }]
}, {
  path: '**',
  redirectTo: 'home'
}];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES, { onSameUrlNavigation: 'reload' });
