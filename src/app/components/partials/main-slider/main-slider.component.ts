import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { Slider } from "../../../core/models/slider.model";
import { Subscription } from 'rxjs/Subscription';
import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit, OnDestroy {
  sliderSub: Subscription;
  sideSub: Subscription;
  slider: Slider[];
  side: any;
  imageUrl= '';

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.imageUrl = IMG_URL;
    this._getSlider();
    this._getSide();
  }
  private _getSlider() {
    this.sliderSub = this.productService
      .getMainSlider$()
      .subscribe(
        res => {
          this.slider = res;
        },
        err => {
          console.error(err);
        }
      );
  }

  private _getSide() {
    this.sideSub = this.productService
    .getMainSideAd$()
      .subscribe(
        res => {
          this.side = res;
        },
        err => {
          console.error(err);
        }
      );
  }

  ngOnDestroy(){
    if(this.sliderSub){
      this.sliderSub.unsubscribe();
    }
    if(this.sideSub){
      this.sideSub.unsubscribe();
    }
  }

}
