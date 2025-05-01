import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  createOrder() {
    this.router.navigate(['/tabs/home/create-order']);
  }

  openPlatformOrders() {
    this.router.navigate(['/tabs/home/platform-orders']);
  }

  openReports() {
    this.router.navigate(['/tabs/home/reports']);
  }

  openWaybillSummary() {
    this.router.navigate(['/tabs/home/waybill-summary']);
  }
}
