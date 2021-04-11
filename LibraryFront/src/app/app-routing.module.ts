import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
// import { AuthLayoutComponent } from './layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
{
  path: '',
  component: AppComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: MemberComponent
    }
  ]
},
{
  path: '',
  component: AppComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'homepage',
      component: HomepageComponent
    }
  ]
},
// { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
