import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ROUTES } from './app.routes';
import { FilmComponent } from './film/film.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    UserProfileComponent,
    FilmComponent,
    HighlightDirective,
    DisplayMoviesDirective

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }