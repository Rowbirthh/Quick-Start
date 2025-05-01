import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaybillSummaryPageRoutingModule } from './waybill-summary-routing.module';

import { WaybillSummaryPage } from './waybill-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaybillSummaryPageRoutingModule
  ],
  declarations: [WaybillSummaryPage]
})
export class WaybillSummaryPageModule {}
