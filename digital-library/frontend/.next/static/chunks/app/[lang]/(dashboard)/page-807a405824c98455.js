(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8501:function(e,t,l){Promise.resolve().then(l.bind(l,8819))},8819:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var r=l(7437),s=l(9289),n={src:"/_next/static/media/add-square.e9ef529e.svg",height:41,width:41,blurWidth:0,blurHeight:0},a=l(6691),d=l.n(a),i=l(1396),c=l.n(i),o=l(8994),u=l(3525),p=l(4033),f=()=>{let{arrayDoc:e,dispatch:t}=(0,o.b)(),{push:l}=(0,p.useRouter)();return s.default,s.default,s.default,s.default,s.default,(0,r.jsxs)("div",{className:"w-full h-full p-4  ",children:[(0,r.jsx)("h1",{className:"mb-4 text-3xl",children:"My Documents"}),(0,r.jsxs)("div",{className:"flex flex-wrap w-full gap-5 mb-14",children:[(0,r.jsx)(c(),{href:"add-document",children:(0,r.jsxs)("div",{className:"lg:w-56 lg:h-56 w-48 h-48 bg-[#B0D0C7] pt-3 px-2 pb-4 rounded-xl  flex flex-col",children:[(0,r.jsx)("p",{children:"Add New Document"}),(0,r.jsx)("div",{className:"w-full flex-grow flex justify-center items-center  bg-[#D9E8E4] mt-2",children:(0,r.jsx)(d(),{src:n,alt:""})})]})}),e.length>0&&e.map((e,s)=>(0,r.jsxs)("div",{className:"lg:w-56 lg:h-56 w-48 h-48 bg-[#B0D0C7] pt-3 px-2 pb-1 rounded-xl  flex flex-col cursor-pointer",onClick:()=>{e.id&&t((0,u.dU)(e.id)),l("/view-document")},children:[(0,r.jsx)("p",{className:"truncate",children:e.name}),(0,r.jsx)("div",{className:"w-full flex-grow mb-1 border  flex justify-center items-center  overflow-hidden mt-2",children:(0,r.jsx)(d(),{src:e.url,alt:"",width:30,height:30,className:"w-full h-full "})}),(0,r.jsx)("p",{className:"truncate",children:e.categorie})]},s))]})]})}},8994:function(e,t,l){"use strict";l.d(t,{b:function(){return s}});var r=l(3046);let s=()=>{let e=(0,r.v9)(e=>e.AddDocument.step1),t=(0,r.v9)(e=>e.AddDocument.step2),l=(0,r.v9)(e=>e.AddDocument.step3),s=(0,r.v9)(e=>e.AddDocument.step4),n=(0,r.v9)(e=>e.AddDocument.id),a=(0,r.v9)(e=>e.AddDocument.arrayDocs);return{step1:e,dispatch:(0,r.I0)(),step2:t,step3:l,step4:s,arrayDoc:a,idDoc:n}}},3525:function(e,t,l){"use strict";l.d(t,{K2:function(){return s},Zg:function(){return n},dU:function(){return i},eX:function(){return a},je:function(){return d}});let r=(0,l(9730).oM)({name:"auth",initialState:{step1:{categorie:"",type:""},step2:{author:"",name:"",description:"",coverImage:void 0,url:"",ibsn:""},step3:{file:void 0,urlFile:""},step4:"",arrayDocs:[],id:""},reducers:{step1Handler:(e,t)=>{e.step1=t.payload},step2Handler:(e,t)=>{e.step2=t.payload},step3Handler:(e,t)=>{e.step3=t.payload,console.log(t.payload,"payload.............."),console.log("111111111111",URL.createObjectURL(e.step2.coverImage))},step4Handler:(e,t)=>{e.arrayDocs=[...e.arrayDocs,{...e.step1,...e.step2,confidentiality:t.payload,...e.step3,id:(e.arrayDocs.length+1).toString(),num:0,save:!1}],e.step1={categorie:"",type:""},e.step2={author:"",name:"",description:"",coverImage:void 0,ibsn:"",url:""},e.step3={file:void 0,urlFile:""},e.step4=""},idHandler:(e,t)=>{e.id=t.payload,console.log(t.payload,"id++++++++++")}}}),{step1Handler:s,step2Handler:n,step3Handler:a,step4Handler:d,idHandler:i}=r.actions;t.ZP=r.reducer},9289:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/overview.68eaa8dc.svg",height:797,width:781,blurWidth:0,blurHeight:0}},1396:function(e,t,l){e.exports=l(5250)}},function(e){e.O(0,[209,758,250,971,938,744],function(){return e(e.s=8501)}),_N_E=e.O()}]);