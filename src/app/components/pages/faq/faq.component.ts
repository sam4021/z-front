import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  pageTitle = 'Frequently Asked Questions :: Phone And Tablets Kenya';
  constructor(
    private title: Title,
    private meta: Meta,) {
      // this.meta.addTag({ rel: 'canonical', href:'https://www.zuricart.co.ke/'  });
      // this.meta.addTag({ name: 'description', content:'Online Shopping : Buy Mobile Phones, Tablets, Televisions, Laptops , Cameras &  More | Best Prices In Kenya | Responsive Customer Support | Fast Shipping'  });
      // this.meta.addTag({ name: 'keywords', content: 'Phones & Tablets Kenya, Faqs, faq, frequently asked questions, Buy Phones and Tablets online, mobile, tablets , televisions in Kenya, Laptops, cameras' });
     }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }


}
