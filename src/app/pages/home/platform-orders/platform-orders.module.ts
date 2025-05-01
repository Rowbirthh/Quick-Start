import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatformOrdersPageRoutingModule } from './platform-orders-routing.module';

import { PlatformOrdersPage } from './platform-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatformOrdersPageRoutingModule
  ],
  declarations: [PlatformOrdersPage]
})
export class PlatformOrdersPageModule {}
