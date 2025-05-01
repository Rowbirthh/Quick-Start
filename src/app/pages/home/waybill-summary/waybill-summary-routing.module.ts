import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaybillSummaryPage } from './waybill-summary.page';

const routes: Routes = [
  {
    path: '',
    component: WaybillSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaybillSummaryPageRoutingModule {}
