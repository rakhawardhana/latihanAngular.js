import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  products;
  
  constructor(private route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit() {

     this.route.paramMap.subscribe(params => {
      this.products = this.productsService.products[+params.get('productId')];
  });
  }

}
