import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductsService } from "../../../services/products/products.service";
import { Category } from "../../../core/models/category.model";
import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css']
})
export class HomeCategoryComponent implements OnInit, OnDestroy {
  categorySub: Subscription;
  homeSub: Subscription;
  category : any;
  home: any;
  loading: boolean;
  error: boolean;
  imageUrl= '';

  constructor(private productService: ProductsService) {    
    let checkData;
    this.categorySub = this.productService.homeData$.subscribe(
      data => {
        checkData = data
        if (checkData != null) {
          this.category = checkData.category;           
          this.loading = false;           
        }
                       
      }
    )
   }

  ngOnInit() {
    this.imageUrl = IMG_URL;
    this.loading = false;
    //this._getCategoryProducts();
  }

  private _getCategoryProducts() {
    this.loading = true;
    // Get future, public events
      this.productService.homeData$
    //  this.productService
    //   .getHomeCategory$()
      .subscribe(
        res => {
          this.home = res;
          this.loading = false;
          console.log(res);
          
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  ngOnDestroy(){
    if (this.categorySub) {
      this.categorySub.unsubscribe();
    }
  }

}
