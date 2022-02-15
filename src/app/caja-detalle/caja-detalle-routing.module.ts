import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajaDetallePage } from './caja-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CajaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajaDetallePageRoutingModule {}
