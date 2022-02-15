import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajaDetallePageRoutingModule } from './caja-detalle-routing.module';

import { CajaDetallePage } from './caja-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajaDetallePageRoutingModule
  ],
  declarations: [CajaDetallePage]
})
export class CajaDetallePageModule {}
