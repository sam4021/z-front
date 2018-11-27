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
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  imageUrl= '';
  productsSub: Subscription;
  products: Product[];
  loading: boolean;
  error: boolean;
  constructor(private title: Title,
    private meta: Meta,
    public utils: UtilsService,
    private productService: ProductsService) { }

  ngOnInit() {
    this.imageUrl = IMG_URL;
    this._getProducts();
  }

  private _getProducts() {
    this.loading = true;
    let checkProds: any;
    this.productsSub = this.productService.productsData$
      .subscribe(
        data => {
          checkProds = data;
          if(checkProds != null){
            let prodArr=[];
            let cArr;
              checkProds.forEach(prod=>{
                if(prod.stock == 2){
                  prodArr.push(prod);
                }
              })              
              this.products = prodArr;
              this.loading = false;
          }
      })
    // Get future, public events
    // this.productsSub = this.productService
    //   .getProductOffers$()
    //   .subscribe(
    //     res => {
    //       this.products = res;
    //       this.loading = false;
    //     },
    //     err => {
    //       console.error(err);
    //       this.loading = false;
    //       this.error = true;
    //     }
    //   );
  }

}
