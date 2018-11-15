import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { Product } from "../../../core/models/product.model";
import { Subscription } from 'rxjs/Subscription';

import { ProductsService } from "../../../services/products/products.service";
import { CategoryService } from "../../../services/category/category.service";
import { PagerService } from '../../../services/pager/pager.service';

import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  mobile_view:boolean = false;
  desktop_view:boolean = false;
  brandSub: Subscription;
  brandI : any;
  brand: any;
  products: any;
  imageUrl= '';
  count: number;
  pager: any = {};
  pagedItems: any[];
  loading: boolean;
  allCat:any;
  allCat1:any;
  allCat3:any;
  mainCat:any;

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router ,
    private route: ActivatedRoute ,
    public categoryService: CategoryService,
    private productService: ProductsService,
    private pagerService: PagerService
  ) { 
      let checkProds: any;
      let prodArr=[];
      let catArr=[];
      let catArr2=[];
      let catArr3=[];
      let arrtest=[];
      this.productService.productsData$
      .subscribe(
        data => {
           checkProds = data
           //if(checkProds === null){
            //this.products =['Null Prods'];
            //console.log('no prd');
            
          //  }
          //  else{
          //   console.log('yes prd');
       this.route.params.subscribe(params => {
         var bb=  params['brand'];
         this.brand =  params['brand'],
         this._getBrand(bb),         
         
        // this.products = this.brand
         checkProds.forEach(prod=>{
          if(prod.brand.url==this.brand){
            prodArr.push(prod);
            catArr.push(prod.category);
            if(catArr2.indexOf(prod.category) === -1){
              catArr2.push(prod.category)
            }
          }
         })
    //   if (prodArr.length === 0) {
    //     let sliced = this.brand.slice(0, 10).replace(/-/g, ' ');
    //     var withNoDigits = sliced.replace(/[0-9]/g, '');
    //       this.router.navigate(['/search/'+withNoDigits]);
    //   }
    
    const arrayToCount = [1, 2, 3, 5, 2, 8, 9, 2];
const result = arrayToCount.filter(i => i === 2).length;
         catArr2.forEach(cat=>{
          arrtest.push({"category":cat,"count":catArr.filter(i => i === cat).length})
         })
      this.products = prodArr
      this.allCat3 = arrtest
      this.allCat1 = catArr2
      this.count = prodArr.length;
      this.loading = false;
      this.setPage(1);
     })
    //}
     });
     
     categoryService.categoryIData$.subscribe(
      data =>{
        this.mainCat = data
      })
    }

  ngOnInit() {
    this.imageUrl = IMG_URL;
  }

  _getBrand(brand){
    this.brandSub = this.productService
    .getBrand$(brand)
    .subscribe(res=>{
      this.brand = res,
      this.title.setTitle(this.brand.seo.title +' :: Zuri Cart Kenya')
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.products.length, page);

    // get current page of items
    this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  inArray = function(comparer) { 
    for(var i=0; i < this.length; i++) { 
        if(comparer(this[i])) return true; 
    }
    return false; 
}

  ngOnDestroy(){
    if(this.brandSub){
      this.brandSub.unsubscribe();
    }
  }

}
