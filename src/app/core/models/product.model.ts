import {ProductDescription } from './prod_description.model';
import {Seo} from './seo.model';
export class Product {

  constructor(
    public title: string,
    public url: string,
    public price: number,
    public special_price: number,
    public category: string,
    public brand: string,
    public attribute: string,
    public description: ProductDescription,
    public images:Object,
    public tags:Object,
    public seo: Seo[] = new Array<Seo>(),
    public _id: string,
  ) { }
}
