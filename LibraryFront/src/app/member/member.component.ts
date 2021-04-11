import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ResponseModel, UserModel } from '../model/UsersModel.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  public isUsername: string;
  public isPassword: string;
  public isRePassword: string;
  public duplicatePassword = true;
  public isName: string;
  public isSurname: string;
  public isBirthday: Date;
  public isEmail: string;
  public formGroup: FormGroup;

  constructor(
    private router: Router, // transmit
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void{
    this.formGroup = new FormGroup({
      isUsername: new FormControl(''),
      isPassword: new FormControl(''),
      isRePassword: new FormControl(''),
      isName: new FormControl(''),
      isSurname: new FormControl(''),
      isBirthday: new FormControl(''),
      isEmail: new FormControl('', [Validators.email]),

    });
  }

  clickSave(): void {
    if (!this.duplicatePassword){
      alert('Please check validate password.');
      return;
    }

    const formbody = new UserModel({
      username: this.formGroup.value.isUsername,
      password: this.formGroup.value.isPassword,
      name: this.formGroup.value.isName,
      surname: this.formGroup.value.isSurname,
      birthday: this.formGroup.value.isBirthday,
      email: this.formGroup.value.isEmail,
      upsertName: this.formGroup.value.isUsername,
    });

    this.http.post(environment.apiUrl + '/Users/Register', formbody).subscribe(
      (response: ResponseModel) => {
        if (response.state) {
          alert(response.message); // true=Register success
          this.router.navigate(['/login']);
        } else {
          alert(response.message); // Register fail
        }
      },
      (error) => {
        console.log(error);
        alert('Response fail');
      }
    );
  }

  checkDuplicatePassword(): void {
    if (this.formGroup.value.isPassword !== this.formGroup.value.isRePassword) {
      this.duplicatePassword = false;
    } else {
      this.duplicatePassword = true;
    }
  }

  clickCancel(): void {
    this.router.navigate(['/login']);
  }
}

