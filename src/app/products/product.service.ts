import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct, IProductForm } from './product';
import { BASE_URL } from '../setting';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ProductService {

  // products: IProduct[] = [

  //   {
  //     "productId": 1,
  //     "productName": "Leaf Rake",
  //     "productCode": "GDN-0011",
  //     "releaseDate": "March 19, 2021",
  //     "description": "Leaf rake with 48-inch wooden handle.",
  //     "price": 19.95,
  //     "starRating": 3.2,
  //     "imageUrl": "assets/images/leaf_rake.png"
  //   },
  //   {
  //     "productId": 2,
  //     "productName": "Garden Cart",
  //     "productCode": "GDN-0023",
  //     "releaseDate": "March 18, 2021",
  //     "description": "15 gallon capacity rolling garden cart",
  //     "price": 32.99,
  //     "starRating": 4.2,
  //     "imageUrl": "assets/images/garden_cart.png"
  //   },
  //   {
  //     "productId": 5,
  //     "productName": "Hammer",
  //     "productCode": "TBX-0048",
  //     "releaseDate": "May 21, 2021",
  //     "description": "Curved claw steel hammer",
  //     "price": 8.9,
  //     "starRating": 4.8,
  //     "imageUrl": "assets/images/hammer.png"
  //   },
  //   {
  //     "productId": 8,
  //     "productName": "Saw",
  //     "productCode": "TBX-0022",
  //     "releaseDate": "May 15, 2021",
  //     "description": "15-inch steel blade hand saw",
  //     "price": 11.55,
  //     "starRating": 3.7,
  //     "imageUrl": "assets/images/saw.png"
  //   },
  //   {
  //     "productId": 10,
  //     "productName": "Video Game Controller",
  //     "productCode": "GMG-0042",
  //     "releaseDate": "October 15, 2020",
  //     "description": "Standard two-button video game controller",
  //     "price": 35.95,
  //     "starRating": 4.6,
  //     "imageUrl": "assets/images/xbox-controller.png"
  //   }
  // ];

  constructor(private http: HttpClient) { }

  getAllproducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(BASE_URL + '/products');
  }

  get(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${BASE_URL}` + `/products/${id}`);
  }

  addProduct(product: IProductForm): Observable<Object> {
    return this.http.post(BASE_URL + '/products', product)
  }
}
