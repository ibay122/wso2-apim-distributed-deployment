(this.webpackJsonp=this.webpackJsonp||[]).push([[14],{1296:function(e,t){e.exports=function(e,t,a,s){var n=new Blob(void 0!==s?[s,e]:[e],{type:a||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(n,t);else{var i=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(n):window.webkitURL.createObjectURL(n),l=document.createElement("a");l.style.display="none",l.href=i,l.setAttribute("download",t),void 0===l.download&&l.setAttribute("target","_blank"),document.body.appendChild(l),l.click(),setTimeout((function(){document.body.removeChild(l),window.URL.revokeObjectURL(i)}),200)}}},5751:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(1819),l=a(2397),r=a(5729),o=a(2399),c=a(5715),d=a(5711),g=a(5725),p=a(1296),h=a.n(p),m=a(1777),u=a(1770),k=a(66),b=a.n(k),w=a(1016),f=a(306),S=a(1027),E=a(1086),v=a(32),y=a(14),C=a(308);function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class L extends n.a.Component{constructor(e){super(e),D(this,"handleClick",(e,t)=>{const a=this.api_uuid,s=t;this.getSdkForApi(a,s)}),D(this,"handleChange",e=>{const{sdkLanguages:t}=this.state;let a=t;a=a.filter(t=>-1!==t.toLowerCase().search(e.target.value.toLowerCase())),this.setState({items:a})}),D(this,"addDefaultSrc",e=>{e.target.src=y.app.context+"/site/public/images/sdks/default.svg"}),this.state={sdkLanguages:null,items:null};const{match:t,apiId:a}=this.props;this.api_uuid=t?t.params.apiUuid:a,this.filter_threshold=5,this.getSdkForApi=this.getSdkForApi.bind(this),this.handleClick=this.handleClick.bind(this),this.handleChange=this.handleChange.bind(this),this.addDefaultSrc=this.addDefaultSrc.bind(this)}componentDidMount(){const e=new C.a;if(null!=v.a.getUser()){e.getSdkLanguages().then(e=>{0!==e.obj.length?(this.setState({sdkLanguages:e.obj}),this.setState({items:e.obj})):this.setState({sdkLanguages:!1})}).catch(e=>{console.log(e),S.a.error(e)})}}getSdkForApi(e,t){(new C.a).getSdk(e,t).then(e=>{const t=e.headers["content-disposition"].match(/filename="(.+)"/)[1],a=e.data;h()(a,t)}).catch(e=>{console.log(e),S.a.error(e)})}render(){const e=this.state.items,{onlyIcons:t,intl:a,classes:s,theme:p}=this.props,{custom:{apiDetailPages:{onlyShowSdks:h}}}=p,k=e&&e.length>0&&h&&h.length>0?e.filter(e=>h.includes(e.toLowerCase())):e;return t?k&&n.a.createElement(n.a.Fragment,null,k.map((e,t)=>t<3&&n.a.createElement(g.a,{item:!0,xs:4,key:e},n.a.createElement("a",{onClick:t=>this.handleClick(t,e),onKeyDown:t=>this.handleClick(t,e),style:{cursor:"pointer"}},n.a.createElement("img",{alt:e,src:y.app.context+"/site/public/images/sdks/"+String(e)+".svg",style:{width:80,height:80,margin:10}}))))):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:s.titleWrappper},n.a.createElement(u.a,{variant:"h4",component:"h2",className:s.titleSub},n.a.createElement(f.a,{id:"Apis.Details.Sdk.title",defaultMessage:"Software Development Kits (SDKs)"})),k&&this.state.sdkLanguages.length>=this.filter_threshold&&n.a.createElement(m.a,{variant:"outlined",id:"search",label:a.formatMessage({defaultMessage:"Search SDK",id:"Apis.Details.Sdk.search.sdk"}),type:"text",margin:"normal",name:"searchSdk",onChange:this.handleChange})),k?n.a.createElement(g.a,{container:!0,spacing:0,className:s.gridRoot},n.a.createElement(g.a,{item:!0,xs:12,sm:6,md:9,lg:9,xl:10},n.a.createElement(g.a,{container:!0,justify:"flex-start",spacing:4},k.map(e=>n.a.createElement(g.a,{key:e,item:!0},n.a.createElement("div",{style:{width:"auto",textAlign:"center",margin:"10px"}},n.a.createElement(l.a,{className:s.cardRoot},n.a.createElement("div",null,e.toString().toUpperCase()),n.a.createElement(d.a,null),n.a.createElement(o.a,{title:e.toString().toUpperCase(),src:y.app.context+"/site/public/images/sdks/"+String(e)+".svg",classes:{root:s.cardTitle}},n.a.createElement("img",{alt:e,onError:this.addDefaultSrc,src:`${y.app.context}/site/public/images/sdks/${e}.svg`,style:{width:"100px",height:"100px",margin:"30px"}})),n.a.createElement(r.a,null,n.a.createElement(g.a,{container:!0,justify:"center"},n.a.createElement(i.a,{color:"secondary",onClick:t=>this.handleClick(t,e),"aria-label":"Download "+e+" SDK"},n.a.createElement(c.a,null,"arrow_downward"),n.a.createElement(f.a,{id:"Apis.Details.Sdk.download.btn",defaultMessage:"Download"}))))))))))):n.a.createElement("div",{className:s.genericMessageWrapper},n.a.createElement(E.a,{type:"info",className:s.dialogContainer},n.a.createElement(u.a,{variant:"h5",component:"h3"},n.a.createElement(f.a,{id:"Apis.Details.Sdk.no.sdks",defaultMessage:"No SDKs"})),n.a.createElement(u.a,{component:"p"},n.a.createElement(f.a,{id:"Apis.Details.Sdk.no.sdks.content",defaultMessage:"No SDKs available for this API"})))))}}L.propTypes={classes:b.a.instanceOf(Object).isRequired},t.default=Object(f.d)(Object(w.a)(e=>({genericMessageWrapper:{margin:e.spacing(2)},titleSub:{marginLeft:e.spacing(3),paddingTop:e.spacing(2),paddingBottom:e.spacing(2),color:e.palette.getContrastText(e.palette.background.default)},gridRoot:{marginLeft:e.spacing(2)},titleWrappper:{display:"flex",alignItems:"center","& h4":{marginRight:e.spacing(1)}},cardTitle:{background:e.palette.grey[50]},cardRoot:{background:e.custom.apiDetailPages.sdkBackground}}),{withTheme:!0})(L))}}]);
//# sourceMappingURL=APISdk.6bf866ee8603d1131fb6.bundle.js.map