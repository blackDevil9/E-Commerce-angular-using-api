import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'ng8-breadcrumb';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct = Object.assign({});

  constructor(private service: ShopService, 
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    )
    {
      this.breadcrumbService.store('id', '');
    }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.service.getProduct(this.route.snapshot.params['id']).subscribe(
      (product) => {
        this.product = product;
        this.breadcrumbService.store('id', product.name);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
