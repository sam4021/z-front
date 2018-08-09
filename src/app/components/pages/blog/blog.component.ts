import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { ProductsService } from "../../../services/products/products.service";
import { Blog } from "../../../core/models/blog.model";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { ENV } from '../../../core/env.config';
const IMG_URL = ENV.BASE_IMAGE;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  mobile_view:boolean = false;
  desktop_view:boolean = false;
  blogSub: Subscription;
  blogMSub: Subscription;
  blog: any;
  blogs: Blog;
  imageUrl= '';
  loading: boolean;
  id: any;

  constructor(
    private title: Title,
    private meta: Meta,
    private productService: ProductsService,
    private route: ActivatedRoute) { 
      this.route.params.subscribe(params => {
        this.id =  params['id'];
        //this._getBlogInfo(this.id);
        this._getBlog(this.id);
        this.blogSub = this.productService
        .getBlogInfo$(this.id)
        .subscribe(
          res => {
            this.blog = res;
            this.loading = false;
            // this.title.setTitle(this.blog.title +' :: Zuri Cart Kenya');
            // this.meta.addTag({ name: 'description', content: this.blog.seo.description });
            // this.meta.addTag({ name: 'keywords', content: this.blog.seo.keywords });
          },
          err => {
            console.error(err);
            this.loading = false;
          }
        );
        
     });
      
    }

    ngOnInit() {
      this.imageUrl = IMG_URL;
      if (window.screen.width >= 320 && window.screen.width <= 480) { // 768px portrait
        this.mobile_view = true;
        this.desktop_view = false;
      } else{
        this.mobile_view = false;
        this.desktop_view = true;
      }
      
  
    }
  
    private _getBlogInfo(id: string) {
      this.loading = true;
      // Get future, public events
      this.blogSub = this.productService
        .getBlogInfo$(id)
        .subscribe(
          res => {
            this.blog = res;
            this.loading = false;
          },
          err => {
            console.error(err);
            this.loading = false;
          }
        );
    }
  
    private _getBlog(id: string) {
      this.loading = true;
      // Get future, public events
      this.blogMSub = this.productService
        .getOtherBlogs$(id)
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
      if(this.blogSub){
        this.blogSub.unsubscribe();
      }
      if(this.blogMSub){
        this.blogMSub.unsubscribe();
      }
    }

}
