import{Q as l,Z as w}from"./index.7594c645.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index.7594c645.js").then(i=>i.dA),["assets/index.7594c645.js","assets/index.ac094a7b.css"])).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};