var U=Object.defineProperty;var N=(w,s,t)=>s in w?U(w,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[s]=t;var g=(w,s,t)=>(N(w,typeof s!="symbol"?s+"":s,t),t);import{aE as R,aY as l,aO as O,aN as $,bI as F,bJ as T,Z as W,$ as x,bK as D,a1 as M,a2 as V,A as z,B as m,b2 as y,aa as A,a3 as f,a4 as k,ag as L,ak as K,bL as B,Q as S,bM as Q}from"./index.7594c645.js";import{h as Y}from"./hasERC20Allowance-2bfcc7d7.browser.esm.e7b39488.js";import{R as j,a as G}from"./assertEnabled-69ed68b5.browser.esm.8efb3b47.js";import{C as Z,a as H,G as J,b as _,d as X}from"./contract-appuri-29f0e515.browser.esm.2e02750e.js";import{a as b}from"./marketplace-15a16d65.browser.esm.56954ae7.js";import{b as tt}from"./QueryParams-fe3080d5.browser.esm.8226886b.js";import{C as rt}from"./contract-interceptor-d7b164a7.browser.esm.b65ebba9.js";import{C as at,a as et}from"./contract-owner-4df2a33b.browser.esm.0e2ec435.js";import{C as nt}from"./contract-roles-1ae2927f.browser.esm.c5bb18a1.js";import{S as st}from"./erc-1155-standard-2f0c933b.browser.esm.7637ef38.js";import{E as ot}from"./erc-20-c3294714.browser.esm.54109889.js";import{N as ct}from"./setErc20Allowance-bae9b83c.browser.esm.58e86981.js";import"./index.17d63a02.js";import"./erc-1155-f44423d5.browser.esm.2d0d0404.js";import"./drop-claim-conditions-036d1ce4.browser.esm.e3a99c50.js";const v=(()=>R.object({contractAddress:$}))(),dt=(()=>v.extend({quantity:O}))(),it=(()=>v.extend({tokenId:l}))(),pt=(()=>v.extend({tokenId:l,quantity:l}))(),ut=(()=>dt.omit({quantity:!0}).extend({quantityPerReward:O}))(),ht=it,gt=(()=>pt.omit({quantity:!0}).extend({quantityPerReward:l}))(),mt=(()=>ut.extend({totalRewards:l.default("1")}))(),lt=ht,wt=(()=>gt.extend({totalRewards:l.default("1")}))(),q=(()=>R.object({erc20Rewards:R.array(mt).default([]),erc721Rewards:R.array(lt).default([]),erc1155Rewards:R.array(wt).default([])}))(),ft=(()=>q.extend({packMetadata:ct,rewardsPerPack:l.default("1"),openStartTime:j.default(new Date)}))();class kt{constructor(s,t,r,n,a){g(this,"featureName",T.name);g(this,"open",f((()=>{var s=this;return async function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;return k.fromContractWrapper({contractWrapper:s.contractWrapper,method:"openPack",args:[t,r],overrides:{gasLimit:n},parse:a=>{let o=m.from(0);try{o=s.contractWrapper.parseLogs("PackOpenRequested",a==null?void 0:a.logs)[0].args.requestId}catch{}return{receipt:a,id:o}}})}})()));g(this,"claimRewards",f((()=>{var s=this;return async function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5e5;return k.fromContractWrapper({contractWrapper:s.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:t},parse:async r=>{const n=s.contractWrapper.parseLogs("PackOpened",r==null?void 0:r.logs);if(n.length===0)throw new Error("PackOpened event not found");const a=n[0].args.rewardUnitsDistributed;return await s.parseRewards(a)}})}})()));let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:new W(s,t,B,n,r);this.contractWrapper=o,this.storage=r,this.chainId=a,this.events=new _(this.contractWrapper)}onNetworkUpdated(s){this.contractWrapper.updateSignerOrProvider(s)}getAddress(){return this.contractWrapper.address}async parseRewards(s){const t=[],r=[],n=[];for(const a of s)switch(a.tokenType){case 0:{const o=await y(this.contractWrapper.getProvider(),a.assetContract);t.push({contractAddress:a.assetContract,quantityPerReward:A(a.totalAmount,o.decimals).toString()});break}case 1:{r.push({contractAddress:a.assetContract,tokenId:a.tokenId.toString()});break}case 2:{n.push({contractAddress:a.assetContract,tokenId:a.tokenId.toString(),quantityPerReward:a.totalAmount.toString()});break}}return{erc20Rewards:t,erc721Rewards:r,erc1155Rewards:n}}async addPackOpenEventListener(s){return this.events.addEventListener("PackOpened",async t=>{s(t.data.packId.toString(),t.data.opener,await this.parseRewards(t.data.rewardUnitsDistributed))})}async canClaimRewards(s){const t=await L(s||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("canClaimRewards",[t])}async openAndClaim(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;const n=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[s,t,r],{gasLimit:m.from(5e5)});let a=m.from(0);try{a=this.contractWrapper.parseLogs("PackOpenRequested",n==null?void 0:n.logs)[0].args.requestId}catch{}return{receipt:n,id:a}}async getLinkBalance(){const s=(await S(()=>import("./index.7594c645.js").then(t=>t.dA),["assets/index.7594c645.js","assets/index.ac094a7b.css"])).default;return this.getLinkContract(s).balanceOf(this.contractWrapper.address)}async transferLink(s){const t=(await S(()=>import("./index.7594c645.js").then(r=>r.dA),["assets/index.7594c645.js","assets/index.ac094a7b.css"])).default;await this.getLinkContract(t).transfer(this.contractWrapper.address,s)}getLinkContract(s){const t=Q[this.chainId];if(!t)throw new Error(`No LINK token address found for chainId ${this.chainId}`);const r=new W(this.contractWrapper.getSignerOrProvider(),t,s,this.contractWrapper.options,this.storage);return new ot(r,this.storage,this.chainId)}}const P=class extends st{constructor(t,r,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,o,a.gasless&&"openzeppelin"in a.gasless?{...a,gasless:{...a.gasless,openzeppelin:{...a.gasless.openzeppelin,useEOAForwarder:!0}}}:a,n);super(d,n,p);g(this,"create",f(async t=>{const r=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(r,t)}));g(this,"addPackContents",f(async(t,r)=>{const[n,a]=await Promise.all([this.contractWrapper.getSignerAddress(),q.parseAsync(r)]),{contents:o,numOfRewardUnits:p}=await this.toPackContentArgs(a);return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,o,p,n],parse:d=>{const c=this.contractWrapper.parseLogs("PackUpdated",d==null?void 0:d.logs);if(c.length===0)throw new Error("PackUpdated event not found");const e=c[0].args.packId;return{id:e,receipt:d,data:()=>this.erc1155.get(e)}}})}));g(this,"createTo",f(async(t,r)=>{const[n,a,o]=await Promise.all([tt(r.packMetadata,this.storage),ft.parseAsync(r),L(t)]),{erc20Rewards:p,erc721Rewards:d,erc1155Rewards:c}=a,e={erc20Rewards:p,erc721Rewards:d,erc1155Rewards:c},{contents:u,numOfRewardUnits:i}=await this.toPackContentArgs(e);return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[u,i,n,a.openStartTime,a.rewardsPerPack,o],parse:h=>{const I=this.contractWrapper.parseLogs("PackCreated",h==null?void 0:h.logs);if(I.length===0)throw new Error("PackCreated event not found");const E=I[0].args.packId;return{id:E,receipt:h,data:()=>this.erc1155.get(E)}}})}));g(this,"open",f((()=>{var t=this;return async function(r){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;if(t._vrf)throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return k.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[r,n],overrides:{gasLimit:a},parse:async o=>{const p=t.contractWrapper.parseLogs("PackOpened",o==null?void 0:o.logs);if(p.length===0)throw new Error("PackOpened event not found");const d=p[0].args.rewardUnitsDistributed,c=[],e=[],u=[];for(const i of d)switch(i.tokenType){case 0:{const h=await y(t.contractWrapper.getProvider(),i.assetContract);c.push({contractAddress:i.assetContract,quantityPerReward:A(i.totalAmount,h.decimals).toString()});break}case 1:{e.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString()});break}case 2:{u.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString(),quantityPerReward:i.totalAmount.toString()});break}}return{erc20Rewards:c,erc721Rewards:e,erc1155Rewards:u}}})}})()));this.abi=x.parse(o||[]),this.metadata=new Z(this.contractWrapper,D,this.storage),this.app=new H(this.contractWrapper,this.metadata,this.storage),this.roles=new nt(this.contractWrapper,P.contractRoles),this.royalties=new at(this.contractWrapper,this.metadata),this.encoder=new M(this.contractWrapper),this.estimator=new J(this.contractWrapper),this.events=new _(this.contractWrapper),this.interceptor=new rt(this.contractWrapper),this.owner=new et(this.contractWrapper),this._vrf=this.detectVrf()}get vrf(){return G(this._vrf,T)}onNetworkUpdated(t){var r;this.contractWrapper.updateSignerOrProvider(t),(r=this._vrf)==null||r.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[V("transfer"),z])}async getPackContents(t){const{contents:r,perUnitAmounts:n}=await this.contractWrapper.read("getPackContents",[t]),a=[],o=[],p=[];for(let d=0;d<r.length;d++){const c=r[d],e=n[d];switch(c.tokenType){case 0:{const u=await y(this.contractWrapper.getProvider(),c.assetContract),i=A(e,u.decimals),h=A(m.from(c.totalAmount).div(e),u.decimals);a.push({contractAddress:c.assetContract,quantityPerReward:i,totalRewards:h});break}case 1:{o.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString()});break}case 2:{p.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString(),quantityPerReward:e.toString(),totalRewards:m.from(c.totalAmount).div(e).toString()});break}}}return{erc20Rewards:a,erc721Rewards:o,erc1155Rewards:p}}async toPackContentArgs(t){const r=[],n=[],{erc20Rewards:a,erc721Rewards:o,erc1155Rewards:p}=t,d=this.contractWrapper.getProvider(),c=await this.contractWrapper.getSignerAddress();for(const e of a){const i=(await K(d,e.quantityPerReward,e.contractAddress)).mul(e.totalRewards);if(!await Y(this.contractWrapper,e.contractAddress,i))throw new Error(`ERC20 token with contract address "${e.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${e.contractAddress}").setAllowance("${this.getAddress()}", ${i});

`);n.push(e.totalRewards),r.push({assetContract:e.contractAddress,tokenType:0,totalAmount:i,tokenId:0})}for(const e of o){if(!await b(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,c))throw new Error(`ERC721 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${e.contractAddress}").setApprovalForToken("${this.getAddress()}", ${e.tokenId});

`);n.push("1"),r.push({assetContract:e.contractAddress,tokenType:1,totalAmount:1,tokenId:e.tokenId})}for(const e of p){if(!await b(this.contractWrapper.getProvider(),this.getAddress(),e.contractAddress,e.tokenId,c))throw new Error(`ERC1155 token "${e.tokenId}" with contract address "${e.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${e.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);n.push(e.totalRewards),r.push({assetContract:e.contractAddress,tokenType:2,totalAmount:m.from(e.quantityPerReward).mul(m.from(e.totalRewards)),tokenId:e.tokenId})}return{contents:r,numOfRewardUnits:n}}async prepare(t,r,n){return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}detectVrf(){if(X(this.contractWrapper,"PackVRF"))return new kt(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.address,this.storage,this.contractWrapper.options,this.chainId)}};let C=P;g(C,"contractRoles",F);export{C as Pack};