import { Component, OnInit } from '@angular/core';

import { ProductsService } from "../../../services/products/products.service";
import { Blog } from "../../../core/models/blog.model";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  mobile_view:boolean = false;
  desktop_view:boolean = false;
  blogsSub: Subscription;
  blogs: Blog;
  imageUrl= '';
  loading: boolean;
  id: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this._getBlogs();
    this.imageUrl = IMG_URL;
  }

  private _getBlogs() {
    this.loading = true;
    this.blogsSub = this.productService
      .getBlogs$()
      .subscribe(
        res => {
          this.blogs = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
        }
      );
  }

  ngOnDestroy(){
    if(this.blogsSub){
      this.blogsSub.unsubscribe();
    }
  }

}
