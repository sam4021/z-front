import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { ProductsService } from '../../../services/products/products.service';
import { CategoryService } from '../../../services/category/category.service';
import { StorageService } from "../../../services/storage/storage.service";
import { AlertService } from '../../../services/alert/alert.service';
import { Category } from "../../../core/models/category.model";
import { UtilsService } from '../../../services/utils/utils.service';
import { FilterSortService } from '../../../services/filter/filter-sort.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../core/models/product.model';
import { FeaturedProduct } from '../../../core/models/featured_product.model';
import { Brands } from '../../../core/models/brand.model';
import { Blog } from '../../../core/models/blog.model';
import { ENV } from '../../../core/env.config';
import { DeviceDetectorService } from 'ngx-device-detector';
const IMG_URL = ENV.BASE_IMAGE;
const Order_Message = ENV.BASE_SUCCESS;
import { Observable } from "rxjs/Observable";
import { timer } from 'rxjs';
import { log } from 'util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  mobile_view:boolean = false;
  desktop_view:boolean = false;
  order_message: boolean = false;
  order_message1:any;
  private storage: Storage;
pageTitle = 'Online Shopping Site in Kenya - Shop for Electronics, Mobile, Tablets & Computers, Television - Phones And Tablets';
home: any;
homeSub: Subscription;
productsFeaturedSub: Subscription;
productsLatestSub: Subscription;
categorySub: Subscription;
blogSub: Subscription;
category : Category[];
brandsSub: Subscription;
menuSub: Subscription;
  featuredProducts: any;
  mainProducts: any;
  latestProducts: any;
  brands: Brands[];
  loading: boolean;
  error: boolean;
  query: '';
  imageUrl= '';
  blogs: Blog[];
  mainMenu : any;
  public showAlert: boolean = false;
  private alertSub: Subscription;
  private timer: any;
  deviceInfo = null;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private title: Title,
    private meta: Meta,
    public utils: UtilsService,
    private productService: ProductsService,
    private categoryService:CategoryService,
    private storageService: StorageService,
    private alertService: AlertService,
    public fs: FilterSortService,
    private deviceService: DeviceDetectorService
  ) {
    this.storage = this.storageService.get();
    // this.meta.addTag({ name: 'description', content:'Online Shopping : Buy Mobile Phones, Tablets, Televisions, Laptops , Cameras &  More | Best Prices In Kenya | Responsive Customer Support | Fast Shipping'  });
    // this.meta.addTag({ name: 'keywords', content: 'Phones & Tablets Kenya, Buy Phones and Tablets online, mobile, tablets , televisions in Kenya, Laptops, cameras' });
    // this.meta.addTag({ property: 'og:url' , content:"https://www.phonestablets.co.ke" });
    // this.meta.addTag({ property: 'og:type' , content:"website" });
    // this.meta.addTag({ napropertyme: 'og:title' , content: this.pageTitle });
    // this.meta.addTag({ property: 'og:description' ,content: "Online Shopping : Buy Mobile Phones, Tablets, Televisions, Laptops , Cameras &  More | Best Prices In Kenya | Responsive Customer Support | Fast Shipping" });
    // this.meta.addTag({ property: 'og:image' , content:"https://www.static.phonestablets.co.ke/img/logo.png" });
    categoryService.categoryData$.subscribe(data => this.mainMenu = data);
    this.epicFunction()
   }

   ngOnInit() {
     this._home();
    if (isPlatformBrowser(this.platformId)) {
      if(this.storage.getItem(Order_Message)=='True'){
        this.setSuccessTimer();
        localStorage.removeItem(Order_Message);
        //this.storage.removeItem(Order_Message)
      }
      //if (window.screen.width >= 320 && window.screen.width <= 480) { 
        if (this.deviceInfo.device == 'android' || this.deviceInfo.device == 'iphone') {
        this.mobile_view = true;
        this.desktop_view = false;
        this._getCategoryProducts();
        this._getBlogsm();
        this._getFeaturedProducts();
        this._getLatestProducts();
      } else{
        this.mobile_view = false;
        this.desktop_view = true;
        //this._getBlogs();
        this._getFeaturedProducts();
        this._getLatestProducts();
      }
   }
   if (isPlatformServer(this.platformId)) {
    this.mobile_view = false;
    this.desktop_view = true;
    //this._getBlogs();
   }
    
    this.imageUrl = IMG_URL;
    this.title.setTitle(this.pageTitle);
  }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    //console.log(this.deviceInfo);
  }

  private _home(){
  
    //
    let checkData;
    this.homeSub = this.productService.homeData$.subscribe(
      data => {
        checkData = data
        if(checkData != null){
        this.blogs = checkData.blog;
        }
      }
    )
  }

  private _getFeaturedProducts() {
    this.loading = true;
    // Get future, public events
    this.productsFeaturedSub = this.productService
      .getFeaturedProducts$()
      .subscribe(
        res => {
          this.featuredProducts = res;
          this.loading = false;
          this.productService.setFeaturedProductsData(res);
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  private _getLatestProducts() {
    this.loading = true;
    // Get future, public events
    this.productsLatestSub = this.productService
      .getLatestProducts$()
      .subscribe(
        res => {
          this.latestProducts = res;
          this.loading = false;
          this.productService.setLatestProductsData(res);
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  
  private _getBlogsm() {
    this.loading = true;
    this.blogSub = this.productService
      .getHomeBlogm$()
      .subscribe(
        res => {
          this.blogs = res;
        },
        err => {
          console.error(err);
          this.error = true;
        }
      );
  }

  private _getCategoryProducts() {
    this.loading = true;
    // Get future, public events
    this.categorySub = this.productService
      .getHomeCategoryMobile$()
      .subscribe(
        res => {
          this.category = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  public setSuccessTimer(){

      // set showloader to true to show loading div on view
      this.showAlert   = true;

      this.timer        = timer(6000); // 5000 millisecond means 5 seconds
      this.alertSub = this.timer.subscribe(() => {
          // set showloader to false to hide loading div from view after 5 seconds
          this.showAlert = false;
      });
    }

  ngOnDestroy() {
    if(this.menuSub){
      this.menuSub.unsubscribe();
    }
    if(this.productsFeaturedSub){
      this.productsFeaturedSub.unsubscribe();
    }
    if(this.brandsSub){
      this.brandsSub.unsubscribe();
    }
    if(this.categorySub){
      this.categorySub.unsubscribe();
    }
    if(this.blogSub){
      this.blogSub.unsubscribe();
    }
    if(this.productsLatestSub){
      this.productsLatestSub.unsubscribe();
    }
  }

}
