import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../services/products/products.service";
import { Category } from "../../../core/models/category.model";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from "../../../services/category/category.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuSub: Subscription;
  private category: any[];
   mainMenu : any;
   inMenu : any;
   homeCheck: any;
  
    constructor(
            private productService: ProductsService,
            private route: ActivatedRoute,
            private categoryService: CategoryService
          ) {
            categoryService.categoryData$.subscribe(data => this.mainMenu = data)
            categoryService.categoryIData$.subscribe(data => this.inMenu = data)
           }
  
    ngOnInit() {
     // this._getTopMenu();
     // this._getInnerMenu();
    }
    private _getTopMenu() {
      this.menuSub = //this.productService
        //.getCategoryTop$()
        this.categoryService.categoryData$
        .subscribe(
          res => {
            this.mainMenu = res;
            this.categoryService.setCategoryData(res);
          },
          err => {
             console.error(err);
            // this.error = true;
          }
        );
    }
    private _getInnerMenu() {
      this.menuSub = this.productService
        .getAllCategory$()
        .subscribe(
          res => {
            this.inMenu = res;
            this.categoryService.setCategoryIData(res)
          },
          err => {
             console.error(err);
            // this.error = true;
          }
        );
    }
  
    ngOnDestroy() {
      //this.menuSub.unsubscribe();
    }

}
