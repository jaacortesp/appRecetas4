"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1612],{1612:(C,p,i)=>{i.r(p),i.d(p,{SpoonacularPageModule:()=>P});var g=i(177),s=i(4341),e=i(5150),u=i(8986),n=i(3953),h=i(3157);const d=o=>["/recipe-detail",o];function m(o,r){if(1&o&&(n.j41(0,"ion-item",3)(1,"ion-thumbnail",0),n.nrm(2,"img",4),n.k0s(),n.j41(3,"ion-label")(4,"h2"),n.EFF(5),n.k0s(),n.j41(6,"p"),n.EFF(7),n.k0s()()()),2&o){const a=r.$implicit;n.Y8G("routerLink",n.eq3(5,d,a.id)),n.R7$(2),n.FS9("alt",a.title),n.Y8G("src",a.image,n.B4B),n.R7$(3),n.JRh(a.title),n.R7$(2),n.SpI("Ready in ",a.readyInMinutes," minutes")}}const f=[{path:"",component:(()=>{var o;class r{constructor(t){this.spoonacularService=t,this.recipes=[],this.searchQuery=""}ngOnInit(){}searchRecipes(){this.searchQuery.trim().length>0&&this.spoonacularService.searchRecipes(this.searchQuery).subscribe(t=>{this.recipes=t.results})}}return(o=r).\u0275fac=function(t){return new(t||o)(n.rXU(h.H))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-spoonacular"]],decls:10,vars:2,consts:[["slot","start"],[3,"ngModelChange","ionInput","ngModel"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[3,"src","alt"]],template:function(t,c){1&t&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n.EFF(3,"Spoonacular Recipes"),n.k0s(),n.j41(4,"ion-buttons",0),n.nrm(5,"ion-back-button"),n.k0s()()(),n.j41(6,"ion-content")(7,"ion-searchbar",1),n.mxI("ngModelChange",function(l){return n.DH7(c.searchQuery,l)||(c.searchQuery=l),l}),n.bIt("ionInput",function(){return c.searchRecipes()}),n.k0s(),n.j41(8,"ion-list"),n.DNE(9,m,8,7,"ion-item",2),n.k0s()()),2&t&&(n.R7$(7),n.R50("ngModel",c.searchQuery),n.R7$(2),n.Y8G("ngForOf",c.recipes))},dependencies:[g.Sq,s.BC,s.vS,e.QW,e.W9,e.eU,e.uz,e.he,e.nf,e.S1,e.Zx,e.BC,e.ai,e.Gw,e.el,e.N7,u.Wk],styles:["ion-header[_ngcontent-%COMP%]{--background: #f8f8f8}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: #fff}ion-content[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}"]}),r})()}];let S=(()=>{var o;class r{}return(o=r).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[u.iI.forChild(f),u.iI]}),r})(),P=(()=>{var o;class r{}return(o=r).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[g.MD,s.YN,e.bv,S]}),r})()}}]);