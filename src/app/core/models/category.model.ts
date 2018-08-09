import {Seo} from './seo.model';
import {Deserializable} from "./deserializable.model";
export class Category  implements Deserializable<Category>{

  constructor(
    public top :{
      title:string,
    url:string,
    parent:string,
    // public seo: Seo
    seo: Object,
     top_ad:{
      img:string,
      link:string
    },
    footer_seo: string
    }
  ){}

  deserialize(input: any): Category {
    Object.assign(this, input);
    this.top.seo = new Seo().deserialize(input.seo);
    return this;
  }

}
