import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ProductsService } from "../../../services/products/products.service";
import { Category } from "../../../core/models/category.model";
import { Subscription } from 'rxjs/Subscription';
import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;
import { CheckoutService } from "../../../services/checkout/checkout.service";
import { Shipping } from "../../../core/models/shipping.model";
import { Tag } from "../../../core/models/tag.model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mobile_view:boolean = false;
  desktop_view:boolean = false;
  category: any[];
  prodSub: Subscription;
   shippingSub:Subscription;
   shipping: Shipping[];

   constructor(@Inject(PLATFORM_ID) private platformId: Object,private checkoutService: CheckoutService,private productService: ProductsService) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.screen.width >= 320 && window.screen.width <= 480) { // 768px portrait
        this.mobile_view = true;
        this.desktop_view = false;
      } else{
        this.mobile_view = false;
        this.desktop_view = true;
      }
    }
    if (isPlatformServer(this.platformId)) {
      this.mobile_view = false;
      this.desktop_view = true;
    } 
      this._getProd();
      this._getBrand();
    }
    private _getProd() {
      this.prodSub = this.productService
      .getAllProducts$()
      .subscribe( 
        res => {
          this.productService.setProductsData(res);
        },
        err => {
          console.error(err);
        }
      );
  
    }

    private _getBrand() {
      this.prodSub = this.productService
      .getAllBrands$()
      .subscribe(
        res => {
          this.productService.setBrandData(res)
        },
        err => {
          console.error(err);
        }
      );
  
    }
    
    private _getShipping() {
      this.shippingSub = this.checkoutService
        .getShippingLocation$()
        .subscribe(
          res => {
            this.shipping = res;
          },
          err => {
            console.error(err);
          }
        );
    }

    ngOnDestroy() {
      if(this.shippingSub){
        this.shippingSub.unsubscribe();
      }

    }

}
