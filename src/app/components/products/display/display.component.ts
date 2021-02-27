import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  products: any;
  message: any;
  User : any;

  constructor(public productService: ProductsService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        (response: any) => {
          this.products = response['_embedded'].produits;
          console.log(this.products);
        },
        (error) => {
          console.log('Error here: ' + error);
        }
      );
  }

}
