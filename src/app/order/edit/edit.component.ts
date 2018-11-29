import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order,model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editOrderForm: FormGroup;
  editOrderData: Order;
  constructor(private orderService: OrderService, private fb: FormBuilder,
    private route:Router,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.loadForm();
    this.editOrders();
  }
  editOrders() {
    const id = +this.router.snapshot.paramMap.get('id')
    this.orderService.getOrder(id).subscribe((data) => {
      this.loadData(data);
    })
  }
  loadForm() {
    this.editOrderForm = this.fb.group({
      id: ['', Validators.required],
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
    })
  }
  loadData(order: Order) {
    this.editOrderForm.patchValue({
      id: order.id,
      info: {
        name: order.info.name,
        email: order.info.email,
        password: order.info.password,
        address: order.info.address,
        pincode: order.info.pincode,
        city: order.info.city,
        state: order.info.state
      },
      customer: {
        customerId: order.customer.customerId,
        orderId: order.customer.orderId
      }
    })
  }
  edit(data){
    this.orderService.updateOrder(data).subscribe(()=>{
      this.route.navigate(['/order/view'])
    });
  }
}
