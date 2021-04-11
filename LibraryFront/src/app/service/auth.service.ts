import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RequestLoginModel, ResponseLoginModel } from '../model/UsersModel.model';
import { Global } from '../Global/Global';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    get isLoggedIn(): any {
        return this.loggedIn.asObservable();
    }

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    login(Username: string, Password: string): void {
        // set format "body" with type:RequestLogin Model.
        const body = new RequestLoginModel({
            username: Username,
            password: Password
        });

        this.http.post(environment.apiUrl + '/Users/Login ', body).subscribe(
            (response: ResponseLoginModel) => {
                if (response.state) { // sucess
                    Global._USERID = response.userId;
                    this.loggedIn.next(true);
                    this.router.navigate(['/homepage']);
                    alert(response.message);
                } else {
                    alert(response.message);
                }
            },
            (error) => {
                console.log(error);
                alert('Response Error');
            }
        );
    }

    logout(): void {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}
