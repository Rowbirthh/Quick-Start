import { Component } from '@angular/core';

@Component({
  selector: 'app-platform-orders',
  templateUrl: './platform-orders.page.html',
  styleUrls: ['./platform-orders.page.scss'],
  standalone: false,
})
export class PlatformOrdersPage {
  rows: any[] = [
    { productNumber: '', productImage: null, quantity: '', amount: '' }
  ];

  addRow() {
    this.rows.push({ productNumber: '', productImage: null, quantity: '', amount: '' });
  }

  handleFileInput(event: any, rowIndex: number) {
    const file = event.target.files[0];
    if (file) {
      this.rows[rowIndex].productImage = file;
    }
  }
}
