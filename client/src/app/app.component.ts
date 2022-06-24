import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = "Black D3vil's World";
  products : IProduct[] = [];
 
  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/Products?pageSize=50').subscribe(
      (response: any) =>
      {
        this.products = response.data;
        console.log(response)
      }
    ), (error: any) => {
      console.log(error);
    };
  }
}