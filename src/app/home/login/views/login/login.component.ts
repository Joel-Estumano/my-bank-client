import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: {
    email: string,
    password: string
  }

  constructor(private readonly loginService: LoginService,
    private readonly router: Router) {
    this.login = {
      email: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  async send() {
    try {
      const result = await this.loginService.login(this.login)
      this.router.navigate(['/'])
    } catch (error) {
      console.error(error)
    }
  }

}
