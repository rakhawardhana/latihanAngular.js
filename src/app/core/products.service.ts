import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  constructor(public http: HttpClient) { }

  products = [
    {
      name: 'Mac Book',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      name: 'Phone Mini',
      price: 799,
      description: 'A great phone with one of the best cameras'
    },
    {
      name: 'Phone Standard',
      price: 799,
      description: ''
    }
  ];



}
