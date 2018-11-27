import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { HeaderModule } from './components/partials/header/header.module';
import { FooterModule } from './components/partials/footer/footer.module';

import { ProductsService } from './services/products/products.service';
import { CategoryService } from './services/category/category.service';
import { FilterSortService } from './services/filter/filter-sort.service';
import { DatePipe } from '@angular/common';
import { UtilsService } from './services/utils/utils.service';
import { LocalStorageService, StorageService } from "./services/storage/storage.service";
import { CartService } from "./services/cart/cart.service";
import { CheckoutService } from "./services/checkout/checkout.service";
import { PagerService } from "./services/pager/pager.service";
import { AlertService } from "./services/alert/alert.service";

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { UpcomingComponent } from './components/pages/upcoming/upcoming.component';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("Your-Google-Client-Id")
        },
      ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TransferHttpCacheModule,
    HeaderModule,
    FooterModule,
    DeviceDetectorModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    Title,
    ProductsService,
    CategoryService,
    CheckoutService,
    PagerService,
    AlertService,
    DatePipe,
    UtilsService,
    FilterSortService,
    LocalStorageService,
    { provide: StorageService, useClass: LocalStorageService },
    {
      deps: [StorageService, ProductsService],
      provide: CartService,
      useClass: CartService
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
