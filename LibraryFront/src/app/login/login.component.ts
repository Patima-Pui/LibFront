import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isUsername = '';
  public isPassword = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  clickRegister(): void{
    this.router.navigate(['/register']);
  }

  clickLogin(): void{
    this.authService.login(this.isUsername, this.isPassword);
  }
}
