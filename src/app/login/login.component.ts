import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginDataService} from '../login-data.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  user: User;
  adminUser: User [] = [];

  private readonly destroy$ = new Subject();

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(readonly loginService: LoginDataService) {
    this.user = <User>{};
  }

  ngOnInit() {
    this.loginService.getAdminPermission().subscribe(permission => this.adminUser = permission);
  }

  onSubmit() {
    this.user.username = this.loginForm.get('username').value;
    this.user.password = this.loginForm.get('password').value;
    this.loginService.loginVerification(this.user, this.adminUser);
    console.log(this.loginService.getIsLogged());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
