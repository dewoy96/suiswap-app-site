(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{89301:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return c(4476)}])},4476:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return N}});var d=c(47568),e=c(29815),f=c(34051),g=c.n(f),h=c(85893),i=c(67294),j=c(93731),k=c(95192),l=c(86577),m=c(64278),n=c(88197),o=c(57318),p=c(79097),q=c(25675),r=c.n(q),s=c(90998),t=c(2766),u=function(a){var b,c,d,e,f=a.poolInfo,g=a.getCoinUi,i=a.onClickDeposit,j=a.depositButtonEnabled,l=g(f.type.xTokenType),m=g(f.type.yTokenType),n=f.getPrice()*Math.pow(10,null!==(b=l.demical)&& void 0!==b?b:0)/Math.pow(10,null!==(c=m.demical)&& void 0!==c?c:0);return(0,h.jsxs)("div",{className:"pool-info-frame",children:[(0,h.jsxs)("div",{className:"pool-info-left-frame",children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Pool Token"}),(0,h.jsxs)("div",{className:"pool-info-left-frame-detail-frame",children:[(0,h.jsxs)("div",{className:"pool-info-left-frame-detail-frame-token-pair",children:[(0,h.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",position:"absolute"},children:(0,h.jsx)(r(),{src:null!==(d=l.logoUrl)&& void 0!==d?d:s.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29})}),(0,h.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",margin:"0px 0px 0px 17px"},children:(0,h.jsx)(r(),{src:null!==(e=m.logoUrl)&& void 0!==e?e:s.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,width:29,height:29})})]}),(0,h.jsxs)("span",{className:"pool-info-left-frame-detail-frame-token-pair-info",children:[(0,h.jsx)("span",{children:l.symbol}),(0,h.jsx)("span",{style:{fontWeight:400},children:"/"}),(0,h.jsx)("span",{children:m.symbol})]})]})]}),(0,h.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Price"}),(0,h.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{children:(0,t.IZ)(n.toFixed(8))}),(0,h.jsx)("span",{children:" "}),(0,h.jsxs)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:[l.symbol,"/",m.symbol]})]})})]}),(0,h.jsx)(k.Hq,{enabled:j,icon:!0,onClick:function(){void 0!==i&&i(f)}})]})},v=function(a){var b=a.pools,c=a.getCoinUi,d=a.onClickDeposit,e=a.depositButtonEnabled;return(0,h.jsx)("div",{className:"pool-panel-frame",children:b.map(function(a){return(0,h.jsx)(u,{depositButtonEnabled:e,poolInfo:a,getCoinUi:c,onClickDeposit:d},"".concat(a.addr,"-").concat(a.type.xTokenType.name,"-").concat(a.type.yTokenType.name))})})},w=function(a){var b=a.pools,c=a.getCoinUi,d=a.onClickDeposit,e=a.depositButtonEnabled;return(0,h.jsxs)("div",{className:"pool-section-frame",children:[(0,h.jsx)(k.NZ,{children:"Pool"}),(0,h.jsx)(v,{getCoinUi:c,depositButtonEnabled:e,pools:b,onClickDeposit:d})]})},x=c(90286),y=c(49694),z=function(){var a,b,c,d=(0,y.Yb)(),e=null!==(a=d.twitter)&& void 0!==a?a:"https://twitter.com",f=null!==(b=d.github)&& void 0!==b?b:"https://github.com/vividnetwork",g=null!==(c=d.discord)&& void 0!==c?c:"https://discord.com";return(0,h.jsxs)("div",{className:"bottom-section-frame",children:[(0,h.jsxs)("div",{className:"bottom-section-frame-inner-frame",children:[(0,h.jsxs)("div",{className:"bottom-section-frame-inner-frame-left-frame",children:[(0,h.jsx)(x.TR,{size:60}),(0,h.jsx)("span",{children:"Vivid Network"})]}),(0,h.jsxs)("div",{className:"bottom-section-frame-inner-frame-right-frame",children:[(0,h.jsx)(p.iv,{href:e,children:"Twitter"}),(0,h.jsx)(p.iv,{href:f,children:"Github"}),(0,h.jsx)(p.iv,{href:g,children:"Discord"})]})]}),(0,h.jsx)("div",{style:{width:"1px",height:"80px"}})]})},A=c(828),B=c(6628),C=c(86875),D=function(a){var b=a.onClick,c=a.wallet,d=a.client,e=a.enabledMintButton,f=[],g=(0,y.$1)("app-position-section-extra-buttons");return void 0!==g&&(f=g.map(function(a){var b=a.title,f=a.action;return(0,h.jsx)("button",{disabled:!e,onClick:function(){null!==c&&null!==d&& void 0!==c.executeRawTransaction&&(0,C.pn)(d,b[0]+" "+b[1],c.executeRawTransaction(d,f))},className:"position-mint-token-frame-button",children:(0,h.jsxs)("span",{className:"position-mint-token-frame-button-inner-span",children:[b[0]," ",(0,h.jsxs)("span",{style:{fontWeight:700},children:[b[1],"!"]})]})},b[0]+b[1])})),(0,h.jsxs)("div",{className:"position-mint-token-frame",children:[(0,h.jsx)("span",{className:"position-mint-token-frame-title",children:"Mint Some Test Token For Test"}),(0,h.jsxs)("div",{className:"position-button-group-frame",children:[(0,h.jsx)("button",{disabled:!e,onClick:b,className:"position-mint-token-frame-button",children:(0,h.jsxs)("span",{className:"position-mint-token-frame-button-inner-span",children:["Mint ",(0,h.jsx)("span",{style:{fontWeight:700},children:"tAPTS!"})]})},"uniq-mint-tAPTS"),f]})]})},E=function(a){var b,c,d,e,f=a.positionInfo,g=a.getCoinUi,i=a.onClickHarvestButton,j=f.poolInfo,l=j.type.xTokenType,m=j.type.yTokenType,n=g(l),o=g(m),p=f.getShareRatio(),q=(0,A.Z)(f.getShareCoinAmounts(),2),u=q[0],v=q[1],w="";w=p<1e-4?(0,t.IZ)((1e4*p).toFixed(8),8)+"‱":p<.001?(0,t.IZ)((1e3*p).toFixed(8),8)+"‰":(0,t.IZ)(Math.min(100*p,100).toFixed(8),8)+"%";var x=new B.NS(u,null!==(b=n.demical)&& void 0!==b?b:0),y=new B.NS(v,null!==(c=o.demical)&& void 0!==c?c:0),z=null!==(d=n.logoUrl)&& void 0!==d?d:s.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH,C=null!==(e=o.logoUrl)&& void 0!==e?e:s.d_.DEFAULT_UNKNOWN_COIN_UI_LOGO_PATH;return(0,h.jsxs)("div",{className:"pool-info-frame",children:[(0,h.jsxs)("div",{className:"pool-info-left-frame",children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Pool Token"}),(0,h.jsxs)("div",{className:"pool-info-left-frame-detail-frame",children:[(0,h.jsxs)("div",{className:"pool-info-left-frame-detail-frame-token-pair",children:[(0,h.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",position:"absolute"},children:(0,h.jsx)(r(),{src:z,width:29,height:29})}),(0,h.jsx)("div",{style:{borderRadius:"17px",overflow:"hidden",margin:"0px 0px 0px 17px"},children:(0,h.jsx)(r(),{src:C,width:29,height:29})})]}),(0,h.jsxs)("span",{className:"pool-info-left-frame-detail-frame-token-pair-info",children:[(0,h.jsx)("span",{children:n.symbol}),(0,h.jsx)("span",{style:{fontWeight:400},children:"/"}),(0,h.jsx)("span",{children:o.symbol})]})]})]}),(0,h.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",style:{width:"90px"},children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Share"}),(0,h.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,h.jsx)("span",{children:w})})]}),(0,h.jsxs)("div",{className:"pool-info-middle-frame-detail-frame",style:{width:"260px"},children:[(0,h.jsx)("span",{className:"pool-info-left-frame-title",children:"Value"}),(0,h.jsx)("div",{className:"pool-info-middle-frame-detail-frame-price-info",children:(0,h.jsxs)("span",{children:[(0,h.jsx)(k.$z,{fontSize:16,value:x}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:" "}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:n.symbol}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:"/"}),(0,h.jsx)(k.$z,{fontSize:16,value:y}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:" "}),(0,h.jsx)("span",{style:{fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:o.symbol})]})})]}),(0,h.jsx)(k.eV,{enabled:!0,onClick:i})]})},F=function(a){var b=a.wallet,c=a.client,d=a.positionInfos,e=a.getCoinUi,f=a.onClickPositionInfoHarvestButton,g=a.onClickMintTestToken,i=a.enabledMintButton;return(0,h.jsxs)("div",{className:"position-panel-frame",children:[(null!=d?d:[]).map(function(a){return(0,h.jsx)(E,{positionInfo:a,getCoinUi:e,onClickHarvestButton:function(){void 0!==f&&f(a)}},a.lspCoin.addr)}),(0,h.jsx)(D,{wallet:b,client:c,enabledMintButton:i,onClick:g})]})},G=function(a){var b=a.wallet,c=a.client,d=a.positionInfos,e=a.getCoinUi,f=a.onClickPositionInfoHarvestButton,g=a.enabledMintButton,i=a.onClickMintTestToken;return(0,h.jsxs)("div",{className:"position-section-frame",children:[(0,h.jsx)(k.NZ,{children:"Position"}),(0,h.jsx)(F,{wallet:b,client:c,positionInfos:d,getCoinUi:e,onClickPositionInfoHarvestButton:f,enabledMintButton:g,onClickMintTestToken:i})]})},H=c(28713),I=c(56116),J=function(a){var b,c,d=a.coin,e=a.coinUi,f=new B.NS(d.balance,null!==(b=e.demical)&& void 0!==b?b:0);return(0,h.jsxs)("div",{className:"balance-info-frame",children:[(0,h.jsxs)("div",{className:"balance-info-token-name-frame",children:[(0,h.jsx)("span",{className:"balance-info-title-span",children:"Token"}),(0,h.jsxs)("div",{className:"balance-info-token-info-frame",children:[(0,h.jsx)(r(),{src:null!==(c=e.logoUrl)&& void 0!==c?c:"/images/token/unknown-token.svg",width:29,height:29}),(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"600",fontSize:"20px",lineHeight:"30px",color:"#000000"},children:e.symbol}),(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:void 0!==e.name?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{children:"("}),e.name,(0,h.jsx)("span",{children:")"})]}):(0,h.jsx)(h.Fragment,{})})]})]})]}),(0,h.jsxs)("div",{className:"balance-info-balance-amount-frame",children:[(0,h.jsx)("span",{className:"balance-info-title-span",children:"Balance"}),(0,h.jsxs)("span",{style:{},children:[(0,h.jsxs)("span",{style:{fontStyle:"normal",fontWeight:"600",fontSize:"16px",lineHeight:"24px",color:"#000000"},children:[(0,h.jsx)(k.$z,{fontSize:16,hintFontSize:8,value:f,width:13}),(0,h.jsx)("span",{children:" "})]}),(0,h.jsx)("span",{style:{fontStyle:"normal",fontWeight:"600",fontSize:"12px",lineHeight:"18px",color:"#9da3ae"},children:e.symbol})]})]})]})},K=function(a){var b=a.info;return(0,h.jsxs)("div",{className:"balance-section-frame",children:[(0,h.jsx)(k.NZ,{children:"Balance"}),b.map(function(a){var b=(0,A.Z)(a,2),c=b[0],d=b[1];return(0,h.jsx)(J,{coin:c,coinUi:d},"".concat(c.addr,"-").concat(c.type.name))})]})},L=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k.UJ,{}),(0,h.jsx)(n.t,{children:(0,h.jsx)(m.z,{children:(0,h.jsx)(j.R,{children:(0,h.jsxs)(H.S,{children:[(0,h.jsx)(M,{}),(0,h.jsx)(C.tP,{})]})})})})]})},M=function(){var a=(0,j.s)(),b=a.client,c=a.coins,f=a.getCoinUi,q=a.pools,r=a.refresh,s=(0,i.useMemo)(function(){var a=(0,e.Z)(q);return a.sort(function(a,b){var c;return(a.isAvaliableForSwap()?0:1)-(b.isAvaliableForSwap()?0:1)}),a},[q]),t=(0,i.useMemo)(function(){return s.filter(function(a){return!1===a.freeze})},[s]),u=(0,m.O)(),v=u.wallet,x=u.connected,y=(0,H.K)(),A=y.accountAddr,B=y.positionInfos,D=y.refreshPositionInfos,E=y.accountCoins,F=y.refreshAccountCoins,J=(0,i.useMemo)(function(){return new Set(c.map(function(a){return a.name}))},[c]),L=null!==v&&"connected"===x&&null!==A,M=(0,i.useCallback)(function(a){if(null===v|| !1===L||null===b){(0,C._N)("Cannot correctly sign the operation, wallet is either not connected or we could not operate the sign operation");return}var c,e=(c=(0,d.Z)(g().mark(function c(){var d;return g().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.removeLiqudity({client:b,positionInfo:a});case 3:return d=c.sent,D(),r(),c.abrupt("return",d);case 9:throw c.prev=9,c.t0=c.catch(0),c.t0;case 12:case"end":return c.stop()}},c,null,[[0,9]])})),function(){return c.apply(this,arguments)});(0,C.pn)(b,"Harvest Position",e())},[v,L,C.pn,C._N,D,r]),N=(0,i.useState)(null),O=N[0],P=N[1],Q=(0,i.useState)(!1),R=Q[0],S=Q[1],T=(0,i.useCallback)(function(a){P(a),S(!0)},[]),U=(0,i.useCallback)(function(){if(!L||null===b){(0,C._N)("Wallet is not connected or encoutering error when signing");return}var a,c,e=null!==(a=f(v.getMintTestCoinType()).demical)&& void 0!==a?a:0,h=(c=(0,d.Z)(g().mark(function a(){var c;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.mintTestCoin({client:b,amount:BigInt(1e3)*(0,I.$)(BigInt(10),e)});case 2:return c=a.sent,F(),a.abrupt("return",c);case 5:case"end":return a.stop()}},a)})),function(){return c.apply(this,arguments)});(0,C.pn)(b,"Mint Test Token",h())},[L,b,v,C.pn,F,f]),V=(0,i.useMemo)(function(){return Array.from(null!=E?E:[]).filter(function(a){return J.has(a.type.name)}).sort(function(a,b){return a.type.name<b.type.name?-1:a.type.name>b.type.name?1:0}).map(function(a){return[a,f(a.type)]})},[E,J,f]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)(k.Ku,{width:1290,children:[(0,h.jsx)(p.Oh,{}),(0,h.jsx)(l.Jh,{}),V.length>0?(0,h.jsx)(K,{info:V}):(0,h.jsx)(h.Fragment,{}),(0,h.jsx)(G,{wallet:v,client:b,positionInfos:B,getCoinUi:f,onClickPositionInfoHarvestButton:M,onClickMintTestToken:U,enabledMintButton:L}),(0,h.jsx)(w,{pools:t,getCoinUi:f,onClickDeposit:T,depositButtonEnabled:L}),(0,h.jsx)(k.nv,{}),(0,h.jsx)(z,{})]}),(0,h.jsx)(n.u,{presented:R,setPresented:S,children:(0,h.jsx)(o.TJ,{poolInfo:O,getCoinUi:f,wallet:v,client:b,accountAddr:A,dismissModal:function(){S(!1)}})})]})},N=L}},function(a){a.O(0,[675,5,192,224,774,888,179],function(){var b;return a(a.s=89301)}),_N_E=a.O()}])