import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// Material Design
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  DateAdapter,
} from '@angular/material';
import { FrenchDateAdapter } from './util/FrenchDateAdapter';

// Design
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Restangular
import { UrlSettings } from './config/url.settings';
import { RestangularModule, Restangular } from 'ngx-restangular';

// Routing
import { appRoutingProviders, routing } from './app.routes';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

// Resolver
import { ElderlyResolver } from './resolver/elderly.resolver';

// Services
import { AuthenticationService } from './services/authentication.service';
import { ElderlyService } from './services/elderly.service';
import { ElderlySkillService } from './services/elderly-skill.service';
import { HeaderService } from './services/header.services';
import { SkillService } from './services/skill.service';
import { UserService } from './services/user.service';

// Components
import { HomeComponent } from './components/home/home.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ElderlyProfileFormComponent } from './components/elderly/elderly-profile-form/elderly-profile-form.component';
import { ElderlySkillsFormComponent } from './components/elderly/elderly-skills-form/elderly-skills-form.component';
import { ElderlyFoodFormComponent } from './components/elderly/elderly-food-form/elderly-food-form.component';
import { ElderlyCookingImplicationComponent } from './components/elderly/elderly-cooking-implication/elderly-cooking-implication.component';
import { ElderlyListComponent } from './components/elderly/elderly-list/elderly-list.component';
import { ElderlyProfileComponent } from './components/elderly/elderly-profile/elderly-profile.component';

/**
 * Function for settting the default restangular configuration
 */
export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(UrlSettings.API_ENDPOINT);
  RestangularProvider.setPlainByDefault(true);
  RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
    return {
      params: assignWithoutUndefinedValues({}, params),
      headers,
      element
    }
  });

  function assignWithoutUndefinedValues(target, source) {
    for (const key of Object.keys(source)) {
      const val = source[key];
      if (val !== undefined) {
        target[key] = val;
      }
    }
    return target;
  }

  // Authentication token if exists
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    const accessTokenId = JSON.parse(accessToken).id;
    if (!accessTokenId) {
      throw new Error('Error with access token ID');
    }
    RestangularProvider.setDefaultHeaders({ 'Authorization': accessTokenId });
  }
}

/**
 * Function to compute if we are logged in before loading the appModule
 */
export function startupServiceFactory(authenticationService: AuthenticationService): Function {
  return () => authenticationService.computeIsLoggedIn();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DialogComponent,
    ElderlyProfileFormComponent,
    ElderlySkillsFormComponent,
    ElderlyFoodFormComponent,
    ElderlyCookingImplicationComponent,
    ElderlyListComponent,
    ElderlyProfileComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    // Material
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    // Importing RestangularModule and making default configs for restanglar
    RestangularModule.forRoot(RestangularConfigFactory),
    routing
  ],
  providers: [
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AuthenticationService],
      multi: true
    },
    {
      provide: DateAdapter,
      useClass: FrenchDateAdapter
    },
    appRoutingProviders,
    AuthenticationService,
    ElderlyService,
    ElderlySkillService,
    HeaderService,
    SkillService,
    UserService,
    AuthGuard,
    UnauthGuard,
    UnsavedChangesGuard,
    ElderlyResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
MatAutocompleteModule,
MatButtonToggleModule,
MatCardModule,
MatCheckboxModule,
MatChipsModule,
MatExpansionModule,
MatGridListModule,
MatListModule,
MatMenuModule,
MatPaginatorModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRadioModule,
MatRippleModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatSortModule,
MatTableModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
MatSelectModule,
MatStepperModule
*/