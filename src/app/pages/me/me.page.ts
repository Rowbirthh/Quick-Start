import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
  standalone: false, // <-- ensure this line is present
})
export class MePage implements OnInit {
  profileData: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.username) {
      this.profileData = user;
    } else {
      console.warn('No user profile found');
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
