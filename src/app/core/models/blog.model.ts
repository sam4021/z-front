import {Seo} from './seo.model';
export class Blog {
  constructor(
    public title: string,
    public url: string,
    public short_content: string,
    public full_content: string,
    public thumb_image: string,
    public main_image: string,
    public tags: string,
    public status: number,
    public seo: Seo[] = new Array<Seo>(),
    public _id?: string,
  ) { }
}
