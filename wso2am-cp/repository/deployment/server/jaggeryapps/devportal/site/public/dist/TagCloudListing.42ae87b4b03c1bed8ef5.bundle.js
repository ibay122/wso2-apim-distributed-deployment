(this.webpackJsonp=this.webpackJsonp||[]).push([[21],{1473:function(e,a,t){"use strict";var i=t(1),l=t.n(i),n=t(66),s=t.n(n),r=t(1812),o=t(1055),p=t(470),c=t(1770),m=t(5708),g=t(5711),u=t(5709),d=t(5710),h=t(1786),f=t(5715),b=t(306),E=t(1029),T=t.n(E),x=t(1016),W=t(14);function C(e){const{tag:a,path:t,classes:i,theme:n,style:s,mainPage:r}=e,o=t+":"+a.value,{tagWise:{thumbnail:{image:m}}}=n.custom,g=a.value.split(n.custom.tagWise.key)[0];return"fixed-left"!==s&&r?l.a.createElement("div",{className:i.thumbWrapper},l.a.createElement(p.a,{to:o,className:i.imageWrapper},l.a.createElement("img",{src:W.app.context+m,className:i.image,alt:""})),l.a.createElement("div",{className:T()(i.thumbContent)},l.a.createElement(p.a,{to:o,className:i.textWrapper},l.a.createElement(c.a,{className:i.thumbHeader,variant:"h4",gutterBottom:!0,title:g},g)))):l.a.createElement(p.a,{to:o,className:i.textWrapper},l.a.createElement(u.a,{button:!0},l.a.createElement(d.a,null,l.a.createElement(f.a,null,"label")),l.a.createElement(h.a,{primary:g})))}C.propTypes={classes:s.a.shape({thumbWrapper:s.a.shape({}).isRequired,imageWrapper:s.a.shape({}).isRequired,thumbContent:s.a.shape({}).isRequired,imageOverlap:s.a.shape({}).isRequired,textWrapper:s.a.shape({}).isRequired,thumbHeader:s.a.shape({}).isRequired,image:s.a.shape({}).isRequired}).isRequired,theme:s.a.shape({custom:s.a.shape({tagWise:s.a.shape({}).isRequired}).isRequired}).isRequired,tag:s.a.shape({value:s.a.shape({split:s.a.func}).isRequired}).isRequired,path:s.a.shape({}).isRequired,style:s.a.string.isRequired};var v=Object(x.a)(e=>({thumbContent:{width:e.custom.tagWise.thumbnail.width-e.spacing(1),backgroundColor:e.palette.background.paper,padding:e.spacing(1)},thumbLeft:{alignSelf:"flex-start",flex:1},thumbRight:{alignSelf:"flex-end"},thumbInfo:{display:"flex"},thumbHeader:{width:e.custom.tagWise.thumbnail.width-e.spacing(1),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer",justifyContent:"center",margin:0},contextBox:{width:parseInt(150-e.spacing(.5)),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer",margin:0,display:"inline-block",lineHeight:"1em"},thumbWrapper:{position:"relative",paddingTop:20,marginRight:e.spacing(2)},deleteIcon:{fill:"red"},textWrapper:{color:e.custom.tagCloud.leftMenu.color,"& .material-icons":{color:e.custom.tagCloud.leftMenu.color}},image:{width:e.custom.tagWise.thumbnail.width},imageWrapper:{color:e.palette.text.secondary,backgroundColor:e.palette.background.paper,width:e.custom.tagWise.thumbnail.width+e.spacing(1),display:"flex",alignItems:"center",justifyContent:"center"},imageOverlap:{position:"absolute",bottom:1,backgroundColor:e.custom.thumbnail.contentBackgroundColor}}),{withTheme:!0})(C);const w=Object(r.a)(e=>({mainTitle:{paddingTop:10},mainTitleWrapper:{flexGrow:1},listContentWrapper:{padding:`0 ${e.spacing(3)}px`},textWrapper:{color:e.custom.tagCloud.leftMenu.color,"& .material-icons":{color:e.custom.tagCloud.leftMenu.color}},linkTextWrapper:{color:e.palette.primary.main},tagWiseThumbWrapper:{display:"flex"},filterTitle:{fontWeight:200,paddingLeft:e.spacing(2),background:e.custom.tagCloud.leftMenu.titleBackground,color:e.custom.tagCloud.leftMenu.sliderColor||e.palette.getContrastText(e.custom.tagCloud.leftMenu.titleBackground),height:e.custom.infoBar.height,alignItems:"center",display:"flex"},mainPageList:{display:"flex"},mainPageAllApis:{width:"100%"}}));function y(e){const a=w(),t=Object(o.a)(),{custom:{tagWise:{key:i,active:n,style:s,showAllApis:r}}}=t,{allTags:E,mainPage:x}=e;let W=null;return 0!==E.count&&(null!==E&&(W=E.filter(e=>!0===n&&e.value.split(i).length>1)),W&&W.length),W&&W.length>0?l.a.createElement(l.a.Fragment,null,!x&&l.a.createElement(c.a,{variant:"h6",gutterBottom:!0,className:T()(a.filterTitle,"api-listing-tags-title")},l.a.createElement(b.a,{defaultMessage:"API Groups",id:"Apis.Listing.TagCloudListingTags.title"})),l.a.createElement(m.a,{component:"nav","aria-label":"main mailbox folders",className:T()({[a.mainPageAllApis]:x},"tag-cloud-listing-wrapper")},Object.keys(W).map(e=>l.a.createElement(v,{key:e,tag:W[e],path:"/apis?offset=0&query=tag",style:s,mainPage:x}))),r&&l.a.createElement("div",{className:T()({[a.mainPageAllApis]:x})},l.a.createElement(g.a,null),l.a.createElement(p.a,{to:"apis/",className:a.textWrapper},l.a.createElement(u.a,{button:!0},l.a.createElement(d.a,null,l.a.createElement(f.a,null,"label")),l.a.createElement(h.a,{primary:l.a.createElement(b.a,{defaultMessage:"All Apis",id:"Apis.Listing.TagCloudListingTags.allApis"})}))))):l.a.createElement(l.a.Fragment,null,!x&&l.a.createElement(c.a,{variant:"h6",gutterBottom:!0,className:T()(a.filterTitle,"apis-listing-tags-group")},l.a.createElement(b.a,{defaultMessage:"API Groups",id:"Apis.Listing.TagCloudListingTags.title"})),l.a.createElement("div",{className:T()(a.mainTitle,"apis-listing-tags-empty")},l.a.createElement(c.a,{variant:"subtitle1",gutterBottom:!0,align:"center"},l.a.createElement(b.a,{defaultMessage:"API groups cannot be found",id:"Apis.Listing.TagCloudListingTags.tagsNotFound"})),l.a.createElement(p.a,{to:"apis/",className:T()(a.linkTextWrapper,"apis-listing-tags-group-all-apis-link")},l.a.createElement(c.a,{variant:"subtitle1",gutterBottom:!0,align:"center"},l.a.createElement(b.a,{defaultMessage:"All Apis",id:"Apis.Listing.TagCloudListingTags.allApis"})))))}y.propTypes={classes:s.a.shape({}).isRequired,theme:s.a.shape({}).isRequired,allTags:s.a.shape({}).isRequired};a.a=y},1859:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var i=t(1),l=t.n(i),n=t(1812),s=t(1055),r=t(1770),o=t(306),p=t(308),c=t(1473),m=t(1083);const g=Object(n.a)(e=>({appBar:{height:70,background:e.custom.infoBar.background,color:e.palette.getContrastText(e.custom.infoBar.background),borderBottom:"solid 1px "+e.palette.grey.A200,display:"flex",alignItems:"center",justifyContent:"center"},mainIconWrapper:{paddingTop:13,paddingLeft:20,paddingRight:20},mainTitle:{paddingTop:10},mainTitleWrapper:{flexGrow:1},content:{flexGrow:1},listContentWrapper:{padding:`0 ${e.spacing(3)}px`},iconDefault:{color:e.palette.getContrastText(e.custom.infoBar.background)}}));function u(){const e=g(),a=Object(s.a)(),[t,n]=Object(i.useState)(null);Object(i.useEffect)(()=>{(new p.a).getAllTags().then(e=>{n(e.body.list)}).catch(e=>{console.log(e)})},[]);const u=a.palette.getContrastText(a.palette.background.paper);return l.a.createElement("main",{className:e.content},l.a.createElement("div",{className:e.appBar},l.a.createElement("div",{className:e.mainIconWrapper},l.a.createElement(m.a,{strokeColor:u,width:42,height:42,icon:"api"})),l.a.createElement("div",{className:e.mainTitleWrapper},l.a.createElement(r.a,{variant:"h4",className:e.mainTitle},l.a.createElement(o.a,{defaultMessage:"API Groups",id:"Apis.Listing.TagCloudListing.apigroups.main"})))),l.a.createElement("div",{className:e.listContentWrapper},t&&l.a.createElement(c.a,{allTags:t,mainPage:!0})))}}}]);
//# sourceMappingURL=TagCloudListing.42ae87b4b03c1bed8ef5.bundle.js.map