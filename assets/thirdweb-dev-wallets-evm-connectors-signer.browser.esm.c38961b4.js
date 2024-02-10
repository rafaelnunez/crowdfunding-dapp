import{C as u,w as h,_ as l,x as w,y as e,z as a,g as c}from"./index.7594c645.js";var i=new WeakMap,s=new WeakMap;class y extends u{constructor(t){super(),h(this,i,{writable:!0,value:void 0}),h(this,s,{writable:!0,value:void 0}),l(this,"onChainChanged",n=>{const r=w(n),p=!this.options.chains.find(g=>g.chainId===r);this.emit("change",{chain:{id:r,unsupported:p}})}),this.options=t}async connect(t){return t.chainId&&this.switchChain(t.chainId),await(await this.getSigner()).getAddress()}async disconnect(){e(this,i,void 0),e(this,s,void 0)}async getAddress(){const t=await this.getSigner();if(!t)throw new Error("No signer found");return await t.getAddress()}async isConnected(){try{return!!await this.getAddress()}catch{return!1}}async getProvider(){return a(this,i)||e(this,i,c(this.options.chain,{clientId:this.options.clientId,secretKey:this.options.secretKey})),a(this,i)}async getSigner(){if(!a(this,s)){const t=await this.getProvider();e(this,s,d(this.options.signer,t))}return a(this,s)}async switchChain(t){const n=this.options.chains.find(r=>r.chainId===t);if(!n)throw new Error(`Chain not found for chainId ${t}, please add it to the chains property when creating this wallet`);e(this,i,c(n,{clientId:this.options.clientId,secretKey:this.options.secretKey})),e(this,s,d(this.options.signer,a(this,i))),this.onChainChanged(t)}async setupListeners(){}updateChains(t){this.options.chains=t}}function d(o,t){return t?o.connect(t):o}export{y as SignerConnector};
