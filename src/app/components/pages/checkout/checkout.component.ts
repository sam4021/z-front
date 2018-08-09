import { Component, OnInit } from '@angular/core';
import { StorageService } from "../../../services/storage/storage.service";
import { CartItem } from "../../../core/models/cart-item.model";
import { Shipping } from "../../../core/models/shipping.model";
import { Product } from "../../../core/models/product.model";
import { Message } from "../../../core/models/message.model";
import { ShoppingCart } from "../../../core/models/cart.model";
import { ProductsService } from "../../../services/products/products.service";
import { CartService } from "../../../services/cart/cart.service";
import { CheckoutService } from "../../../services/checkout/checkout.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms'
import { ENV } from '../../../core/env.config';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';

const Order_Message = ENV.BASE_SUCCESS;
interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private storage: Storage;
  public cartV: any;
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  shippingSub:Subscription;
  shipping: Shipping[];
  Mainshipping: Shipping[];
  public itemCount: number;
  public itemTotal: number;

  private products: Product[];
  private cartSubscription: Subscription;

  selectedDel: string = '';
  private courier: any;
  public courierFee: Shipping;
  private courierDiv: any;

  constructor(private router: Router ,
    private storageService: StorageService,
    private http: HttpClient,
    private productsService: ProductsService,
    private checkoutService: CheckoutService,
    private shoppingCartService: CartService,
    private fb: FormBuilder) { 
      this.storage = this.storageService.get();
      this.cart = this.shoppingCartService.get();
      this.cartSubscription = this.cart.subscribe((cart) => {
      this.cartV = cart;
      this.itemCount = cart.items.length;
      this.cartV = cart.items;
      this.itemTotal = cart.itemsTotal;
    });
    }

    rForm = new FormGroup ({
      first_name: new FormControl('',Validators.required),
      last_name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      delivery_location: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
    //  shipping: new FormControl('',Validators.required),
  })
    ngOnInit() {

    }
  
    private _getShipping() {
      this.shippingSub = this.checkoutService
        .getShipping$()
        .subscribe(
          res => {
            this.shipping = res;
            this.Mainshipping = res;
          },
          err => {
            console.error(err);
          }
        );
    }
  
    _getShippingCost(event: any) {
      this.selectedDel = event.target.value;
      let shipArr = [];
      let ship= this.Mainshipping;
      ship.forEach(prod => {
        shipArr.push(prod.id);
      });
      this.checkoutService
        .getShippingAmount$(this.selectedDel)
        .subscribe(
          res => {
            let fee = res
            this.courierFee = fee
          },
          err => {
            console.error(err);
          }
        );
    }
  
    addPost() {
      console.log(this.cartV);
      let first_name = this.rForm.value.first_name;
      let last_name = this.rForm.value.last_name;
      let phone = this.rForm.value.phone;
      let email = this.rForm.value.email;
      let delivery_location = this.rForm.value.delivery_location;
      let shipping = '5ab8a2795ac33b4bd89b19f9';
      let cart = this.cartV;
  
      this.http.post<Message>(`${ENV.BASE_API}order`,
         {  first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
             cart: cart,
             shipping: shipping,
           delivery_location: delivery_location})
         .subscribe((data) => {
           if (data.message=='Success') {
               this.storage.setItem(Order_Message, 'True');
               this.emptyCart();
               this.router.navigate(['/']);
           } else {
  
           }
         });
    }
  
    public Cart(): void {
      this.cart = this.shoppingCartService.get();
      this.cartSubscription = this.cart.subscribe((cart) => {
        this.itemCount = cart.items.length;
        this.cartV = cart.items;
        this.itemTotal = cart.itemsTotal;
      });
    }
  
    public emptyCart(): void {
      this.shoppingCartService.empty();
      this.Cart();
    }
  
    ngOnDestroy(){
      if(this.shippingSub){
        this.shippingSub.unsubscribe();
      }
    }

}
