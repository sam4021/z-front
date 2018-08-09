import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../services/products/products.service';
import { UtilsService } from '../../../services/utils/utils.service';

import { PagerService } from '../../../services/pager/pager.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../core/models/product.model';

import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit,OnDestroy {

  id: any;
productsSub: Subscription;
Mainproducts: Product[];
products: Product[];
loading: boolean;
error: boolean;
imageUrl= '';
count: number;
pager: any = {};
pagedItems: any[];
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    public utils: UtilsService,
    private productService: ProductsService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.route.params
     .subscribe(params => {
        this.id =  params['id'];
        this._getProducts(this.id);
     });
    this.imageUrl = IMG_URL;
  }

  private _getProducts(id: string) {
    this.loading = true;
    // Get future, public events
    this.productsSub = this.productService
      .getProductsTags$(id)
      .subscribe(
        res => {
          this.Mainproducts = res;
          this.products = res;
          this.count = res.length;
          this.loading = false;
          this.setPage(1);
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
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
        this.products = prodArr;
        this.count = prodArr.length;
        this.loading = false;
        this.setPage(1);
      }
    }

  ngOnDestroy() {
  }

}
