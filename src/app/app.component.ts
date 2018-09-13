import {Component} from '@angular/core';
import {LoginDataService} from './login-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizzeria';

  constructor(
    private loginService: LoginDataService
  ) {
  }

  isAdminLogged(): boolean {
    return this.loginService.getIsLogged();
  }

  logoutAdmin(): void {
    this.loginService.logout();
  }
}
