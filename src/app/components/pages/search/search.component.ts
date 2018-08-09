import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from "../../../core/models/product.model";
import { Category } from "../../../core/models/category.model";
import { ShoppingCart } from "../../../core/models/cart.model";
import { Brands } from "../../../core/models/brand.model";

import { ProductsService } from "../../../services/products/products.service";
import { UtilsService } from '../../../services/utils/utils.service';
import { PagerService } from '../../../services/pager/pager.service';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from 'rxjs/Subscription';
import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public products: Product[];
  public id: any;
  private sub: any;
  public productInfo : Product[]=[];
  public catInfo : Category[]=[];
  public catAll : Category[]=[];
  public brands : Brands[] = [];
  public view: any;
  public imageUrl= '';
  public pCount:any;
  Mainproducts: Product[];
  productsSub: Subscription;
  loading: boolean;
  count: number;
  pager: any = {};
  pagedItems: any[];

  constructor(private route: ActivatedRoute ,
    private productService: ProductsService,
    public utils: UtilsService,
    private pagerService: PagerService) {
      this.route.params
        .subscribe(params => {
           this.id =  params['id'];
           let checkProds: any;
           const splitString = this.id.split(" ");
            let prodArr=[];
            var reg=new RegExp(this.id, 'i');
            this.productService.productsData$
            .subscribe(
              data => {
                checkProds = data;
                if (checkProds == null) {
                  this._getProduct(this.id);
                } else {

                if(splitString.length ==3){
                  checkProds.forEach(prod => {
                    if (prod.title.toLowerCase().indexOf(splitString[0].toLowerCase()) !=-1 && prod.title.toLowerCase().indexOf(splitString[1].toLowerCase()) !=-1 && prod.title.toLowerCase().indexOf(splitString[2].toLowerCase()) !=-1) {
                        prodArr.push(prod);
                    }
                  });
                } else if(splitString.length==2){
                  checkProds.forEach(prod => {
                    if (prod.title.toLowerCase().indexOf(splitString[0].toLowerCase()) !=-1 && prod.title.toLowerCase().indexOf(splitString[1].toLowerCase()) !=-1) {
                        prodArr.push(prod);
                    }
                  });
                } else{
                  checkProds.forEach(prod => {
                    if (prod.title.toLowerCase().indexOf(splitString[0].toLowerCase()) !=-1) {
                      prodArr.push(prod);
                    }
                  });
                }
                this.products = prodArr;
                this.Mainproducts = prodArr;
                this.count = prodArr.length;
                this.loading = false;
                this.setPage(1);
              }
              })
           
           
        });
     }

    ngOnInit() {
      this.imageUrl = IMG_URL;
      this.route.params
        .subscribe(params => {
           this.id =  params['id'];
           //this._getProduct(this.id);
        });
  
    }
  
    private _getProduct(id: string) {
      const splitString = id.split(" ");
      let prodArr=[];
      this.loading = true;
      // Get future, public events
      this.productsSub = this.productService
        .getSearchProducts$(splitString[0])
        .subscribe(
          res => {
            if(splitString.length ==3){
              res.forEach(prod => {
                if (prod.title.toLowerCase().indexOf(splitString[1].toLowerCase()) !=-1 && prod.title.toLowerCase().indexOf(splitString[2].toLowerCase()) !=-1) {
                    prodArr.push(prod);
                }
              });
            } else if(splitString.length==2){
              res.forEach(prod => {
                if (prod.title.toLowerCase().indexOf(splitString[1].toLowerCase()) !=-1) {
                    prodArr.push(prod);
                }
              });
            } else{
              res.forEach(prod => {
                  prodArr.push(prod);
              });
            }
            this.products = prodArr;
            this.Mainproducts = prodArr;
            this.count = prodArr.length;
            this.loading = false;
            this.setPage(1);
          },
          err => {
            console.error(err);
            this.loading = false;
          }
        );
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
  
      searchList(event: any) {
        let prodArr=[];
        if (event.target.value =='') {
          this.products=this.Mainproducts
          this.count = this.Mainproducts.length
          this.pager = this.pagerService.getPager(this.Mainproducts.length, 1);
          this.pagedItems = this.Mainproducts.slice(this.pager.startIndex, this.pager.endIndex + 1);
        } else {
          const searchString = event.target.value.split(" ");
          if(event.target.value.toLowerCase().indexOf(" ")){
            if(searchString.length ==3){
              this.Mainproducts.forEach(prod => {
                if (prod.title.toLowerCase().indexOf(searchString[1].toLowerCase()) !=-1 && prod.title.toLowerCase().indexOf(searchString[2].toLowerCase()) !=-1) {
                    prodArr.push(prod);
                }
              });
            } else if(searchString.length==2){
              this.Mainproducts.forEach(prod => {
                if (prod.title.toLowerCase().indexOf(searchString[1].toLowerCase()) !=-1) {
                    prodArr.push(prod);
                }
              });
            } else{
              this.Mainproducts.forEach(prod => {
                if (prod.title.toLowerCase().indexOf(event.target.value) !=-1) {
                    prodArr.push(prod);
                }
              });
            }
          } else{alert(event.target.value);
        //  this.searchTerm = event.target.value;
          this.Mainproducts.forEach(prod => {
            if (prod.title.toLowerCase().indexOf(event.target.value) !=-1) {
                prodArr.push(prod);
            }
          });
        }
          this.products = prodArr;
          this.count = prodArr.length;
          this.loading = false;
          this.setPage(1);
        }
  
      }
  
    ngOnDestroy(){
  
    }

}
