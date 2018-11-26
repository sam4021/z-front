import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../../services/products/products.service';
import { UtilsService } from '../../../services/utils/utils.service';
import { FilterSortService } from '../../../services/filter/filter-sort.service';
import { PagerService } from '../../../services/pager/pager.service';
import { CategoryService } from "../../../services/category/category.service";
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../../core/models/product.model';
import { Category } from '../../../core/models/category.model';
import { Brands } from "../../../core/models/brand.model";
import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id: any;
  pageTitle = '';
  pageKeyword : any;
  pageDescription : any;
  categorySub: Subscription;
  productsSub: Subscription;
  menuSub: Subscription;
  mainMenu : any;
  Mainproducts: any[];
  products: Product[];
  category: any;
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
  brandsresult: any;
  filterArr: any;
  searchTerm='';
  searchTerm1: any;
  inMenu : any;
  parentMenu: any;
  childMenu: any;
  childMenu2: any;
  categoryId: any;
  topAdTitle: any;
  topAdFooter: any;
  topAdParent: any;
  menuArrU : any;

  constructor(
          private route: ActivatedRoute,
          private title: Title,
          private meta: Meta,
          public utils: UtilsService,
          private productService: ProductsService,
          private pagerService: PagerService,
          public fs: FilterSortService,
          private categoryService: CategoryService
        ) {
          let menu:any
          this.route.params.subscribe(params => {
            this.id =  params['category']
            this.productService
                .getCategorySeo$(this.id)
                .subscribe(
                  res => {
                    if (res.seo.title == '') {
                       this.title.setTitle(res.title);
                    } else {
                       this.title.setTitle(res.seo.title);
                    }
                    
                     this.meta.addTag({ name: 'description', content: res.seo.description });
                     this.meta.addTag({ name: 'keywords', content: res.seo.keywords });
                  },
                  err => {
                    console.error(err);
                    this.error = true;
                  })
          categoryService.categoryIData$.subscribe(
            data => {
              menu = data
              if (menu == null) {
                  this._getCategoryInfo(this.id)
                  this._getProducts(this.id);
                  
              } else {              
                  let prodArr=[];
                  
                  this.categoryService
                    .getCategoryProductsUnique$(this.id)
                    .subscribe(
                      res => {
                          let checkProds
                          this.productService.productsData$
                            .subscribe(
                              data => {
                                checkProds = data
                                
                                if (res.length==1) {
                                  checkProds.forEach(prod=>{
                                      if(res[0]==prod.category){
                                        prodArr.push(prod);
                                      }
                                  })                                  
                                } else {                                  
                                  checkProds.forEach(prod=>{
                                    res.forEach(cat=>{
                                      if(cat==prod.category){
                                        prodArr.push(prod);
                                      }
                                    })
                                  })
                                }
                                
                                this.Mainproducts = prodArr;
                                this.products = prodArr;
                                this.filteredproducts = prodArr;
                                this.count = prodArr.length;
                                this.loading = false;
                                this.setPage(1);
                              })
                      }
                      ,
                      err => {
                        console.error(err);
                        // this.error = true;
                      }
                    );
                  
                  let categoryArr=[];
                   let menuArr=[]
                   let menuArr1
                   let menuArr2=[]
                   let menuArr3=[]
                   
                   menu.forEach(prod=>{
                    if(prod.url==this.id){
                      this.menuArrU = prod;
                    }
                  })
                  
                  if (this.menuArrU.parent == 0) {
                    menuArr1=this.menuArrU;
                    menu.forEach(p => {
                      if(p.parent==this.menuArrU._id){
                        menuArr2.push(p)
                      }
                    });
                    menu.forEach(p => {
                      if(p.parent==menuArr2[0]._id){
                        menuArr3.push(p)
                      }
                    });
                  } else {
                    menu.forEach(p => {
                      if(p._id==this.menuArrU.parent){
                        menuArr1=p
                      }
                    });
                    
                    if (menuArr1.parent == 0) {
                      menu.forEach(p => {
                        if(p.parent==this.menuArrU._id){
                          menuArr2.push(p)
                        }
                      });
                      menu.forEach(p => {
                        if(p.parent==menuArr2[0]._id){
                          menuArr3.push(p)
                        }
                      });
                    } else {
                      menu.forEach(p => {
                        if(p.parent==this.menuArrU._id){
                          menuArr2.push(p)
                        }
                      });
                      menu.forEach(p => {
                        if(p.parent==menuArr2[0]._id){
                          menuArr3.push(p)
                        }
                      });
                    }
                    
                  }
                  
                  //this.category = menuArrU
                  this.parentMenu = menuArr1
                  this.childMenu = menuArr2;
                  this.childMenu2 = menuArr3;
                  this.inMenu = menuArr1
                  
                
              }
            })
          })
           this.brandFilter=[];
           this.brandsresult = [];
           //this.filterArr = [];
         }

  public filterBrands(id: string){    
    let brand = this.brandFilter.push(id);
    //this.filterArr.push(brand);
     this._getFilterBrands(this.brandFilter);
     this._getFilteredProducts(this.brandFilter);
  }

  public removeFilterBrands(id: string){

    var index = this.brandFilter.indexOf(id);
    if (index > -1) {
        this.brandFilter.splice(index, 1);
    }
      //  this.filterArr = id;
    this._getFilterBrands(this.brandFilter);
    this._getFilteredProducts(this.brandFilter);
  }

  public _getFilterBrands(brandF: any){
    let brandIn=[];
    this.brandF = brandF;

    this.brandF.forEach(brand=>{
      this.productService
     .getBrandsInfo$(brand)
       .subscribe(
         res => {
          brandIn.push(res);
         },
         err => {
           console.error(err);
         }
       );
    });
    this.brandsresult = brandIn;
  }

  ngOnInit() {
    this.route.params
     .subscribe(params => {
        this.id =  params['category'];
        this.title.setTitle(this.pageTitle);
        this._getCategoryInfo(this.id);
        //this._getTopMenu();
        this._getBrands(this.id);
   //     this._getProducts(this.id);
     });
    this.imageUrl = IMG_URL;
  }

  private _getCategoryInfo(id: string){
    this.categorySub = this.productService
      .getCategoryInfo$(id)
      .subscribe(
        res => {
          this.category1 = res;
          this.category = res;
    
          this.topAdTitle = this.category1.title;
          this.topAdParent = this.category1.parent;
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

  private _getFilteredProducts(brands: any) {
    
    let productsB=[];
    if(brands.length){

      this.loading = true;
      brands.forEach(brand=>{
        this.Mainproducts.forEach(prod=>{          
          if(brand == prod.brand._id){
            productsB.push(prod);
          }
        })
      })
      this.products = productsB;
      this.filteredproducts = productsB;
      this.count = productsB.length;
      this.loading = false;
      this.setPage(1);
    } else{
      // this._getProducts();
      this.loading = true;
        this.Mainproducts.forEach(prod=>{
            productsB.push(prod);
        })
      this.products = productsB;
      this.filteredproducts = productsB;
      this.count = productsB.length;
      this.loading = false;
      this.setPage(1);
    }
  }

  private _getProducts(id: string) {
    this.loading = true;
    // Get future, public events
    this.productsSub = this.productService
      .getCategoryProducts$(id)
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

  private _getBrands(id: string){
    this.brandSub = this.productService
    .getBrandEntity$(id)
      .subscribe(
        res => {
          this.brands = res;
        },
        err => {
          console.error(err);
        }
      );
  }

  private _getTopMenu() {
    this.menuSub = this.categoryService.categoryData$//this.productService
      //.getCategoryTop$()
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

  private _getBrandsInfo(id: any){
     this.productService
    .getBrandEntityInfo$(id)
      .subscribe(
        res => {
          this.brandsresult = res;
        },
        err => {
          console.error(err);
        }
      );
  }

  searchEvents() {
    this.filteredproducts = this.fs.search(this.products, this.query, '_id', 'mediumDate');
  }

  resetQuery() {
    this.query = '';
    this.filteredproducts = this.products;
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
        this.filteredproducts=this.Mainproducts
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
        this.filteredproducts = prodArr;
        this.count = prodArr.length;
        this.loading = false;
        this.setPage(1);
      }
    }

    findInArray(arr, val) {
      var result = [];

    for (var i in arr) {
        //if (i.title.match(/val/)) {
            result.push(i);
        //}
    }

    return result;
}

  ngOnDestroy() {
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
