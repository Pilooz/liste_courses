import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Locale
import { LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

// Material Design
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  DateAdapter,
} from '@angular/material';
import { FrenchDateAdapter } from './util/FrenchDateAdapter';

// Design
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pipes
import { DateDiffPipe } from './pipes/DateDiffPipe';

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
import { DishResolver } from './resolver/dish.resolver';
import { ElderlyResolver } from './resolver/elderly.resolver';
import { ElderlyMealsResolver } from './resolver/elderly-meals.resolver';
import { ElderlyShoppingListResolver } from './resolver/elderly-shoppingList.resolver';
import { StarterResolver } from './resolver/starter.resolver';

// Services
import { DishService } from './services/dish.service';
import { AuthenticationService } from './services/authentication.service';
import { ElderlyService } from './services/elderly.service';
import { ElderlyMealService } from './services/elderly-meal.service';
import { ElderlyShoppingListService } from './services/elderly-shoppingList.service';
import { ElderlySkillService } from './services/elderly-skill.service';
import { HeaderService } from './services/header.services';
import { SkillService } from './services/skill.service';
import { StarterService } from './services/starter.service';
import { UserService } from './services/user.service';

// Components
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ElderlyCookingImplicationComponent } from './components/elderly/elderly-cooking-implication/elderly-cooking-implication.component';
import { ElderlyFoodFormComponent } from './components/elderly/elderly-food-form/elderly-food-form.component';
import { ElderlyListComponent } from './components/elderly/elderly-list/elderly-list.component';
import { ElderlyMealComponent } from './components/elderly/elderly-meal/elderly-meal.component';
import { ElderlyProfileComponent } from './components/elderly/elderly-profile/elderly-profile.component';
import { ElderlyProfileFormComponent } from './components/elderly/elderly-profile-form/elderly-profile-form.component';
import { ElderlySkillsFormComponent } from './components/elderly/elderly-skills-form/elderly-skills-form.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientQuantityDialogComponent } from './components/dialog/ingredient-quantity-dialog/ingredient-quantity-dialog.component';
import { MealsCalendarComponent } from './components/elderly/meals-calendar/meals-calendar.component';
import { MealsCalendarContentComponent } from './components/elderly/meals-calendar-content/meals-calendar-content.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppingListComponent } from './components/elderly/shopping-list/shopping-list.component';
import { ShoppingListEditionComponent } from './components/elderly/shopping-list-edition/shopping-list-edition.component';

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
    DateDiffPipe,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DialogComponent,
    ElderlyProfileFormComponent,
    ElderlySkillsFormComponent,
    ElderlyFoodFormComponent,
    ElderlyCookingImplicationComponent,
    ElderlyListComponent,
    ElderlyProfileComponent,
    MealsCalendarComponent,
    MealsCalendarContentComponent,
    ShoppingListComponent,
    RecipeComponent,
    ElderlyMealComponent,
    IngredientQuantityDialogComponent,
    ShoppingListEditionComponent
  ],
  entryComponents: [
    DialogComponent,
    IngredientQuantityDialogComponent
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
    MatExpansionModule,
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
    { provide: LOCALE_ID, useValue: 'fr' },
    appRoutingProviders,
    AuthenticationService,
    DishService,
    ElderlyService,
    ElderlyMealService,
    ElderlyShoppingListService,
    ElderlySkillService,
    HeaderService,
    StarterService,
    SkillService,
    UserService,
    AuthGuard,
    UnauthGuard,
    UnsavedChangesGuard,
    ElderlyResolver,
    ElderlyMealsResolver,
    ElderlyShoppingListResolver,
    DishResolver,
    StarterResolver
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