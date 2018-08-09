import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../../services/products/products.service';
import { UtilsService } from '../../../../services/utils/utils.service';
import { FilterSortService } from '../../../../services/filter/filter-sort.service';
import { CategoryService } from "../../../../services/category/category.service";
import { PagerService } from '../../../../services/pager/pager.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../../core/models/product.model';
import { Category } from '../../../../core/models/category.model';
import { Brands } from "../../../../core/models/brand.model";
import { ENV } from '../../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-brand-category',
  templateUrl: './brand-category.component.html',
  styleUrls: ['./brand-category.component.css']
})
export class BrandCategoryComponent implements OnInit {
  id: any;
  brand: string;
  brandInfo: any;
  pageTitle = '';
  pageKeyword : any;
  pageDescription : any;
  categorySub: Subscription;
  productsSub: Subscription;
  menuSub: Subscription;
  mainMenu : any;
  Mainproducts: Product[];
  products: Product[];
  category: Category;
  category1: any;
  filteredproducts: Product[];
  brandSub: Subscription;
  brands : Brands[];
  brandFilter: any[];
  brandF: any[];
  loading: boolean;
  error: boolean;
  query: '';
  imageUrl= '';
  count: number;
  catInfo : Category[];
  pager: any = {};
  pagedItems: any[];
  filterArr: any;
  searchTerm='';
  searchTerm1: any;
  topAdImg: any;
  topAdLink: any;
  topAdTitle: any;
  topAdFooter: any;

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    public utils: UtilsService,
    private productService: ProductsService,
    private pagerService: PagerService,
    private categoryService: CategoryService,
    public fs: FilterSortService
  ) {
    this.route.params.subscribe(params => {
        this.id =  params['category'],
        this.brand =  params['brand']
        this.productService
          .getCategorySeo$(this.id)
          .subscribe(
            res => {
              // this.title.setTitle(res.title +' :: Phones Tablets Kenya');
              // this.meta.addTag({ name: 'description', content: res.seo.description });
              // this.meta.addTag({ name: 'keywords', content: res.seo.keywords });
            },
            err => {
              console.error(err);
              this.error = true;
            })

    });
     }

ngOnInit() {
this.route.params
 .subscribe(params => {
    this.id =  params['category'];
    this.brand =  params['brand'];
    this.title.setTitle(this.pageTitle);
    this._getCategoryInfo(this.id);
    this._getTopMenu();
    this.productService
    .getBrand$(this.brand)
      .subscribe(
        res => {
          this.brandInfo = res._id;
          this._getProducts(this.id,this.brandInfo);
        },
        err => {
          console.error(err);
        }
      );
 });
this.imageUrl = IMG_URL;
}

private _getCategoryInfo(id: string){
this.categorySub = this.productService
  .getCategoryInfo$(id)
  .subscribe(
    res => {
      this.category = res;
      this.category1 = res;
      this.topAdImg = this.category1.top_ad.img; 
      this.topAdLink = this.category1.top_ad.link; 
      this.topAdTitle = this.category1.title;
      this.topAdFooter = this.category1.footer_seo;
      this.loading = false;
    },
    err => {
      console.error(err);
      this.loading = false;
      this.error = true;
    }
  );
}

private _getProducts(id: string,brand: string) {
this.loading = true;
// Get future, public events
this.productsSub = this.productService
  .getCategoryProductsBrand$(id,brand)
  .subscribe(
    res => {
      this.Mainproducts = res;
      this.products = res;
      this.filteredproducts = res;
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

private _getBrands(brand){
this.brandSub = this.productService
.getBrand$(brand)
  .subscribe(
    res => {
      return res;
    },
    err => {
      console.error(err);
    }
  );
}

private _getTopMenu() {
this.menuSub = this.categoryService.categoryData$
// this.productService
//   .getCategoryTop$()
  .subscribe(
    res => {
      this.mainMenu = res;
    },
    err => {
       console.error(err);
      // this.error = true;
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

ngOnDestroy(){
if(this.categorySub){
  this.categorySub.unsubscribe();
}
if(this.productsSub){
  this.productsSub.unsubscribe();
}
if(this.menuSub){
  this.menuSub.unsubscribe();
}
if(this.brandSub){
  this.brandSub.unsubscribe();
}
}

}
