import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Product } from "../../../core/models/product.model";
import { ShoppingCart } from "../../../core/models/cart.model";
import { AlertService } from '../../../services/alert/alert.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { UtilsService } from '../../../services/utils/utils.service';
import { ProductsService } from "../../../services/products/products.service";
import { CategoryService } from "../../../services/category/category.service";
import { CartService } from "../../../services/cart/cart.service";
import { StorageService } from "../../../services/storage/storage.service";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import 'rxjs/add/observable/timer';
import { ENV } from '../../../core/env.config';
import { ProductDescription } from '../../../core/models/prod_description.model';
const IMG_URL = ENV.BASE_IMAGE;
const Related_Key = ENV.BASE_RELATED_PRODUCTS;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  mobile_view:boolean = false;
  desktop_view:boolean = false;
  private storage: Storage;
  productsSub: Subscription;
  productsCSub: Subscription;
  productsRSub: Subscription;
  productsVSub: Subscription;
  productsESub: Subscription;
  public products: Observable<Product[]>;
  id: any;
  private sub: any;
  productInfo : any;
  productTle : any;
  productImages : any;
  productPr: any;
  productSp: any;
  productBxC: any;
  productDy: any;
  productDf: any;
  productDs: any;
  productDe: any;
  productDeB:boolean = false;
  productStock : any;
  productId: any;
  allProds: any;
  productRelated : any;
  productViewed : Product[];
  imageUrl= '';
  loading: boolean;
  error: boolean;
  productE: any;
  productAE: any;
  productEntityV: any;
  breadcrumb: any;
  public showAlert: boolean = false;
  private alertSub: Subscription;
  private timer: Observable<any>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private router: Router ,
    private route: ActivatedRoute ,
    private title: Title,
    private meta: Meta,
    public utils: UtilsService,
    private productService: ProductsService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private storageService: StorageService,
    private alertService: AlertService
  ) {
    let checkProds: any;
      this.productService.productsData$
      .subscribe(
        data => {
          checkProds = data
          if(checkProds === null){
            this._getProduct();
            this.route.params.subscribe(params => {
              this.id =  params['id'],
              this.productService
                .getProductSeo$(this.id)
                .subscribe(
                  res => {
                    this.title.setTitle(res.title +' :: Zuri Cart Kenya');
                    this.meta.addTag({ name: 'description', content: res.seo.description });
                    this.meta.addTag({ name: 'keywords', content: res.seo.keywords });
                    this.meta.addTag({ property: 'og:url' , content:"https://www.zuricart.co.ke/product/"+res.url  });
                    this.meta.addTag({ property: 'og:type' , content:"website" });
                    this.meta.addTag({ property: 'og:title' , content: res.title });
                    this.meta.addTag({ property: 'og:description' ,content: res.seo.description });
                    this.meta.addTag({ property: 'og:image' , content:"https://www.static.phonestablets.co.ke/img/products/"+res.images[0][0] });
                  })
            });
          } else{
            let prodArr;
            let catArr=[];
            let cArr;
            this.route.params.subscribe(params => {
              this.id =  params['id'],
              checkProds.forEach(prod=>{
                if(prod.url==this.id){
                  prodArr = prod;
                }
              })
            if (prodArr.length === 0) {
              let sliced = this.id.slice(0, 10).replace(/-/g, ' ');
              var withNoDigits = sliced.replace(/[0-9]/g, '');
                this.router.navigate(['/search/'+withNoDigits]);
            }
            categoryService.categoryIData$.subscribe(
              data => {
                cArr = data                
                cArr.forEach(c => {
                 if(c._id == prodArr.category){
                   catArr.push({"title":c.title,"link":c.url,"parent":c.parent});
                  }
                });
                if(catArr[0].parent !=""){
                  cArr.forEach(c => {
                    if(c._id == catArr[0].parent){
                      catArr.unshift({"title":c.title,"link":c.url,"parent":c.parent});
                     }
                   });
                }
                if(catArr[0].parent !=""){
                  cArr.forEach(c => {
                    if(c._id == catArr[0].parent){
                      catArr.unshift({"title":c.title,"link":c.url,"parent":c.parent});
                     }
                   });
                }
              });
            this.breadcrumb = catArr
            this.productRelated = this._getProductRelatedC(checkProds,prodArr.category)
            this.productInfo = prodArr;
            this.productImages = this.productInfo.images;
            this.productTle = this.productInfo.title;
            this.productSp = this.productInfo.special_price;
            this.productPr = this.productInfo.price;
            this.productBxC = this.productInfo.descriptions.box_content;
            this.productDy = this.productInfo.descriptions.youtube;
            this.productDf = this.productInfo.descriptions.full;
            this.productDs = this.productInfo.descriptions.short;
            this.productDe = this.productInfo.desc_entity;
            if (this.productDe !='') {
              this.productDeB = true;
            }
            this.productStock = this.productInfo.stock;
            
            this.productId = prodArr._id
            // this.title.setTitle(prodArr.title +' :: Zuri Cart Kenya');
            // this.meta.addTag({ name: 'description', content: prodArr.seo.description });
            // this.meta.addTag({ name: 'keywords', content: prodArr.seo.keywords });
            // this.meta.addTag({ name: 'og:url' , content:"https://www.zuricart.co.ke/product/"+prodArr.url  });
            // this.meta.addTag({ name: 'og:type' , content:"website" });
            // this.meta.addTag({ name: 'og:title' , content: prodArr.title });
            // this.meta.addTag({ name: 'og:description' ,content: prodArr.seo.description });
            // this.meta.addTag({ name: 'og:image' , content:"https://www.static.phonestablets.co.ke/img/products/"+prodArr.images[0][0] });
          });
          }
        }
      )
     this.storage = this.storageService.get();
     
    }

    form = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl(''),
      product_id: new FormControl(''),
      message: new FormControl(''),
    });

  public addProductToCart(prodId: string,price: number): void {
     this.setSuccessTimer();
     this.cartService.addItem(prodId,price);
  }


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
    this.imageUrl = IMG_URL;
  }

  onSubmit(id): void {
    let name = this.form.value.name;
    let phone = this.form.value.phone;
    let email = this.form.value.email;
    let product_id = this.productId;
    let message = this.form.value.message;
    // this.http.post(`${ENV.BASE_API}contact-seller`,
    //    {name: name, phone: phone, email: email,product_id:product_id,message:message})
    //    .subscribe((data) => {
    //       this.router.navigate(['/product/'+this.id]);
    //    });
       //document.getElementById("exampleModalLong").classList.remove('show');
       let shadesEl = document.querySelector('.class_modal');

       console.log(shadesEl.classList);
       shadesEl.classList.remove('show');
       
       //document.getElementById("exampleModalLong").style.display="none"
       //document.getElementById(".icon-rollover-color").style.display="none"
  }

  private _getProduct() {
    this.sub = this.route.params.subscribe(params => {
       this.id =  params['id'];
       this._checkProduct(this.id);
    });
  }

  private _checkProduct(id){
    this.productsCSub = this.productService
      .getProductInfoCount$(id)
      .subscribe(
        res => {
          if (parseInt(res.message) === 0) {
            let sliced = this.id.slice(0, 10).replace(/-/g, ' ');
            var withNoDigits = sliced.replace(/[0-9]/g, '');
            //alert(withNoDigits);
              this.router.navigate(['/search/'+withNoDigits]);
          } else {
            this._getProductInfo(this.id);
            this._getProductRelated(this.id);
            //this._getProductEntity(this.id)
          }
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  private _getProductInfo(id: string) {
    this.loading = true;
    // Get future, public events
    this.productsSub = this.productService
      .getProductInfo$(id)
      .subscribe(
        res => {
          this.productInfo = res;
          this.productImages = this.productInfo.images;      
          this.productTle = this.productInfo.title;    
          this.productSp = this.productInfo.special_price;
          this.productPr = this.productInfo.price;
          this.productBxC = this.productInfo.descriptions.box_content;
          this.productDy = this.productInfo.descriptions.youtube;
          this.productDf = this.productInfo.descriptions.full;
          this.productDs = this.productInfo.descriptions.short;
          this.productDe = this.productInfo.desc_entity;
          if (this.productDe !='') {
            this.productDeB = true;
          }
          this.productStock = this.productInfo.stock;
          this.loading = false;
        },
        err => {
          this.loading = false;
          this.error = true;
        }
      );
  }
  private _getProductRelated(id: string) {
    // Get future, public events
    this.productsRSub = this.productService
      .getProductRelated$(id)
      .subscribe(
        res => {
          this.productRelated = res.prodArr;
          this.productE = res.productE;
          this.productAE = res.ae;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  private _getProductRelatedC(arr,cat) {
    let prodArr=[]
    arr.forEach(prod=>{
      if(prod.category==cat){
        prodArr.push(prod);
      }
    })
    const shuffled = prodArr.sort(() => .5 - Math.random());
    return shuffled.slice(0,6)
  }

  // private _getProductViewed(id: string) {
  //   const storedProducts = this.storage.getItem(Related_Key);
  //   if(storedProducts){
  //     this.productViewed = JSON.parse(storedProducts);
  //   }
  // }
  // private _addProductViewed(id: string) {
  //   const storedProducts = this.storage.getItem(Related_Key);
  //   const productStored = JSON.parse(storedProducts);
  //   if(!productStored.includes(id)){
  //     // productStored.push(id);
  //     this.productViewTest = "Yes";
  //     // this.storage.setItem(Related_Key, JSON.stringify(productStored));
  //   } else{
  //     this.productViewTest = "";
  //   }
  // }


  public setSuccessTimer(){

      // set showloader to true to show loading div on view
      this.showAlert   = true;

      this.timer        = Observable.timer(500000); // 5000 millisecond means 5 seconds
      this.alertSub = this.timer.subscribe(() => {
          // set showloader to false to hide loading div from view after 5 seconds
          this.showAlert = false;
      });
    }

    public hideAlert(){
          this.showAlert = false;
    }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
    if ( this.alertSub && this.alertSub instanceof Subscription) {
      this.alertSub.unsubscribe();
    }
    if(this.productsESub){
      this.productsESub.unsubscribe();
    }
  }

}
