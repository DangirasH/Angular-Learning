import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {FilmComponent} from "./film/film.component";

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', component: UserProfileComponent},
  { path: 'film', component: FilmComponent}
];

export { ROUTES };