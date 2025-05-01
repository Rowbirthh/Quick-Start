import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
 
  {
    path: 'platform-orders',
    loadChildren: () => import('./platform-orders/platform-orders.module').then( m => m.PlatformOrdersPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'waybill-summary',
    loadChildren: () => import('./waybill-summary/waybill-summary.module').then( m => m.WaybillSummaryPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
