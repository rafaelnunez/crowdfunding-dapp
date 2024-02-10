var Z=Object.defineProperty;var z=(m,t,e)=>t in m?Z(m,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[t]=e;var i=(m,t,e)=>(z(m,typeof t!="symbol"?t+"":t,e),e);import{a as c,S as J,E as Q}from"./assertEnabled-69ed68b5.browser.esm.8efb3b47.js";import{d as u,b as j,G as X,C as b,a as k}from"./contract-appuri-29f0e515.browser.esm.2e02750e.js";import{B as f,b_ as D,b$ as l,a3 as d,c0 as N,t as L,c1 as tt,a4 as A,a7 as S,c2 as et,c3 as rt,$ as w,c4 as I,ap as T,bZ as at,c5 as O,c6 as _,c7 as U,c8 as q,c9 as x,ca as nt,cb as st,cc as it,cd as ot,ce as G,cf as H,cg as $,ch as ct,bD as V,ag as y,a as Y,ci as pt,aE as v,aO as dt,aN as K,Z as mt,a1 as ut,aF as F,cj as ht,ad as gt,ao as lt,ar as ft,am as At,af as yt,bN as wt,bn as Wt,as as Et,ab as vt,bi as St,bj as Tt,bk as Pt}from"./index.7594c645.js";import{v as B}from"./index.17d63a02.js";import{C as xt}from"./contract-interceptor-d7b164a7.browser.esm.b65ebba9.js";import{C as Ct,a as Rt}from"./contract-owner-4df2a33b.browser.esm.0e2ec435.js";import{C as bt}from"./contract-platform-fee-e278431a.browser.esm.90911659.js";import{C as Ft}from"./contract-roles-1ae2927f.browser.esm.c5bb18a1.js";import{C as Dt}from"./contract-sales-cefc823c.browser.esm.45d3b2d4.js";import{E as Nt}from"./erc-1155-f44423d5.browser.esm.2d0d0404.js";import{E as It}from"./erc-20-c3294714.browser.esm.54109889.js";import{E as Mt}from"./erc-721-434e5a52.browser.esm.a9781991.js";import{M as kt,a as Lt,b as Ot}from"./marketplacev3-offers-95bada01.browser.esm.e02bc12a.js";import"./setErc20Allowance-bae9b83c.browser.esm.58e86981.js";import"./QueryParams-fe3080d5.browser.esm.8226886b.js";import"./drop-claim-conditions-036d1ce4.browser.esm.e3a99c50.js";import"./cleanCurrencyAddress-870d4ccc.browser.esm.04b33de5.js";import"./marketplace-15a16d65.browser.esm.56954ae7.js";let g=function(m){return m[m.None=0]="None",m[m.AddAdmin=1]="AddAdmin",m[m.RemoveAdmin=2]="RemoveAdmin",m}({});const C={startDate:f.from(0),expirationDate:f.from(0),approvedCallTargets:[],nativeTokenLimitPerTransaction:"0"},M=(()=>v.object({startDate:J,expirationDate:Q,nativeTokenLimitPerTransaction:dt.default(0),approvedCallTargets:v.union([v.array(K),v.literal("*")])}))(),_t=(()=>v.array(v.object({signer:K,makeAdmin:v.boolean(),permissions:M})))(),Ut=[{name:"signer",type:"address"},{name:"approvedTargets",type:"address[]"},{name:"nativeTokenLimitPerTransaction",type:"uint256"},{name:"permissionStartTimestamp",type:"uint128"},{name:"permissionEndTimestamp",type:"uint128"},{name:"reqValidityStartTimestamp",type:"uint128"},{name:"reqValidityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],qt=[{name:"signer",type:"address"},{name:"isAdmin",type:"uint8"},{name:"approvedTargets",type:"address[]"},{name:"nativeTokenLimitPerTransaction",type:"uint256"},{name:"permissionStartTimestamp",type:"uint128"},{name:"permissionEndTimestamp",type:"uint128"},{name:"reqValidityStartTimestamp",type:"uint128"},{name:"reqValidityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}];class Vt{constructor(t){i(this,"featureName",l.name);i(this,"grantAdminPermissions",d(async t=>{const e=await y(t);return await this.sendSignerPermissionRequest(e,C,g.AddAdmin)}));i(this,"revokeAdminPermissions",d(async t=>{const e=await y(t);return await this.sendSignerPermissionRequest(e,C,g.RemoveAdmin)}));i(this,"grantPermissions",d(async(t,e)=>{const r=await y(t),a=await M.parseAsync(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot grant permissions to an existing admin.");if(await this.isSigner(r))throw new Error("Signer already has permissions. Cannot grant permissions to an existing signer. You can update permissions using `updatePermissions`.");return await this.sendSignerPermissionRequest(r,a,g.None)}));i(this,"updatePermissions",d(async(t,e)=>{const r=await y(t),a=await M.parseAsync(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot update permissions of an existing admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");return await this.sendSignerPermissionRequest(r,a,g.None)}));i(this,"revokeAccess",d(async t=>{const e=await y(t);if(await this.isAdmin(e))throw new Error("Signer is already an admin. Cannot revoke permissions of an admin.");if(!await this.isSigner(e))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");return await this.sendSignerPermissionRequest(e,{startDate:f.from(0),expirationDate:f.from(0),approvedCallTargets:[],nativeTokenLimitPerTransaction:"0"},g.None)}));i(this,"approveTargetForSigner",d(async(t,e)=>{const r=await y(t),a=await y(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot approve targets for an admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");const n=await this.contractWrapper.read("getPermissionsForSigner",[r]);if(n.approvedTargets.includes(e))throw new Error("Target is already approved");const s=[...n.approvedTargets,a];return await this.sendSignerPermissionRequest(r,{startDate:f.from(n.startTimestamp),expirationDate:f.from(n.endTimestamp),approvedCallTargets:s,nativeTokenLimitPerTransaction:n.nativeTokenLimitPerTransaction.toString()},g.None)}));i(this,"disapproveTargetForSigner",d(async(t,e)=>{const r=await y(t),a=await y(e);if(await this.isAdmin(r))throw new Error("Signer is already an admin. Cannot approve targets for an admin.");if(!await this.isSigner(r))throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");const n=await this.contractWrapper.read("getPermissionsForSigner",[r]);if(!n.approvedTargets.includes(a))throw new Error("Target is currently not approved");const s=n.approvedTargets.filter(o=>Y(o)!==Y(a));return await this.sendSignerPermissionRequest(r,{startDate:f.from(n.startTimestamp),expirationDate:f.from(n.endTimestamp),approvedCallTargets:s,nativeTokenLimitPerTransaction:n.nativeTokenLimitPerTransaction.toString()},g.None)}));i(this,"resetAllPermissions",d(async t=>{const e=await _t.parseAsync(t);if(this.hasDuplicateSigners(e))throw new Error("Duplicate signers found in input.");const r=[],a=[],n=[],s=await this.getAllAdmins(),o=e.filter(p=>p.makeAdmin).map(p=>p.signer);s.forEach(async p=>{if(!o.includes(p)){const h=(await this.sendSignerPermissionRequest(p,C,g.RemoveAdmin)).encode();r.push(h)}});const W=await this.getAllSigners(),P=e.filter(p=>!p.makeAdmin).map(p=>p.signer);await Promise.all(W.map(async p=>{if(!P.includes(p.signer)){const h=(await this.sendSignerPermissionRequest(p.signer,C,g.None)).encode();n.push(h)}}));for(const p of e)if(p.makeAdmin)(await this.sendSignerPermissionRequest(p.signer,C,g.AddAdmin)).encode();else{const h=(await this.sendSignerPermissionRequest(p.signer,p.permissions,g.None)).encode();a.push(h)}const E=[];return r.forEach(p=>{E.push(p)}),n.forEach(p=>{E.push(p)}),a.forEach(p=>{E.push(p)}),A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[E]})}));this.contractWrapper=t}getAddress(){return this.contractWrapper.address}hasDuplicateSigners(t){const e={},r=t.map(a=>a.signer);for(const a of r)if(!e[a])e[a]=!0;else return!0;return!1}parseSignerPermissionsStruct(t){return{startDate:new Date(parseInt(t.startTimestamp.toString())*1e3),expirationDate:new Date(parseInt(t.endTimestamp.toString())*1e3),nativeTokenLimitPerTransaction:f.from(t.nativeTokenLimitPerTransaction),approvedCallTargets:t.approvedTargets}}async sendSignerPermissionRequest(t,e,r){if(u(this.contractWrapper,"AccountPermissionsV1")){if(r===g.AddAdmin||r===g.RemoveAdmin)return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setAdmin",args:[t,r===g.AddAdmin]});{const{payload:s,signature:o}=await this.generateLegacyPayload(t,e);return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPermissionsForSigner",args:[s,o]})}}const{payload:a,signature:n}=await this.generatePayload(t,e,r);return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPermissionsForSigner",args:[a,n]})}async generatePayload(t,e,r){const a={signer:t,isAdmin:r.valueOf(),approvedTargets:e.approvedCallTargets==="*"?[ct]:e.approvedCallTargets,nativeTokenLimitPerTransaction:V(e.nativeTokenLimitPerTransaction),permissionStartTimestamp:e.startDate,permissionEndTimestamp:e.expirationDate,reqValidityStartTimestamp:0,reqValidityEndTimestamp:f.from(Math.floor(new Date(Date.now()+31536e7).getTime()/1e3)),uid:B(void 0)},n=await this.contractWrapper.getChainID(),s=this.contractWrapper.getSigner();T(s,"No signer available");const o=await this.contractWrapper.signTypedData(s,{name:"Account",version:"1",chainId:n,verifyingContract:this.getAddress()},{SignerPermissionRequest:qt},a);return{payload:a,signature:o}}async generateLegacyPayload(t,e){if(e.approvedCallTargets==="*")throw new Error("Wildcard call targets are not supported on legacy account permissions contract, please deploy an updated contract factory.");const r={signer:t,approvedTargets:e.approvedCallTargets,nativeTokenLimitPerTransaction:V(e.nativeTokenLimitPerTransaction),permissionStartTimestamp:e.startDate,permissionEndTimestamp:e.expirationDate,reqValidityStartTimestamp:0,reqValidityEndTimestamp:f.from(Math.floor(new Date(Date.now()+1e3*60*60*24*365*10).getTime()/1e3)),uid:B(void 0)},a=await this.contractWrapper.getChainID(),n=this.contractWrapper.getSigner();T(n,"No signer available");const s=await this.contractWrapper.signTypedData(n,{name:"Account",version:"1",chainId:a,verifyingContract:this.getAddress()},{SignerPermissionRequest:Ut},r);return{payload:r,signature:s}}async isAdmin(t){const e=await y(t);return await this.contractWrapper.read("isAdmin",[e])}async isSigner(t){const e=await y(t);return await this.contractWrapper.read("isActiveSigner",[e])}async getAllAdmins(){return await this.contractWrapper.read("getAllAdmins",[])}async getAllSigners(){const t=await this.contractWrapper.read("getAllActiveSigners",[]);return await Promise.all(t.map(async e=>{const r=e.signer,a=this.parseSignerPermissionsStruct(e);return{signer:r,permissions:a}}))}async getAllAdminsAndSigners(){const e=(await this.getAllAdmins()).map(a=>({isAdmin:!0,signer:a,permissions:{startDate:new Date(0),expirationDate:new Date(0),nativeTokenLimitPerTransaction:f.from(0),approvedCallTargets:[]}})),r=await this.getAllSigners();return[...e,...r]}}class Yt{constructor(t){i(this,"featureName",D.name);i(this,"grantAdminPermissions",d(async t=>c(this.accountPermissions,l).grantAdminPermissions.prepare(t)));i(this,"revokeAdminPermissions",d(async t=>c(this.accountPermissions,l).revokeAdminPermissions.prepare(t)));i(this,"grantPermissions",d(async(t,e)=>c(this.accountPermissions,l).grantPermissions.prepare(t,e)));i(this,"updatePermissions",d(async(t,e)=>c(this.accountPermissions,l).updatePermissions.prepare(t,e)));i(this,"revokeAccess",d(async t=>c(this.accountPermissions,l).revokeAccess.prepare(t)));i(this,"approveTargetForSigner",d(async(t,e)=>c(this.accountPermissions,l).approveTargetForSigner.prepare(t,e)));i(this,"disapproveTargetForSigner",d(async(t,e)=>c(this.accountPermissions,l).disapproveTargetForSigner.prepare(t,e)));i(this,"resetAllPermissions",d(async t=>c(this.accountPermissions,l).resetAllPermissions.prepare(t)));this.contractWrapper=t,this.accountPermissions=this.detectAccountPermissions()}detectAccountPermissions(){if(u(this.contractWrapper,"AccountPermissions")||u(this.contractWrapper,"AccountPermissionsV1"))return new Vt(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async isAdmin(t){return c(this.accountPermissions,l).isAdmin(t)}async isSigner(t){return c(this.accountPermissions,l).isSigner(t)}async getAllAdmins(){return c(this.accountPermissions,l).getAllAdmins()}async getAllSigners(){return c(this.accountPermissions,l).getAllSigners()}async getAllAdminsAndSigners(){return c(this.accountPermissions,l).getAllAdminsAndSigners()}}class Bt{constructor(t){i(this,"featureName",N.name);i(this,"createAccount",d(async(t,e)=>{if(await this.isAccountDeployed(t,e))throw new Error(`Account already deployed for admin: ${t}`);let r=L("");return e&&(r=e),A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createAccount",args:[t,r],parse:a=>({address:this.contractWrapper.parseLogs("AccountCreated",a==null?void 0:a.logs)[0].args.account,receipt:a})})}));this.contractWrapper=t,this.events=new j(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async predictAccountAddress(t,e){let r=L("");return e&&(r=e),this.contractWrapper.read("getAddress",[t,r])}async getAssociatedAccounts(t){return this.contractWrapper.read("getAccountsOfSigner",[t])}async getAllAccounts(){return await this.contractWrapper.read("getAllAccounts",[])}async isAccountDeployed(t,e){const r=await this.predictAccountAddress(t,e);return tt(r,this.contractWrapper.getProvider())}}function jt(m,t){const r=w.parse(m||[]).filter(n=>n.type==="event"),a=[];for(const n of r){const s=pt(n.name,t,"events");a.push({inputs:n.inputs||[],outputs:n.outputs||[],name:n.name||"unknown",comment:s})}return a}class Gt{constructor(t,e){this.contractWrapper=t,this.storage=e}async get(){return this._cachedMetadata?this._cachedMetadata:(this._cachedMetadata=await S(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options),this._cachedMetadata)}async extractSources(){const t=await this.get();return et(t,this.storage)}async extractFunctions(){let t;try{t=await this.get()}catch{}return rt(w.parse(this.contractWrapper.abi),t==null?void 0:t.metadata)}async extractEvents(){let t;try{t=await this.get()}catch{}return jt(w.parse(this.contractWrapper.abi),t==null?void 0:t.metadata)}}class Ht{constructor(t){i(this,"featureName",I.name);i(this,"add",d(async t=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addExtension",args:[t.extension],parse:async e=>{if(this.contractWrapper.parseLogs("ExtensionAdded",e.logs).length<1)throw new Error("No ExtensionAdded event found");const a=t.extensionAbi?w.parse(t.extensionAbi):(await S(t.extension.metadata.implementation,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,n=this.filterAbiForAdd(a,t.extension),s=O([w.parse(this.contractWrapper.abi),n]);return this.contractWrapper.updateAbi(s),e}})));i(this,"addDeployed",d(async t=>{let e=t.extensionAbi;e||(e=(await S(t.extensionAddress,this.contractWrapper.getProvider(),this.contractWrapper.storage,this.contractWrapper.options)).abi),T(e,"Require extension ABI");let r="";if(t.extensionMetadata)if(typeof t.extensionMetadata=="string")r=t.extensionMetadata;else{const s=await _.parseAsync(t.extensionMetadata);r=await this.contractWrapper.storage.upload(s)}const a=U(w.parse(e)),n={metadata:{name:t.extensionName,metadataURI:r,implementation:t.extensionAddress},functions:a};return this.add.prepare({extension:n,extensionAbi:e})}));i(this,"addPublished",d(async t=>{const e=t.version||"latest",{deployedExtensionAddress:r,extensionMetadata:a}=await this.deployExtension(t.extensionName,t.publisherAddress||q,e);return this.addDeployed.prepare({extensionName:t.extensionName,extensionAddress:r,extensionMetadata:t.extensionMetadataOverride||a})}));i(this,"replace",d(async t=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"replaceExtension",args:[t.extension],parse:async e=>{if(this.contractWrapper.parseLogs("ExtensionReplaced",e.logs).length<1)throw new Error("No ExtensionReplaced event found");const a=t.extensionAbi?w.parse(t.extensionAbi):(await S(t.extension.metadata.implementation,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,n=this.filterAbiForRemove(w.parse(this.contractWrapper.abi),a),s=this.filterAbiForAdd(a,t.extension),o=O([n,s]);return this.contractWrapper.updateAbi(o),e}})));i(this,"replaceDeployed",d(async t=>{let e=t.extensionAbi;e||(e=(await S(t.extensionAddress,this.contractWrapper.getProvider(),this.contractWrapper.storage,this.contractWrapper.options)).abi),T(e,"Require extension ABI");let r="";if(t.extensionMetadata)if(typeof t.extensionMetadata=="string")r=t.extensionMetadata;else{const s=await _.parseAsync(t.extensionMetadata);r=await this.contractWrapper.storage.upload(s)}const a=U(w.parse(e)),n={metadata:{name:t.extensionName,metadataURI:r,implementation:t.extensionAddress},functions:a};return this.replace.prepare({extension:n,extensionAbi:e})}));i(this,"replacePublished",d(async t=>{const e=t.version||"latest",{deployedExtensionAddress:r,extensionMetadata:a}=await this.deployExtension(t.extensionName,t.publisherAddress||q,e);return this.replaceDeployed.prepare({extensionName:t.extensionName,extensionAddress:r,extensionMetadata:t.extensionMetadataOverride||a})}));i(this,"remove",d(async t=>{const e=await this.getExtensionAddress(t.extensionName);return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"removeExtension",args:[t.extensionName],parse:async r=>{if(this.contractWrapper.parseLogs("ExtensionRemoved",r.logs).length<1)throw new Error("No ExtensionRemoved event found");const n=(await S(e,this.contractWrapper.getProvider(),this.contractWrapper.storage)).abi,s=this.filterAbiForRemove(w.parse(this.contractWrapper.abi),n);return this.contractWrapper.updateAbi(s),r}})}));this.contractWrapper=t}getAddress(){return this.contractWrapper.readContract.address}async getAll(){return await this.contractWrapper.readContract.getAllExtensions()}async get(t){return await this.contractWrapper.readContract.getExtension(t)}async getExtensionAddress(t){return(await this.get(t)).metadata.implementation}async getAllFunctions(t){return(await this.get(t)).functions}async getExtensionForFunction(t){let e=t.functionSelector;return e||(T(t.functionSignature,"Atleast one of function selector and signature must be provided"),e=at(t.functionSignature).substring(0,10)),await this.contractWrapper.readContract.getMetadataForFunction(e)}async getExtensionAddressForFunction(t){return(await this.getExtensionForFunction(t)).implementation}filterAbiForAdd(t,e){const r=new x(t),a=e.functions.map(s=>s.functionSelector);return t.filter(s=>{const o=Object.values(new x([s]).functions);if(o.length===0)return!1;const W=r.getSighash(o[0]);return a.includes(W)})}filterAbiForRemove(t,e){const r=new x(t),a=new x(e),n=Object.values(a.functions).map(o=>a.getSighash(o));return t.filter(o=>{const W=Object.values(new x([o]).functions);if(W.length===0)return!1;const P=r.getSighash(W[0]);return!n.includes(P)})}async deployExtension(t,e){var p;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"latest";const a=await nt(e,t,r,this.contractWrapper.storage,this.contractWrapper.options.clientId,this.contractWrapper.options.secretKey),n=await st(a.metadataUri,this.contractWrapper.storage,this.contractWrapper.getProvider(),"",this.contractWrapper.options.clientId,this.contractWrapper.options.secretKey),s=(p=n.find(h=>h.type==="implementation"))==null?void 0:p.transaction.predictedAddress,o=n.filter(h=>h.transaction.data&&h.transaction.data.length>0),W=o.filter(h=>h.type!=="infra").map(h=>h.transaction),P=o.filter(h=>h.type==="infra").map(h=>h.transaction),E=this.contractWrapper.getSigner();T(E,"Signer is required"),await it(E,P,{});for(const h of W)try{await ot(E,h)}catch(R){console.debug(`Error deploying contract at ${h.predictedAddress}`,R==null?void 0:R.message)}return{deployedExtensionAddress:s,extensionMetadata:a.metadataUri}}}class $t{constructor(t){i(this,"featureName",G.name);i(this,"drop",d(async(t,e,r)=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC20",args:[t,e,r],parse:a=>{const s=this.contractWrapper.parseLogs("AirdropFailed",a.logs).map(o=>({recipient:o.args.recipient,amount:o.args.amount.toString()}));return{successfulDropCount:r.length-s.length,failedDropCount:s.length,failedDrops:s}}})));this.contractWrapper=t}getAddress(){return this.contractWrapper.address}}class Kt{constructor(t){i(this,"featureName",H.name);i(this,"drop",d(async(t,e,r)=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC721",args:[t,e,r],parse:a=>{const s=this.contractWrapper.parseLogs("AirdropFailed",a.logs).map(o=>({recipient:o.args.recipient,tokenId:o.args.tokenId.toNumber()}));return{successfulDropCount:r.length-s.length,failedDropCount:s.length,failedDrops:s}}})));this.contractWrapper=t}getAddress(){return this.contractWrapper.address}}class Zt{constructor(t){i(this,"featureName",$.name);i(this,"drop",d(async(t,e,r)=>A.fromContractWrapper({contractWrapper:this.contractWrapper,method:"airdropERC1155",args:[t,e,r],parse:a=>{const s=this.contractWrapper.parseLogs("AirdropFailed",a.logs).map(o=>({recipient:o.args.recipient,tokenId:o.args.tokenId.toNumber(),amount:o.args.amount.toString()}));return{successfulDropCount:r.length-s.length,failedDropCount:s.length,failedDrops:s}}})));this.contractWrapper=t}getAddress(){return this.contractWrapper.address}}class le{get abi(){return w.parse(this.contractWrapper.abi||[])}get royalties(){return c(this.detectRoyalties(),gt)}get roles(){return c(this.detectRoles(),lt)}get sales(){return c(this.detectPrimarySales(),ft)}get platformFees(){return c(this.detectPlatformFees(),At)}get owner(){return c(this.detectOwnable(),yt)}get erc20(){return c(this.detectErc20(),wt)}get erc721(){return c(this.detectErc721(),Wt)}get erc1155(){return c(this.detectErc1155(),Et)}get app(){return c(this.detectApp(),vt)}get directListings(){return c(this.detectDirectListings(),St)}get englishAuctions(){return c(this.detectEnglishAuctions(),Tt)}get offers(){return c(this.detectOffers(),Pt)}get airdrop20(){return c(this.detectAirdrop20(),G)}get airdrop721(){return c(this.detectAirdrop721(),H)}get airdrop1155(){return c(this.detectAirdrop1155(),$)}get accountFactory(){return c(this.detectAccountFactory(),N)}get account(){return c(this.detectAccount(),D)}get extensions(){return c(this.detectBaseRouter(),I)}get chainId(){return this._chainId}constructor(t,e,r,a){let n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},s=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new mt(t,e,r,n,a);this._chainId=s,this.storage=a,this.contractWrapper=o,this.events=new j(this.contractWrapper),this.encoder=new ut(this.contractWrapper),this.interceptor=new xt(this.contractWrapper),this.estimator=new X(this.contractWrapper),this.publishedMetadata=new Gt(this.contractWrapper,this.storage),this.metadata=new b(this.contractWrapper,F,this.storage)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}prepare(t,e,r){return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}detectRoyalties(){if(u(this.contractWrapper,"Royalty")){const t=new b(this.contractWrapper,F,this.storage);return new Ct(this.contractWrapper,t)}}detectRoles(){if(u(this.contractWrapper,"Permissions"))return new Ft(this.contractWrapper,ht)}detectPrimarySales(){if(u(this.contractWrapper,"PrimarySale"))return new Dt(this.contractWrapper)}detectPlatformFees(){if(u(this.contractWrapper,"PlatformFee"))return new bt(this.contractWrapper)}detectErc20(){if(u(this.contractWrapper,"ERC20"))return new It(this.contractWrapper,this.storage,this.chainId)}detectErc721(){if(u(this.contractWrapper,"ERC721"))return new Mt(this.contractWrapper,this.storage,this.chainId)}detectErc1155(){if(u(this.contractWrapper,"ERC1155"))return new Nt(this.contractWrapper,this.storage,this.chainId)}detectOwnable(){if(u(this.contractWrapper,"Ownable"))return new Rt(this.contractWrapper)}detectApp(){const t=new b(this.contractWrapper,F,this.storage);if(u(this.contractWrapper,"AppURI"))return new k(this.contractWrapper,t,this.storage);if(u(this.contractWrapper,"ContractMetadata"))return new k(this.contractWrapper,t,this.storage)}detectDirectListings(){if(u(this.contractWrapper,"DirectListings"))return new kt(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(u(this.contractWrapper,"EnglishAuctions"))return new Lt(this.contractWrapper,this.storage)}detectOffers(){if(u(this.contractWrapper,"Offers"))return new Ot(this.contractWrapper,this.storage)}detectBaseRouter(){if(u(this.contractWrapper,I.name))return new Ht(this.contractWrapper)}detectAirdrop20(){if(u(this.contractWrapper,"AirdropERC20"))return new $t(this.contractWrapper)}detectAirdrop721(){if(u(this.contractWrapper,"AirdropERC721"))return new Kt(this.contractWrapper)}detectAirdrop1155(){if(u(this.contractWrapper,"AirdropERC1155"))return new Zt(this.contractWrapper)}detectAccountFactory(){if(u(this.contractWrapper,N.name))return new Bt(this.contractWrapper)}detectAccount(){if(u(this.contractWrapper,D.name))return new Yt(this.contractWrapper)}}export{le as SmartContract};
