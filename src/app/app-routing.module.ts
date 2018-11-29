import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * @description route to the next url
 */
const routes: Routes = [
  { path: 'order', loadChildren: './order/order.module#OrderModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
