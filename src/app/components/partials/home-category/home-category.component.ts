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
  allProducts: any;
  allBrand: any;
  constructor(private productService: ProductsService) {    
    let checkData,br,pr;
    this.productService.productsData$.subscribe(data => {
        this.allProducts = data
    });
    this.productService.brandData$.subscribe(data => {this.allBrand = data});
    this.categorySub = this.productService.homeData$.subscribe(
      data => {
        checkData = data
        if (checkData != null) {
          this.category = checkData.category;      
          if (Array.isArray(this.allProducts)) {
            // this.category.forEach(c => {
            //   this.allProducts.forEach(p => {
            //     if(c.category.id == p.category){
            //       console.log(c.category);
            //     }
            //   console.log(p);
            //   });  
            // });
            console.log("true");
          } else{
            console.log("false");
          }
          this.loading = false;           
        }
                       
      }
    );
    
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
