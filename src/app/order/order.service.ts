import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order,model';

@Injectable()
export class OrderService {
  readonly url = 'api/order';

  constructor(private http: HttpClient) { }

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }
  public getOrder(id: number): Observable<Order> {
    const url = this.url + '/' + id;
    return this.http.get<Order>(url);
  }
  public addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.url, order)
  }
  public updateOrder(order: Order) {
    return this.http.put(this.url, order)
  }
  public deleteOrder(id: number) {
    const url = this.url + '/' + id;
    return this.http.delete(url);
  }
}
