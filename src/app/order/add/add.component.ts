import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// ---------------------------//
import { OrderService } from '../order.service';
import { Order } from '../order,model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;
  form: FormGroup;
  orders: Order[];
  constructor(private fb: FormBuilder, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.loadForm();
  }
  /**
   * method define the form;
   */
  loadForm() {
    this.form = this.fb.group({

      info: this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        address: ['', Validators.required],
        pincode: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      }),
      customer: this.fb.group({
        customerId: ['', Validators.required],
        orderId: ['', Validators.required]
      })
    });
  }
  /**
   * @param formData it has the value of the form  which store in the database;
   * @description  add the value of the user into the database.
   */
  public add(formData) {
    this.subscription = this.orderService.addOrder(formData).subscribe(
      () => {
        this.router.navigate(['/order/view']);

      },

      (err) => {
        console.log('error', err);

      });
  }
  /**
 * destroy the component  when user goto the next route
 */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
