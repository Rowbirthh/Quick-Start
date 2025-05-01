import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformOrdersPage } from './platform-orders.page';

const routes: Routes = [
  {
    path: '',
    component: PlatformOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformOrdersPageRoutingModule {}
