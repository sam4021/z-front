import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from "../../../services/category/category.service";
import { Category } from "../../../core/models/category.model";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit,OnDestroy {
  menuSub: Subscription;
  menuISub: Subscription;
  private category: any[];
   mainMenu : any;
   inMenu : any;

  constructor(private categoryService: CategoryService) {
      categoryService.categoryData$.subscribe(data => this.mainMenu = data)
      categoryService.categoryIData$.subscribe(data => this.inMenu = data)
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.menuSub){
      this.menuSub.unsubscribe();
    }
    if(this.menuISub){
      this.menuISub.unsubscribe();
    }
  }

}
