import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MemberComponent } from './member/member.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { AuthLayoutComponent } from './layout/auth-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberComponent,
    HomepageComponent,
    // AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [AuthService, AuthGuard, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
