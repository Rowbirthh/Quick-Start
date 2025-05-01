import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  username = '';
  password = '';
  loading = false;

  constructor(private router: Router) {}

  login(): void {
    this.loading = true;
  
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  
    setTimeout(() => {
      this.loading = false;
  
      if (
        storedUser &&
        storedUser.username === this.username &&
        storedUser.password === this.password
      ) {
        this.router.navigate(['/me']);
      } else {
        alert('Invalid username or password');
      }
    }, 500);
  }
}
