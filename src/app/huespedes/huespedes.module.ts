import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuespedesPageRoutingModule } from './huespedes-routing.module';

import { HuespedesPage } from './huespedes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuespedesPageRoutingModule
  ],
  declarations: [HuespedesPage]
})
export class HuespedesPageModule {}
