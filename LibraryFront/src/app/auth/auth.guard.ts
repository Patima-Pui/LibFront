import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isLoggedIn.pipe(
          take(1),
          map((isLoggedIn: boolean) => {
            if (!isLoggedIn) {
                // not logged in so redirect to login page.
                this.router.navigate(['/login']);
                return false;
            }
            // logged in so return true.
            return true;
          })
        );
      }
}
