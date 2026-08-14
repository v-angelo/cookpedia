import { Routes } from '@angular/router';
import { Home } from './users/home/home';
import { Recipes } from './users/recipes/recipes';
import { About } from './users/about/about';
import { Contact } from './users/contact/contact';
import { Collections } from './users/collections/collections';
import { Login } from './users/login/login';
import { Register } from './users/register/register';
import { Profile } from './users/profile/profile';
import { ViewRecipe } from './users/view-recipe/view-recipe';
import { Pnf } from './users/pnf/pnf';

export const routes: Routes = [
  // lazy loading : http://localhost:4200/admin
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-module/admin-module-module').then((module) => module.AdminModuleModule),
  },

  // normal loading
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: 'recipes',
    component: Recipes,
    title: 'Recipes',
  },
  {
    path: 'about',
    component: About,
    title: 'About',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact',
  },
  {
    path: 'collections',
    component: Collections,
    title: 'Collections',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login',
  },
  {
    path: 'register',
    component: Register,
    title: 'Register',
  },
  {
    path: 'profile',
    component: Profile,
    title: 'Profile',
  },
  {
    path: 'recipe/:id',
    component: ViewRecipe,
    title: 'View Recipe',
  },
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: '**',
    component: Pnf,
    title: 'Page Not Found',
  },
];
