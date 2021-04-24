import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public selectMenu = 'Search'; // defult selectMenu

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  routeToSearch(): void {
    this.selectMenu = 'Search';
    this.router.navigate(['/homecontent']);
  }

  routeToBookshelves(): void {
    this.selectMenu = 'Bookshelves';
    this.router.navigate(['/homecontent']);
  }

  clickLogout(): void {
  this.authService.logout();
  }
}
