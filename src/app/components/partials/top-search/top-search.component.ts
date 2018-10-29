import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router } from "@angular/router";
import { ProductsService } from '../../../services/products/products.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../core/models/product.model';

import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-top-search',
  templateUrl: './top-search.component.html',
  styleUrls: ['./top-search.component.css']
})
export class TopSearchComponent implements OnInit {
  mobile_view:boolean = false;
  desktop_view:boolean = false;
  productsSub: Subscription;
  products: Product[];
  searchProd: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private router: Router,
  private productService: ProductsService) { 
    let checkProds;
    let prodArr=[];
    this.productService.productsData$
      .subscribe(
        data => {
          checkProds = data
          
          if (checkProds != null){                                 
            checkProds.forEach(prod=>{
                  prodArr.push(prod);
            })
          }
          this.products = prodArr;
        })
  }
  myform: FormGroup;
  search: FormControl;
  canSee: boolean = false;
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
    
  }

  form = new FormGroup({
    search: new FormControl('', Validators.required)
  });

  onSearch(id): void {
    let search = this.form.value.search;
    if(search !=''){
      this.router.navigate(['/search',search]);
    }    
  }

  onProduct(id): void {
    this.router.navigate(['/product/'+id]);
  }

  onFilter(event: any) {
    let prodArr=[];
    if (event.target.value =='') {
      this.searchProd = [];
      
    } else {
      const searchString = event.target.value.split(" ");
        if(searchString.length ==3){
          this.products.forEach(prod => {
            if (prod.title.toLowerCase().indexOf(searchString[1].toLowerCase()) !=-1 && prod.title.toLowerCase().indexOf(searchString[2].toLowerCase()) !=-1) {
                prodArr.push(prod);
            }
          });
        } else if(searchString.length==2){
          this.products.forEach(prod => {
            if (prod.title.toLowerCase().indexOf(searchString[1].toLowerCase()) !=-1) {
                prodArr.push(prod);
            }
          });
        } else{
          this.products.forEach(prod => {
            if (prod.title.toLowerCase().indexOf(event.target.value) !=-1) {
                prodArr.push(prod);
            }
          });
        }
      this.searchProd = prodArr;
      
    }
  }

  onEnter() {
    this.canSee = false;
  }

  show(e: any) {
    this.canSee = true;
  }
  hide(e: any) {
    this.canSee = true;
  }

}
