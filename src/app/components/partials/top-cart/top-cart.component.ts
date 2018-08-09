import { Component, OnInit, PLATFORM_ID, Inject,OnDestroy } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from "../../../core/models/product.model";
import { ShoppingCart } from "../../../core/models/cart.model";
import { ProductsService } from "../../../services/products/products.service";
import { CartService } from "../../../services/cart/cart.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { StorageService } from "../../../services/storage/storage.service";
import { ENV } from '../../../core/env.config';
const CART_KEY = ENV.BASE_TOKEN;

@Component({
  selector: 'app-top-cart',
  templateUrl: './top-cart.component.html',
  styleUrls: ['./top-cart.component.css']
})
export class TopCartComponent implements OnInit {
  storage: Storage;
  products: Observable<Product[]>;
  public cart: Observable<ShoppingCart>;
  itemCount: number;
  itemTotal: number;
  cartSubscription: Subscription;
  mobile_view:boolean = false;
  desktop_view:boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private storageService: StorageService,
  private productsService: ProductsService,
  private cartService: CartService,
  private router: Router) { }

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
    this.cart = this.cartService.get();
      this.cartSubscription = this.cart.subscribe((cart) => {
        this.itemCount = cart.items.length;
        this.itemTotal = cart.itemsTotal;
      });
  }

  onSubmit(): void {
    this.router.navigate(['/cart']);
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
