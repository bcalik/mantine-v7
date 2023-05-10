(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6962],{34270:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/rem",function(){return s(92306)}])},92306:function(e,n,s){"use strict";s.r(n);var r=s(85893),c=s(11151),i=s(34940),o=s(25263);let t=(0,i.A)(o.us.Rem);function d(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rem-em-and-px-units",children:"rem, em and px units"}),"\n",(0,r.jsx)(n.h2,{id:"rem-and-em-units",children:"rem and em units"}),"\n",(0,r.jsxs)(n.p,{children:["All Mantine components use ",(0,r.jsx)(n.code,{children:"rem"})," units to apply size styles. ",(0,r.jsx)(n.code,{children:"1rem"})," is always ",(0,r.jsx)(n.code,{children:"16px"})," – it cannot be changed.\nAll components scale based on user's browser font-size settings."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"em"})," units are supposed to be used only in media queries. ",(0,r.jsx)(n.code,{children:"1em"})," is considered to be ",(0,r.jsx)(n.code,{children:"16px"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"px-conversions",children:"px conversions"}),"\n",(0,r.jsxs)(n.p,{children:["You can use numbers in some Mantine components props. Numbers are treated as ",(0,r.jsx)(n.code,{children:"px"})," and converted to ",(0,r.jsx)(n.code,{children:"rem"}),", for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { ColorSwatch } from \'@mantine/core\';\n\nfunction DemoPx() {\n  // Specify ColorSwatch size in px, it will be automatically converted to rem\n  // Width and height of ColorSwatch in this case will be 32px / 16 = 2rem\n  return <ColorSwatch color="#000" size={32} />;\n}\n\nfunction DemoRem() {\n  // This demo will have the same size as previous one\n  return <ColorSwatch color="#000" size="2rem" />;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The same conversion happens in ",(0,r.jsx)(n.a,{href:"/styles/style-props/",children:"style props"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  // width: 2rem,\n  // height: 1rem\n  return <Box w={32} h={16} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rem-and-em-function",children:"rem and em function"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package exports ",(0,r.jsx)(n.code,{children:"rem"})," and ",(0,r.jsx)(n.code,{children:"em"})," function that can be used to convert ",(0,r.jsx)(n.code,{children:"px"})," into ",(0,r.jsx)(n.code,{children:"rem"}),"/",(0,r.jsx)(n.code,{children:"em"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { rem, em } from '@mantine/core';\n\n// numbers and values in px are converted to rem\nrem(32); // -> 2rem\nem(32); // -> 2em\nrem('16px'); // -> 1rem\nem('16px'); // -> 1em\n\n// other values are returned as is\nrem('2rem'); // -> 2rem\nem('2rem'); // -> 2rem\n\nrem('50%'); // -> 50%\nem('50%'); // -> 50%\n\nrem('5vh'); // -> 5vh\nem('5vh'); // -> 5vh\n"})}),"\n",(0,r.jsx)(n.h2,{id:"convert-rem-to-px",children:"Convert rem to px"}),"\n",(0,r.jsxs)(n.p,{children:["To convert ",(0,r.jsx)(n.code,{children:"rem"}),"/",(0,r.jsx)(n.code,{children:"em"})," to ",(0,r.jsx)(n.code,{children:"px"})," use ",(0,r.jsx)(n.code,{children:"px"})," function exported from ",(0,r.jsx)(n.code,{children:"@mantine/core"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { px } from '@mantine/core';\n\npx('2rem'); // -> 32\npx('10rem'); // -> 160\n"})}),"\n",(0,r.jsx)(n.h2,{id:"remem-functions-in-css-files",children:"rem/em functions in css files"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:"rem"})," and ",(0,r.jsx)(n.code,{children:"em"})," function in ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"css files"})," if\n",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," is installed:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".demo {\n  font-size: rem(16px);\n\n  @media (min-width: em(320px)) {\n    font-size: rem(32px);\n  }\n}\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(d,e)}))}}},function(e){e.O(0,[4878,9341,4940,9774,2888,179],function(){return e(e.s=34270)}),_N_E=e.O()}]);