import { InMemoryDbService } from "angular-in-memory-web-api";
import { Order } from "./order/order,model";

export class InMemoryWebApiService implements InMemoryDbService {

  createDb() {
    const order: Order[] = [
      {
        id: 123, info: {
          name: 'sonal', email: '8511459@gmail.com', password: '123', address: 'valsad'
          , pincode: 461415, city: 'valsad', state: 'gujarat'
        }, customer: {
          customerId: 12, orderId: 12

        }
      }
    ]
    return { order }
  }

}
