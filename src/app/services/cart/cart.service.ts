import { Injectable } from '@angular/core';

import { StorageService } from "../../services/storage/storage.service";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { CartItem } from "../../core/models/cart-item.model";
import { Product } from "../../core/models/product.model";
import { ShoppingCart } from "../../core/models/cart.model";
import { ProductsService } from "../../services/products/products.service";
import {BehaviorSubject, Subject, Subscriber} from 'rxjs';
import { ENV } from '../../core/env.config';

import { environment } from '../../../environments/environment';
const CART_KEY = ENV.BASE_TOKEN;
@Injectable()
export class CartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private products: Product[];
  cookieValue = 'UNKNOWN';
  lcart: Observable<ShoppingCart>;

  public constructor(private storageService: StorageService,
                     private productService: ProductsService) {
     this.storage = this.storageService.get();
     ///this.productService.getAllProducts$().subscribe((products) => this.products = products);
    //  this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
    //    this.subscribers.push(observer);
    //    observer.next(this.retrieve());
    //    return () => {
    //      this.subscribers = this.subscribers.filter((obs) => obs !== observer);
    //    };
    //  });
    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
   }

   public get(): Observable<ShoppingCart>{
     return this.subscriptionObservable;
   }

  public addItem(prodId: string,price: number): void {
    let totals=0;
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === prodId);
    if (item === undefined) {
      let prod = this.getProdInfoId(prodId);
      let item = new CartItem();
      item.productId = prodId;
      item.quantity = 1;
      item.price = price;
      //item.price = this.products.find((p) => p._id === item.productId).price;
      cart.items.push(item);
      totals = item.price * item.quantity;
    }
    let Newtotals= cart.itemsTotal + totals;
    cart.itemsTotal= Newtotals;

    this.save(cart);
    this.calculateCart(cart);
    this.dispatch(cart);
  }

  public updateQty(prodId: string, qty: number){
    let totals=0;
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === prodId);

     if (item) {
       var getIndex = cart.items.indexOf(item);

       var oldQty = item.quantity
       var newQty = oldQty + qty;
       let Newtotals;
       if(qty ==-1){
         totals = item.price * newQty;
         Newtotals= cart.itemsTotal - totals;
       } else{
         totals = item.price * newQty;
         Newtotals= cart.itemsTotal + totals;
       }

      cart.items[getIndex].quantity = newQty;
      cart.itemsTotal= Newtotals;

       this.save(cart);
      // this.calculateCart(cart);
      this.dispatch(cart);
     }

  }

  public removeCart(prodId:  string){
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.productId === prodId);

     if (item) {
       var getIndex = cart.items.indexOf(item);

       if (getIndex > -1) {
         let oldTotals= cart.itemsTotal;
         var totals = item.price * item.quantity;
         let newTotals = oldTotals - totals;
         cart.itemsTotal= newTotals;
           cart.items.splice(getIndex, 1);
           this.save(cart);
           this.dispatch(cart);
           return cart;
        }
      }
  }

  private save(cart: ShoppingCart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
            // we want all subscribers to get the update even if one errors.
          }
        });
  }

  private calculateCart(cart: ShoppingCart): void {
    cart.itemsTotal = cart.items
                          .map((item) => item.quantity * this.products.find((p) => p._id === item.productId).price)
                          .reduce((previous, current) => previous + current, 0);
  }

  public getCartCount(){
    return this.subscriptionObservable;
  }

  public getProdInfoId(Prodid: string){
    this.productService.getProductInfoId$(Prodid).subscribe(
      res => this.products = res
    );
    return this.products;
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  }
