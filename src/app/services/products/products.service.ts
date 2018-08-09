import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { ENV } from '../../core/env.config';
import { Product } from '../../core/models/product.model';
import { Message } from '../../core/models/message.model';
import { FeaturedProduct } from '../../core/models/featured_product.model';
import { Category } from '../../core/models/category.model';
import { Brands } from '../../core/models/brand.model';
import { Blog } from '../../core/models/blog.model';
import { Tag } from '../../core/models/tag.model';
import { Slider } from '../../core/models/slider.model';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductsService {
  private productsData = new BehaviorSubject<Product>(null);
  public productsData$ = this.productsData.asObservable();
  private featuredProductsData = new BehaviorSubject<Product>(null);
  public featuredProductsData$ = this.featuredProductsData.asObservable();
  private latestProductsData = new BehaviorSubject<Product>(null);
  public latestProductsData$ = this.latestProductsData.asObservable();
  private homeData = new BehaviorSubject<Product>(null);
  public homeData$ = this.homeData.asObservable();
  public externalCategory: Category;

  constructor(
    private http: HttpClient) { }

    private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  //Set All Home
  setHomeData(data){
    this.homeData.next(data)
  }

  //Set All Products
  setProductsData(data){
    this.productsData.next(data)
  }

  //Set Latest Products
  setLatestProductsData(data){
    this.latestProductsData.next(data)
  }

  //Set All Products
  setFeaturedProductsData(data){
    this.featuredProductsData.next(data)
  }

  // GET list of products
  getAllProducts$(): Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}products`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET list of products
  getMainSlider$(): Observable<Slider[]> {
    return this.http
      .get(`${ENV.BASE_API}main-slider`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product info Using URL
  getProductInfo$(id: string): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}product-info/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product info Count
  getProductInfoCount$(id: string): Observable<Message> {
    return this.http
      .get(`${ENV.BASE_API}product-info-count/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product Seo
  getProductSeo$(id: string) {
    return this.http
      .get(`${ENV.BASE_API}product-seo/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product info Using ID
  getProductInfoId$(id: string): Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}product-info-id/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product Related
  getProductRelated$(id: string): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}product-related/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product Tags
  getProductTags$(): Observable<Tag[]> {
    return this.http
      .get(`${ENV.BASE_API}products-tags`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product Tags
  getProductsTags$(id: string): Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}all-products-tags/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product Offer
  getProductOffers$(): Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}products-offer`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Product Offer Extra
  getProductOffersEx$(): Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}products_offer_extra`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Featured products
  getFeaturedProducts$(): Observable<FeaturedProduct[]> {
    return this.http
      .get(`${ENV.BASE_API}product-featured`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Latest products
  getLatestProducts$(): Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}product-latest`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Category info
  getCategoryInfo$(id: string): Observable<Category> {
    return this.http
      .get(`${ENV.BASE_API}category-info/${id}`)
      .map((data: Category) => {
                this.externalCategory = data; // should be allowed by typescript now
                return data;
            })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Category info SEO
  getCategorySeo$(id: string) {
    return this.http
      .get(`${ENV.BASE_API}category-seo/${id}`)
      .map((data: Category) => {
                this.externalCategory = data;
                return data;
            })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Category products
  getCategoryProducts$(id: string): Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}product-category/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // GET Category products Brands
  getCategoryProductsBrand$(id: string,brand: string): Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}product-category-brand/${id}/${brand}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  getBrand$(id: string): Observable<Brands>{
    return this.http
      .get(`${ENV.BASE_API}brand/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  getBrandEntity$(id: string): Observable<Brands[]>{
    return this.http
      .get(`${ENV.BASE_API}brand-entity/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  getBrandEntityInfo$(id: string): Observable<Brands[]>{
    return this.http
      .post(`${ENV.BASE_API}get-brands-entity/`,id, httpOptions)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // Get Brand Info
  getBrandsInfo$(id: string): Observable<Brands>{
    return this.http
      .get(`${ENV.BASE_API}brands-info/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  //Get Home Category Products
  getHome$() : Observable<Category[]> {
    return this.http
      .get(`${ENV.BASE_API}home`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }



  //Get Home Category Products Mobile
  getHomeBlogm$() : Observable<Blog[]> {
    return this.http
      .get(`${ENV.BASE_API}home-blog-mobile`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  //Get Blog Info
  getBlogInfo$(id: string) : Observable<Blog> {
    return this.http
      .get(`${ENV.BASE_API}blog/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  //Get Other Blogs
  getOtherBlogs$(id: string) : Observable<Blog> {
    return this.http
      .get(`${ENV.BASE_API}blogs-other/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  //Get Blogs
  getBlogs$() : Observable<Blog> {
    return this.http
      .get(`${ENV.BASE_API}blogs/`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }


  //Get Home Category Products
  getHomeCategoryMobile$() : Observable<Category[]> {
    return this.http
      .get(`${ENV.BASE_API}home-category-mobile`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  //Get Top Category
  // public getCategoryTop$() : Observable<Category[]> {
  //   return this.http
  //     .get(`${ENV.BASE_API}category-top`)
  //     .pipe(
  //       catchError((error) => this._handleError(error))
  //     ); 
  // }

  //Get All Category
  public getAllCategory$() : Observable<Category[]> {
    return this.http
      .get(`${ENV.BASE_API}all-category`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  //Get search Products
  public getSearchProducts$(search : string) : Observable<Product[]> {
    return this.http
      .get(`${ENV.BASE_API}products_search/${search}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      
    }
    return Observable.throw(errorMsg);
  }

}
