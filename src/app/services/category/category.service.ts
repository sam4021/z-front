import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { ENV } from '../../core/env.config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Category } from '../../core/models/category.model';

@Injectable()
export class CategoryService {
  private categoryData = new BehaviorSubject<Category>(null);
  public categoryData$ = this.categoryData.asObservable();

  private categoryIData = new BehaviorSubject<Category>(null);
  public categoryIData$ = this.categoryIData.asObservable();

  constructor(private http: HttpClient) { }

  setCategoryData(data){
    this.categoryData.next(data)
  }

  setCategoryIData(data){
    this.categoryIData.next(data)
  }

  // GET Category products
  getCategoryProductsUnique$(id: string): Observable<Category[]> {
    return this.http
      .get(`${ENV.BASE_API}product-category-unique/${id}`)
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
