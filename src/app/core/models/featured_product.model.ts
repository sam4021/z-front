import {Product } from './product.model';
import {Seo} from './seo.model';
export class FeaturedProduct {

  constructor(
    public product: Array<any>,
    //public product: Product[] = new Array<Product>(),
    public _id?: string,
  ) { }
}
