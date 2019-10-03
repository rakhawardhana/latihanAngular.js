import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { ProductsService } from '../../core/products.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  //name = 'rakha'

  products
  constructor(public productsService: ProductsService) { }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    console.log('X');
     window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {

    this.products = this.productsService.products
  }

  
}
