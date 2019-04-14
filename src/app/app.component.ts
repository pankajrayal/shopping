import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'shopping';
  results = [];
  products = [];
  cart = [];
  //http://localhost:61977/api/Products  

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Product[]>("http://localhost:61977/api/Products").subscribe(data => {
      console.log(data);
      // this.results = data;
      for (let i in data) this.results.push(data[i]);
    });
  }

  addToCart(item: Product) {
    console.log(item);
    this.cart.push(item);
  }


}

interface Product {
  name: string;
  category: string;
  price: number;
}
