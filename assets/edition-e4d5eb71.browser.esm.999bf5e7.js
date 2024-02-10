var l=Object.defineProperty;var d=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var a=(o,e,t)=>(d(o,typeof e!="symbol"?e+"":e,t),t);import{Y as g,Z as C,$ as y,b8 as W,a1 as f,a2 as w,A as T,a3 as s,a4 as A}from"./index.7594c645.js";import{C as S,a as R,G as b,b as E}from"./contract-appuri-29f0e515.browser.esm.2e02750e.js";import{C as O}from"./contract-interceptor-d7b164a7.browser.esm.b65ebba9.js";import{C as B,a as F}from"./contract-owner-4df2a33b.browser.esm.0e2ec435.js";import{C as M}from"./contract-platform-fee-e278431a.browser.esm.90911659.js";import{C as v}from"./contract-roles-1ae2927f.browser.esm.c5bb18a1.js";import{C as I}from"./contract-sales-cefc823c.browser.esm.45d3b2d4.js";import{a as N}from"./erc-1155-f44423d5.browser.esm.2d0d0404.js";import{S as P}from"./erc-1155-standard-2f0c933b.browser.esm.7637ef38.js";import"./setErc20Allowance-bae9b83c.browser.esm.58e86981.js";import"./QueryParams-fe3080d5.browser.esm.8226886b.js";import"./index.17d63a02.js";import"./assertEnabled-69ed68b5.browser.esm.8efb3b47.js";const i=class extends P{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,p,h,n);super(u,n,m);a(this,"mint",s(async t=>this.erc1155.mint.prepare(t)));a(this,"mintTo",s(async(t,r)=>this.erc1155.mintTo.prepare(t,r)));a(this,"mintAdditionalSupply",s(async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r)));a(this,"mintAdditionalSupplyTo",s(async(t,r,n)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,n)));a(this,"mintBatch",s(async t=>this.erc1155.mintBatch.prepare(t)));a(this,"mintBatchTo",s(async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r)));a(this,"burn",s(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=y.parse(p||[]),this.metadata=new S(this.contractWrapper,W,this.storage),this.app=new R(this.contractWrapper,this.metadata,this.storage),this.roles=new v(this.contractWrapper,i.contractRoles),this.royalties=new B(this.contractWrapper,this.metadata),this.sales=new I(this.contractWrapper),this.encoder=new f(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new E(this.contractWrapper),this.platformFees=new M(this.contractWrapper),this.interceptor=new O(this.contractWrapper),this.signature=new N(this.contractWrapper,this.storage,this.roles),this.owner=new F(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[w("transfer"),T])}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async prepare(t,r,n){return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};let c=i;a(c,"contractRoles",g);export{c as Edition};