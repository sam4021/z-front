(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{O2qa:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){},i=e("WUGM"),a=e("Gk9o"),r=e("ZYCi"),o=e("Ip0R"),s=e("X849"),c=e("HPR3"),d=e("RsGG"),p=e("Mk0k").a.BASE_IMAGE,g=function(){function l(l,n,e,u,t,i){this.route=l,this.title=n,this.meta=e,this.utils=u,this.productService=t,this.pagerService=i,this.imageUrl="",this.pager={}}return l.prototype.ngOnInit=function(){var l=this;this.route.params.subscribe(function(n){l.id=n.id,l._getProducts(l.id)}),this.imageUrl=p},l.prototype._getProducts=function(l){var n=this;this.loading=!0,this.productsSub=this.productService.getProductsTags$(l).subscribe(function(l){n.Mainproducts=l,n.products=l,n.count=l.length,n.loading=!1,n.setPage(1)},function(l){console.error(l),n.loading=!1,n.error=!0})},l.prototype.setPage=function(l){l<1||l>this.pager.totalPages||(this.pager=this.pagerService.getPager(this.products.length,l),this.pagedItems=this.products.slice(this.pager.startIndex,this.pager.endIndex+1))},l.prototype.searchList=function(l){var n=[];if(""==l.target.value)this.products=this.Mainproducts,this.count=this.Mainproducts.length,this.pager=this.pagerService.getPager(this.Mainproducts.length,1),this.pagedItems=this.Mainproducts.slice(this.pager.startIndex,this.pager.endIndex+1);else{var e=l.target.value.split(" ");this.Mainproducts.forEach(3==e.length?function(l){-1!=l.title.toLowerCase().indexOf(e[1].toLowerCase())&&-1!=l.title.toLowerCase().indexOf(e[2].toLowerCase())&&n.push(l)}:2==e.length?function(l){-1!=l.title.toLowerCase().indexOf(e[1].toLowerCase())&&n.push(l)}:function(e){-1!=e.title.toLowerCase().indexOf(l.target.value)&&n.push(e)}),this.products=n,this.count=n.length,this.loading=!1,this.setPage(1)}},l.prototype.ngOnDestroy=function(){},l}(),f=e("ZYjt"),m=u["\u0275crt"]({encapsulation:0,styles:[[".header[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]{width:50%;float:left}.header[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700}.tag-count[_ngcontent-%COMP%], .tag-id[_ngcontent-%COMP%]{font-weight:lighter}.search[_ngcontent-%COMP%]{text-align:right}.body[_ngcontent-%COMP%]{border-top:1px solid #02a09b;margin-top:10px}.tag-id[_ngcontent-%COMP%]{font-size:1.2rem}.tag-count[_ngcontent-%COMP%]{font-size:1rem}.col-md-3[_ngcontent-%COMP%]{flex:0 0 20%;max-width:20%}"]],data:{}});function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-loading",[],null,null,null,i.b,i.a)),u["\u0275did"](1,49152,null,0,a.a,[],null,null)],null,null)}function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" Ksh. "," "])),u["\u0275ppd"](2,2)],null,function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,l(n,2,0,u["\u0275nov"](n.parent.parent.parent.parent.parent,0),n.parent.context.$implicit.price,0)))})}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,[" Ksh. "," "])),u["\u0275ppd"](2,2),(l()(),u["\u0275eld"](3,0,null,null,2,"div",[["class","discount"]],null,null,null,null,null)),(l()(),u["\u0275ted"](4,null,[" Ksh. "," "])),u["\u0275ppd"](5,2)],null,function(l,n){l(n,1,0,u["\u0275unv"](n,1,0,l(n,2,0,u["\u0275nov"](n.parent.parent.parent.parent.parent,0),n.parent.context.$implicit.special_price,0))),l(n,4,0,u["\u0275unv"](n,4,0,l(n,5,0,u["\u0275nov"](n.parent.parent.parent.parent.parent,0),n.parent.context.$implicit.price,0)))})}function I(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,2,"div",[["class","ribbon"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Offer"]))],null,null)}function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,17,"div",[["class","col-md-3 col-xs-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,16,"div",[["class","product-container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,15,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,3).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](3,671744,null,0,r.n,[r.m,r.a,o.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275eld"](4,0,null,null,13,"div",[["class","product-inner"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,1,"div",[["class","product-img"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,8,"div",[["class","product-info"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,1,"div",[["class","prod-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](9,null,[" "," "])),(l()(),u["\u0275eld"](10,0,null,null,4,"div",[["class","prod-price"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,v)),u["\u0275did"](12,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](14,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](15,0,null,null,0,"div",[["class","prod-rate"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,I)),u["\u0275did"](17,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,3,0,u["\u0275inlineInterpolate"](1,"/product/",n.context.$implicit.url,"")),l(n,12,0,0==n.context.$implicit.special_price),l(n,14,0,0!=n.context.$implicit.special_price),l(n,17,0,0!=n.context.$implicit.special_price)},function(l,n){var e=n.component;l(n,2,0,u["\u0275nov"](n,3).target,u["\u0275nov"](n,3).href),l(n,6,0,u["\u0275inlineInterpolate"](2,"",e.imageUrl,"/products/",n.context.$implicit.images[0][0],""),u["\u0275inlineInterpolate"](1,"",n.context.$implicit.title,"")),l(n,9,0,n.context.$implicit.title)})}function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,"li",[["class","page-item"]],null,null,null,null,null)),u["\u0275did"](1,278528,null,0,o.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](2,{active:0}),(l()(),u["\u0275eld"](3,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.setPage(l.context.$implicit)&&u),u},null,null)),(l()(),u["\u0275ted"](4,null,["",""]))],function(l,n){l(n,1,0,"page-item",l(n,2,0,n.component.pager.currentPage===n.context.$implicit))},function(l,n){l(n,4,0,n.context.$implicit)})}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,22,"ul",[["class","pagination"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,4,"li",[["class","page-item"]],null,null,null,null,null)),u["\u0275did"](2,278528,null,0,o.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](3,{disabled:0}),(l()(),u["\u0275eld"](4,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.setPage(1)&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["First"])),(l()(),u["\u0275eld"](6,0,null,null,4,"li",[["class","page-item"]],null,null,null,null,null)),u["\u0275did"](7,278528,null,0,o.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](8,{disabled:0}),(l()(),u["\u0275eld"](9,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.setPage(t.pager.currentPage-1)&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Previous"])),(l()(),u["\u0275and"](16777216,null,null,1,null,P)),u["\u0275did"](12,802816,null,0,o.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](13,0,null,null,4,"li",[["class","page-item"]],null,null,null,null,null)),u["\u0275did"](14,278528,null,0,o.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](15,{disabled:0}),(l()(),u["\u0275eld"](16,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.setPage(t.pager.currentPage+1)&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Next"])),(l()(),u["\u0275eld"](18,0,null,null,4,"li",[["class","page-item"]],null,null,null,null,null)),u["\u0275did"](19,278528,null,0,o.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](20,{disabled:0}),(l()(),u["\u0275eld"](21,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.setPage(t.pager.totalPages)&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Last"]))],function(l,n){var e=n.component;l(n,2,0,"page-item",l(n,3,0,1===e.pager.currentPage)),l(n,7,0,"page-item",l(n,8,0,1===e.pager.currentPage)),l(n,12,0,e.pager.pages),l(n,14,0,"page-item",l(n,15,0,e.pager.currentPage===e.pager.totalPages)),l(n,19,0,"page-item",l(n,20,0,e.pager.currentPage===e.pager.totalPages))},null)}function x(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,k)),u["\u0275did"](2,802816,null,0,o.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](3,0,null,null,3,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,2,"nav",[["aria-label","Page navigation example"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,R)),u["\u0275did"](6,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.pagedItems),l(n,6,0,e.pager.pages&&e.pager.pages.length)},null)}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275and"](16777216,null,null,1,null,x)),u["\u0275did"](1,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](0,null,null,0))],function(l,n){l(n,1,0,n.component.products.length)},null)}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275and"](16777216,null,null,1,null,w)),u["\u0275did"](1,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](0,null,null,0))],function(l,n){l(n,1,0,n.component.products)},null)}function O(l){return u["\u0275vid"](0,[u["\u0275pid"](0,o.DecimalPipe,[u.LOCALE_ID]),(l()(),u["\u0275eld"](1,0,null,null,15,"div",[["class","tag-page"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,14,"div",[["class","container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,5,"div",[["class","header"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Tag: "])),(l()(),u["\u0275eld"](5,0,null,null,1,"span",[["class","tag-id"]],null,null,null,null,null)),(l()(),u["\u0275ted"](6,null,["",""])),(l()(),u["\u0275eld"](7,0,null,null,1,"span",[["class","tag-count"]],null,null,null,null,null)),(l()(),u["\u0275ted"](8,null,["( "," Items)"])),(l()(),u["\u0275eld"](9,0,null,null,1,"div",[["class","search"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,0,"input",[["placeholder","search text goes here"]],null,[[null,"keyup"]],function(l,n,e){var u=!0;return"keyup"===n&&(u=!1!==l.component.searchList(e)&&u),u},null,null)),(l()(),u["\u0275eld"](11,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,4,"div",[["class","body"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](14,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](16,16384,null,0,o.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,14,0,e.loading),l(n,16,0,e.utils.isLoaded(e.loading))},function(l,n){var e=n.component;l(n,6,0,e.id),l(n,8,0,e.count)})}var y=u["\u0275ccf"]("app-tags",g,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-tags",[],null,null,null,O,m)),u["\u0275did"](1,245760,null,0,g,[r.a,f.i,f.h,c.a,s.a,d.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),M=e("+zpW");e.d(n,"TagsModuleNgFactory",function(){return _});var _=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[y]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[u.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),u["\u0275mpd"](1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),u["\u0275mpd"](1073742336,M.a,M.a,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,r.k,function(){return[[{path:":id",component:g,pathMatch:"full"}]]},[])])})}}]);