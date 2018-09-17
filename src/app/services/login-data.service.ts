import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {Pastas} from '../models/pastas.model';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  isLogged: boolean;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.isLogged = false;
  }

  getIsLogged(): boolean {
    return this.isLogged;
  }

  getAdminPermission(): Observable<User[]> {
    return this.httpClient.get<User[]>(`http://localhost:3000/users`);
  }

  loginVerification(user: User, adminUser: User[]) {
    for (let i = 0; i < adminUser.length; i++) {
      if (adminUser[i].password === user.password) {
        this.isLogged = true;
        this.router.navigate(['/']);
      }
    }
    if (this.isLogged === false) {
      this.router.navigate(['/login-fail']);
    }
  }

  logout() {
    this.isLogged = false;
    this.router.navigate(['/']);
  }
}



