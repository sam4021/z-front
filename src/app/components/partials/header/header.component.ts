import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import { ProductsService } from "../../../services/products/products.service";
import { CategoryService } from "../../../services/category/category.service";
import { Category } from "../../../core/models/category.model";
import { Subscription } from 'rxjs/Subscription';
import { DeviceDetectorService } from 'ngx-device-detector';

import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuSub: Subscription;
  homeSub: Subscription;
  home: any;
  category: any[];
  menu:any;
  mainMenu : any;
  inMenu : any;
  mobile_view:boolean = false;
  desktop_view:boolean = false;
  mMenu:boolean = false;
  imageUrl= '';
  deviceInfo = null;
    constructor(
      @Inject(PLATFORM_ID) private platformId: Object,
      private router: Router,
      private productService: ProductsService,
      private categoryService: CategoryService,
      private deviceService: DeviceDetectorService
    ) {
      this.epicFunction();
     }

     ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
       // this._getTopMenu();
      this._getInnerMenu();
      this.imageUrl = IMG_URL;
      
        //if (window.screen.width >= 320 && window.screen.width <= 480) { // 768px portrait
        if (this.deviceInfo.device == 'android' || this.deviceInfo.device == 'iphone') {
          this.mobile_view = true;
          this.desktop_view = false;
          this.mMenu = false;
          
        } else{
          this.mobile_view = false;
          this.desktop_view = true;
        }
      }
      if (isPlatformServer(this.platformId)) {
        this.mobile_view = false;
        this.desktop_view = true;
        //this._getTopMenu();
      this._getInnerMenu();
      this.imageUrl = IMG_URL;
      }
      this._home();
      
    }

    epicFunction() {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      //console.log(this.deviceInfo);
    }

    // private _getTopMenu() {
    //   this.menuSub = this.productService
    //     .getCategoryTop$()
    //     .subscribe(
    //       res => {
    //         this.mainMenu = res;
    //         this.categoryService.setCategoryData(res)
    //       },
    //       err => {
    //          console.error(err);
    //         // this.error = true;
    //       }
    //     );
    // }
    private _getInnerMenu() {
      this.menuSub = this.productService
        .getAllCategory$()
        .subscribe(
          res => {
            this.menu = res;
            this.inMenu = this.menu.all;
            this.mainMenu = this.menu.top;
            
            this.categoryService.setCategoryIData(this.inMenu);
            this.categoryService.setCategoryData(this.mainMenu);
          },
          err => {
             console.error(err);
            // this.error = true;
          }
        );
    }
    private _home(){
  
      //
      let checkData;
      this.productService.homeData$.subscribe(
        data => {
          checkData = data
          if (checkData == null) {
            this.homeSub = this.productService.getHome$()
            .subscribe(
              res => {
                this.productService.setHomeData(res);
              },
              err => {
                console.error(err);
              }
            )
          } else {
            
          }
        }
      )
    }

    setTrue(){
      this.mMenu = true
    }

    setFalse(){
      this.mMenu = false
    }


}
