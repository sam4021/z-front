import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../services/products/products.service';
import { UtilsService } from '../../../services/utils/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../core/models/product.model';
import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  imageUrl= '';
  productsSub: Subscription;
  products: Product[];
  loading: boolean;
  error: boolean;

  constructor(private title: Title,
  private meta: Meta,
  public utils: UtilsService,
  private productService: ProductsService) {
    // this.meta.addTag({ name: 'description', content: '' });
    // this.meta.addTag({ name: 'keywords', content: '' }); 
  }

  ngOnInit() {
    this.imageUrl = IMG_URL;
    this._getProducts();
  }

  private _getProducts() {
    this.loading = true;
    // Get future, public events
    this.productsSub = this.productService
      .getProductOffers$()
      .subscribe(
        res => {
          this.products = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

}
