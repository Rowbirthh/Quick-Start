import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false,
})
export class SignupPage {
  username = '';
  password = '';

  constructor(private router: Router) {}

  signup(): void {
    if (!this.username.trim() || !this.password.trim()) {
      alert('Both username and password are required.');
      return;
    }

    const user = { username: this.username.trim(), password: this.password };
    localStorage.setItem('user', JSON.stringify(user));
    
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }
}
