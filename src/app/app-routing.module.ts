import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { AddProdComponent } from './components/products/add-prod/add-prod.component';
import { DisplayComponent } from './components/products/display/display.component';

const routes: Routes = [
  { path: 'auth/register', component: RegisterComponent },
	{ path: 'auth/login', component: LoginComponent  },
	{ path: 'produits', component: DisplayComponent },
	{ path: 'produits/new', component: AddProdComponent },
	// { path: 'users', canActivate: [AuthGard], component: UserListComponent },
	// { path: 'users/new', component: UserFormComponent },
	// { path: 'users/view/:id', component: SingleUserComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  // { path: 'error', component: AddProdComponent },
	//a changer Creer 404 component
	// { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
