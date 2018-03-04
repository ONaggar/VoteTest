import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent }      from './sign-in/sign-in.component';
import { HomeComponent }      from './home/home.component';
import { AdminComponent }      from './admin/admin.component';
import { SubjectsComponent } from './subjects/subjects.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent},
    { path: 'home', component: HomeComponent },
    { path: 'SignIn', component: SignInComponent },
    { path: 'Subjects', component: SubjectsComponent}
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule
  ]
})
export class AppRoutingModule { }
