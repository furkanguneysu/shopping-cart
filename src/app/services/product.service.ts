import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { productsUrl } from 'src/app/config/api';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProducts(): Observable<Product[]> {
    //TODO: Populate from API and return observable
    return this.http.get<Product[]>(productsUrl);
  }
}
