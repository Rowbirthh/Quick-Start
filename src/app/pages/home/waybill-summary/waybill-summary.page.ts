import { Component } from '@angular/core';

@Component({
  selector: 'app-waybill-summary',
  templateUrl: './waybill-summary.page.html',
  styleUrls: ['./waybill-summary.page.scss'],
  standalone: false,
})
export class WaybillSummaryPage {
  waybillForm = {
    dateFrom: '',
    dateTo: '',
    driver: '',
    plateNumber: '',
    deliveredBy: '',
    receivedBy: ''
  };

  items = [
    { billNo: '', description: '', grossWeight: '', additionalNotes: '' }
  ];

  get totalGrossWeight(): number {
    return this.items.reduce((sum, item) => sum + (parseFloat(item.grossWeight) || 0), 0);
  }

  addRow() {
    this.items.push({ billNo: '', description: '', grossWeight: '', additionalNotes: '' });
  }

  removeRow(index: number) {
    if (this.items.length > 1) {
      this.items.splice(index, 1);
    }
  }
}
