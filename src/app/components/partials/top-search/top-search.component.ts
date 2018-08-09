import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router } from "@angular/router";
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-top-search',
  templateUrl: './top-search.component.html',
  styleUrls: ['./top-search.component.css']
})
export class TopSearchComponent implements OnInit {
  mobile_view:boolean = false;
  desktop_view:boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private router: Router) { }
  myform: FormGroup;
  search: FormControl;
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.screen.width >= 320 && window.screen.width <= 480) { // 768px portrait
        this.mobile_view = true;
        this.desktop_view = false;
      } else{
        this.mobile_view = false;
        this.desktop_view = true;
      }
    }
    if (isPlatformServer(this.platformId)) {
      this.mobile_view = false;
      this.desktop_view = true;
    }
    
  }

  form = new FormGroup({
    search: new FormControl('', Validators.required)
  });

  onSearch(id): void {
    let search = this.form.value.search;
    if(search !=''){
      this.router.navigate(['/search',search]);
    }    
  }

}
