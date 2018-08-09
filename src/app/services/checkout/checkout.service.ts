import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Shipping } from "../../core/models/shipping.model";
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ENV } from '../../core/env.config';
@Injectable()
export class CheckoutService {
  private shippingData = new BehaviorSubject<Shipping>(null);
  public shippingData$ = this.shippingData.asObservable();
  constructor(
    private http: HttpClient) { }

  setShippingData(data){
    this.shippingData.next(data)
  }

  //Get Shipping Amount
  public getShippingAmount$(id: string) : Observable<Shipping> {
    return this.http
      .get(`${ENV.BASE_API}shipping-amount/${id}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  //Get Shipping
  public getShipping$() : Observable<Shipping[]> {
    return this.http
      .get(`${ENV.BASE_API}shipping`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  //Get Shipping Locations
  public getShippingLocation$() : Observable<Shipping[]> {
    return this.http
      .get(`${ENV.BASE_API}delivery-location`)
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
