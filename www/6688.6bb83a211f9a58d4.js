"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6688],{6688:(P,d,a)=>{a.r(d),a.d(d,{LoginPageModule:()=>f});var p=a(177),l=a(4341),t=a(5150),c=a(8986),n=a(3953),h=a(9379);const m=[{path:"",component:(()=>{var o;class s{constructor(i,e){this.authService=i,this.router=e,this.usuario="",this.password=""}login(){this.authService.loginUser(this.usuario,this.password)?this.router.navigate(["menu-ppal"]):alert("Usuario o contrase\xf1a incorrectos")}registrar(){this.router.navigate(["./registro"])}limpiar(){this.usuario="",this.password=""}ngOnInit(){this.usuario="",this.password=""}}return(o=s).\u0275fac=function(i){return new(i||o)(n.rXU(h.u),n.rXU(c.Ix))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-login"]],decls:19,vars:2,consts:[["position","floating"],[3,"ngModelChange","ngModel"],["type","password",3,"ngModelChange","ngModel"],["expand","full",3,"click"]],template:function(i,e){1&i&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n.EFF(3,"Inicio de Sesi\xf3n"),n.k0s()()(),n.j41(4,"ion-content")(5,"ion-item")(6,"ion-label",0),n.EFF(7,"Usuario"),n.k0s(),n.j41(8,"ion-input",1),n.mxI("ngModelChange",function(r){return n.DH7(e.usuario,r)||(e.usuario=r),r}),n.k0s()(),n.j41(9,"ion-item")(10,"ion-label",0),n.EFF(11,"Password"),n.k0s(),n.j41(12,"ion-input",2),n.mxI("ngModelChange",function(r){return n.DH7(e.password,r)||(e.password=r),r}),n.k0s()(),n.j41(13,"ion-button",3),n.bIt("click",function(){return e.login()}),n.EFF(14,"Iniciar Sesi\xf3n"),n.k0s(),n.j41(15,"ion-button",3),n.bIt("click",function(){return e.registrar()}),n.EFF(16,"Registrarse"),n.k0s(),n.j41(17,"ion-button",3),n.bIt("click",function(){return e.limpiar()}),n.EFF(18,"Limpiar"),n.k0s()()),2&i&&(n.R7$(8),n.R50("ngModel",e.usuario),n.R7$(4),n.R50("ngModel",e.password))},dependencies:[l.BC,l.vS,t.Jm,t.W9,t.eU,t.$w,t.uz,t.he,t.BC,t.ai,t.Gw]}),s})()}];let L=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[c.iI.forChild(m),c.iI]}),s})(),f=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[p.MD,l.YN,t.bv,L]}),s})()}}]);