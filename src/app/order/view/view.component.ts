/**
 * @author Sonal  Prajapati
 * @description this  class represent the view  order managment
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../order,model';
import { ISubscription } from 'rxjs/Subscription';
// -------------//
import { OrderService } from '../order.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
  public orders: Order[];
  private subscription: ISubscription;
  constructor(private orderService: OrderService) { }
  /**
   * Initilize the page
   */
  ngOnInit() {
    this.getorder();
  }
  /**
   * @description get order all the order
   */
  public getorder(): void {
    this.subscription = this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
      console.log(this.orders);
    });
  }
  /**
   * @param id represent particular id of the user
   * @description delete th particular record of the user
   */
  public onDelete(id: number): void {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.getorder();
    });
  }
  /**
   * destroy the component  when user goto the next route
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
