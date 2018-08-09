import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartItem } from "../../../core/models/cart-item.model";
import { Product } from "../../../core/models/product.model";
import { ShoppingCart } from "../../../core/models/cart.model";
import { ProductsService } from "../../../services/products/products.service";
import { CartService } from "../../../services/cart/cart.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { StorageService } from "../../../services/storage/storage.service";
import { CheckoutService } from "../../../services/checkout/checkout.service";

import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;
const CART_KEY = ENV.BASE_TOKEN;

interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private storage: Storage;
  public cart: Observable<ShoppingCart>;
  public cartV: any;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;
  public itemTotal: number;
  public qtyTest: any;
  private products: any;
  private products1: any;
  private cartSubscription: Subscription;
  private shippingSub: Subscription;
  public cookieValue = "Value";
  imageUrl= '';
  
  constructor(private storageService: StorageService,
    private productsService: ProductsService,
    private shoppingCartService: CartService,
    private checkoutService: CheckoutService) {
    this.storage = this.storageService.get();

  }

ngOnInit() {
  this.Cart();
  this._getShipping();
  this.imageUrl = IMG_URL;
}
public Cart(): void {
  this.cart = this.shoppingCartService.get();
  this.cartSubscription = this.cart.subscribe((cart) => {
  //this.cartV = cart;
  this.itemCount = cart.items.length;
  this.cartV = cart.items;
  this.itemTotal = cart.itemsTotal;
  let prodArr=[];
  this.productsService.productsData$
    .subscribe(
      data => {
        this.products1 = data
        this.cartV.forEach(cart => {
          this.products1.forEach(prod => {
            if(cart.productId == prod._id){
              prodArr.push(prod);
            }
          });
        });
      this.products = prodArr
    })

  });
}

public emptyCart(): void {
  this.shoppingCartService.empty();
  this.Cart();
}

public qtyUp(id: string){
  this.qtyTest = this.shoppingCartService.updateQty(id ,1 );
  this.Cart();
}

public qtyDown(id: string){
  this.shoppingCartService.updateQty(id ,-1 );
  this.Cart();
}

public remove(id: string){
  this.qtyTest = this.shoppingCartService.removeCart(id);
  this.Cart();
}

private _getShipping() {
  this.shippingSub = this.checkoutService
    .getShipping$()
      .subscribe(
        res => {
          this.checkoutService.setShippingData(res);
        },
        err => {
          console.error(err);
        }
      );
}

ngOnDestroy(){
  if(this.cartSubscription){
    this.cartSubscription.unsubscribe();
  }
  if(this.shippingSub){
    this.shippingSub.unsubscribe();
  }
}

}
