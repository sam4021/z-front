import {Deserializable} from "./deserializable.model";
export class Seo implements Deserializable<Seo> {

  // constructor(
  //   public keywords:string,
  //   public description:string
  // ){}
  keywords:string;
  description:string;

  deserialize(input: any): Seo {
      Object.assign(this, input);
      return this;
    }

}
