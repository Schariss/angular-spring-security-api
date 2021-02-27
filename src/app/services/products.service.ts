import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  host: string = 'http://localhost:8080';

  constructor(private http:HttpClient,private authenticationService : AuthenticationService) {
  }

  getProducts(){
    return this.http
      .get<any[]>(this.host + '/produits');
  }
}
