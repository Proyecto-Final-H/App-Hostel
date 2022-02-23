import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuespedesPage } from './huespedes.page';

const routes: Routes = [
  {
    path: '',
    component: HuespedesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuespedesPageRoutingModule {}
