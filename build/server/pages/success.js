(()=>{var e={};e.id=2,e.ids=[2,660,888],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8456:e=>{e.exports={successContainer:"styles_successContainer__il_98",imageContainer:"styles_imageContainer__2Z7Us",body:"styles_body__BbNtO"}},8728:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>P,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>d,reportWebVitals:()=>h,routeModule:()=>q,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>g});var i=r(7093),a=r(5244),u=r(1323),n=r(5211),o=r(4807),c=r(1413),l=e([o,c]);[o,c]=l.then?(await l)():l;let p=(0,u.l)(c,"default"),d=(0,u.l)(c,"getStaticProps"),m=(0,u.l)(c,"getStaticPaths"),x=(0,u.l)(c,"getServerSideProps"),P=(0,u.l)(c,"config"),h=(0,u.l)(c,"reportWebVitals"),g=(0,u.l)(c,"unstable_getStaticProps"),f=(0,u.l)(c,"unstable_getStaticPaths"),_=(0,u.l)(c,"unstable_getStaticParams"),S=(0,u.l)(c,"unstable_getServerProps"),b=(0,u.l)(c,"unstable_getServerSideProps"),q=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/success",pathname:"/success",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:c});s()}catch(e){s(e)}})},5211:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Document});var s=r(997),i=r(6859);function Document(){return(0,s.jsxs)(i.Html,{lang:"en",children:[s.jsx(i.Head,{}),(0,s.jsxs)("body",{children:[s.jsx(i.Main,{}),s.jsx(i.NextScript,{})]})]})}},1413:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>m,getServerSideProps:()=>x});var i=r(997),a=r(8456),u=r.n(a),n=r(6778),o=r(2946),c=r.n(o),l=r(9486),p=r.n(l),d=e([n]);function m({customerName:e,sessionId:t,product:r}){return i.jsx(i.Fragment,{children:i.jsx("div",{className:u().body,children:i.jsx("div",{className:u().successContainer,children:(0,i.jsxs)(c(),{elevation:10,sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[i.jsx(p(),{color:"success",fontSize:"large"}),i.jsx("h1",{children:"Compra efetuada com sucesso"}),i.jsx("div",{}),i.jsx("h2",{children:"Parab\xe9ns!"}),i.jsx("strong",{children:e}),(0,i.jsxs)("h2",{children:["Sua compra  do item: ",r.name," foi efetuada com sucesso"]})]})})})})}n=(d.then?(await d)():d)[0];let x=async({query:e,params:t})=>{let r=String(e.session_id),s=await n.A.checkout.sessions.retrieve(r,{expand:["line_items","line_items.data.price.product"]}),i=s.customer_details?.name,a=s.line_items?.data[0].price?.product;return{props:{customerName:i,sessionId:r,product:{name:a.name,description:a.description}}}};s()}catch(e){s(e)}})},6778:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{A:()=>n});var i=r(6090),a=e([i]);i=(a.then?(await a)():a)[0];let u=process.env.STRIPE_SECRET_KEY||"",n=new i.default(u,{apiVersion:"2023-10-16",appInfo:{name:"plataforma-photos",version:"0.1.0"}});s()}catch(e){s(e)}})},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},3013:e=>{"use strict";e.exports=require("@mui/base")},7483:e=>{"use strict";e.exports=require("@mui/base/FocusTrap")},8951:e=>{"use strict";e.exports=require("@mui/base/Portal")},9295:e=>{"use strict";e.exports=require("@mui/base/composeClasses")},5194:e=>{"use strict";e.exports=require("@mui/base/unstable_useModal")},9486:e=>{"use strict";e.exports=require("@mui/icons-material/CheckCircleOutline")},3882:e=>{"use strict";e.exports=require("@mui/material/AppBar")},19:e=>{"use strict";e.exports=require("@mui/material/Box")},3819:e=>{"use strict";e.exports=require("@mui/material/Button")},4475:e=>{"use strict";e.exports=require("@mui/material/Container")},9271:e=>{"use strict";e.exports=require("@mui/material/MenuItem")},1431:e=>{"use strict";e.exports=require("@mui/material/Toolbar")},7163:e=>{"use strict";e.exports=require("@mui/material/Typography")},7986:e=>{"use strict";e.exports=require("@mui/system")},657:e=>{"use strict";e.exports=require("@mui/utils")},8103:e=>{"use strict";e.exports=require("clsx")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},4466:e=>{"use strict";e.exports=require("react-transition-group")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2021:e=>{"use strict";e.exports=import("i18next")},7987:e=>{"use strict";e.exports=import("react-i18next")},6090:e=>{"use strict";e.exports=import("stripe")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[428,100,859,807],()=>r(8728));module.exports=s})();