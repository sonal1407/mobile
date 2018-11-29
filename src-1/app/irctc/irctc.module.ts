import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingComponent } from "./booking/booking.component";
import {FormsModule}from'@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [BookingComponent],
  exports: [BookingComponent]
})
export class IrctcModule {}
