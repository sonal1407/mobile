/**
 * @author:sonal Prajapati
 */

import { Component, OnInit } from "@angular/core";

import { FormBuilder } from "@angular/forms";

import { Validators } from "@angular/forms";
@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {

  /**
   * use for submit button disable and enable when the  form is valid
   */
  public submitedData: boolean;

  constructor(private fb: FormBuilder) {
    this.submitedData = false;
  }
 

  /**
   * reactiveForm which is use for formName which return the status of the form
   */
  reactiveForm = this.fb.group({
    /**
     * forms control with validation
     */
    fromStation: ["", Validators.required],
    toStation: ["", Validators.required],
    date: ["", Validators.required],
    trainNo: ["", Validators.required],
    noOfTickets: ["", Validators.required],
    typeOfTicket: ["", Validators.required]
  });

  ngOnInit() {}
  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
