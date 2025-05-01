import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: false,
})
export class ReportsPage {
  reportForm = {
    date: '',
    recipientSurname: '',
    recipientFirstName: '',
    referenceNumber: '',
    deliveryDate: '',
    reportText: '',
  };

  constructor(private alertCtrl: AlertController) {}

  async submitReport() {
    if (
      !this.reportForm.date ||
      !this.reportForm.recipientSurname ||
      !this.reportForm.recipientFirstName ||
      !this.reportForm.referenceNumber ||
      !this.reportForm.deliveryDate ||
      !this.reportForm.reportText
    ) {
      const alert = await this.alertCtrl.create({
        header: 'Incomplete',
        message: 'Please fill in all fields before submitting.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    console.log('Submitted Report:', this.reportForm);

    const alert = await this.alertCtrl.create({
      header: 'Submitted',
      message: 'Your report has been submitted successfully.',
      buttons: ['OK']
    });
    await alert.present();

    // Optionally clear form
    this.reportForm = {
      date: '',
      recipientSurname: '',
      recipientFirstName: '',
      referenceNumber: '',
      deliveryDate: '',
      reportText: '',
    };
  }
}
