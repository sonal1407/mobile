export class Order {
id:number;
info:Information;
customer:Customer;
}

export class Information{
    name:string;
    email:string;
    password:string;
    address:string;
    pincode:number;
    city:string;
    state:string;
}
export class Customer{
    customerId:number;
    orderId:number;
}