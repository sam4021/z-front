import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: './components/pages/home/home.module#HomeModule'
  },
  {
    path: 'product',
    loadChildren: './components/pages/product/product.module#ProductModule'
  },
  {
    path: 'products',
    loadChildren: './components/pages/products/products.module#ProductsModule'
  },
  {
    path: 'cart',
    loadChildren: './components/pages/cart/cart.module#CartModule'
  },
  {
    path: 'checkout',
    loadChildren: './components/pages/checkout/checkout.module#CheckoutModule'
  }, 
  {
    path: 'brand',
    loadChildren: './components/pages/brand/brand.module#BrandModule'
  },
  { 
    path: 'blog',
    loadChildren: './components/pages/blog/blog.module#BlogModule'
  },
  { 
    path: 'blogs',
    loadChildren: './components/pages/blogs/blogs.module#BlogsModule'
  },
  { 
    path: 'offers',
    loadChildren: './components/pages/offers/offers.module#OffersModule'
  },
  { 
    path: 'faq',
    loadChildren: './components/pages/faq/faq.module#FaqModule'
  },
  // { 
  //   path: 'callback',
  //   loadChildren: './components/pages/callback/callback.module#CallbackModule'
  // },
  {
    path: 'search',
    loadChildren: './components/pages/search/search.module#SearchModule'
  },
  {
    path: 'tag',
    loadChildren: './components/pages/tags/tags.module#TagsModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule { }
