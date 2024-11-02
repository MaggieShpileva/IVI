(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{7484:function(e){var t,i,s,n,r,a,l,o,c,d,_,u,h,m,f,v,p,x,g,j,N;e.exports=(t="millisecond",i="second",s="minute",n="hour",r="week",a="month",l="quarter",o="year",c="date",d="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,i){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(i)+e},(f={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||"th")+"]"}},v=function(e){return e instanceof j},p=function e(t,i,s){var n;if(!t)return m;if("string"==typeof t){var r=t.toLowerCase();f[r]&&(n=r),i&&(f[r]=i,n=r);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var l=t.name;f[l]=t,n=l}return!s&&n&&(m=n),n||!s&&m},x=function(e,t){if(v(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new j(i)},(g={s:h,z:function(e){var t=-e.utcOffset(),i=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(i/60),2,"0")+":"+h(i%60,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var s=12*(i.year()-t.year())+(i.month()-t.month()),n=t.clone().add(s,a),r=i-n<0,l=t.clone().add(s+(r?-1:1),a);return+(-(s+(i-n)/(r?n-l:l-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:o,w:r,d:"day",D:c,h:n,m:s,s:i,ms:t,Q:l})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=p,g.i=v,g.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},N=(j=function(){function e(e){this.$L=p(e.locale,null,!0),this.parse(e)}var h=e.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(_);if(s){var n=s[2]-1||0,r=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return g},h.isValid=function(){return this.$d.toString()!==d},h.isSame=function(e,t){var i=x(e);return this.startOf(t)<=i&&i<=this.endOf(t)},h.isAfter=function(e,t){return x(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<x(e)},h.$g=function(e,t,i){return g.u(e)?this[t]:this.set(i,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var l=this,d=!!g.u(t)||t,_=g.p(e),u=function(e,t){var i=g.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return d?i:i.endOf("day")},h=function(e,t){return g.w(l.toDate()[e].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,f=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(_){case o:return d?u(1,0):u(31,11);case a:return d?u(1,f):u(0,f+1);case r:var x=this.$locale().weekStart||0,j=(m<x?m+7:m)-x;return u(d?v-j:v+(6-j),f);case"day":case c:return h(p+"Hours",0);case n:return h(p+"Minutes",1);case s:return h(p+"Seconds",2);case i:return h(p+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,r){var l,d=g.p(e),_="set"+(this.$u?"UTC":""),u=((l={}).day=_+"Date",l[c]=_+"Date",l[a]=_+"Month",l[o]=_+"FullYear",l[n]=_+"Hours",l[s]=_+"Minutes",l[i]=_+"Seconds",l[t]=_+"Milliseconds",l)[d],h="day"===d?this.$D+(r-this.$W):r;if(d===a||d===o){var m=this.clone().set(c,1);m.$d[u](h),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else u&&this.$d[u](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[g.p(e)]()},h.add=function(e,t){var l,c=this;e=Number(e);var d=g.p(t),_=function(t){var i=x(c);return g.w(i.date(i.date()+Math.round(t*e)),c)};if(d===a)return this.set(a,this.$M+e);if(d===o)return this.set(o,this.$y+e);if("day"===d)return _(1);if(d===r)return _(7);var u=((l={})[s]=6e4,l[n]=36e5,l[i]=1e3,l)[d]||1,h=this.$d.getTime()+e*u;return g.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||d;var s=e||"YYYY-MM-DDTHH:mm:ssZ",n=g.z(this),r=this.$H,a=this.$m,l=this.$M,o=i.weekdays,c=i.months,_=function(e,i,n,r){return e&&(e[i]||e(t,s))||n[i].slice(0,r)},h=function(e){return g.s(r%12||12,e,"0")},m=i.meridiem||function(e,t,i){var s=e<12?"AM":"PM";return i?s.toLowerCase():s},f={YY:String(this.$y).slice(-2),YYYY:g.s(this.$y,4,"0"),M:l+1,MM:g.s(l+1,2,"0"),MMM:_(i.monthsShort,l,c,3),MMMM:_(c,l),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:_(i.weekdaysMin,this.$W,o,2),ddd:_(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:g.s(r,2,"0"),h:h(1),hh:h(2),a:m(r,a,!0),A:m(r,a,!1),m:String(a),mm:g.s(a,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:n};return s.replace(u,function(e,t){return t||f[e]||n.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,t,c){var d,_=g.p(t),u=x(e),h=(u.utcOffset()-this.utcOffset())*6e4,m=this-u,f=g.m(this,u);return f=((d={})[o]=f/12,d[a]=f,d[l]=f/3,d[r]=(m-h)/6048e5,d.day=(m-h)/864e5,d[n]=m/36e5,d[s]=m/6e4,d[i]=m/1e3,d)[_]||m,c?f:g.a(f)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return f[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),s=p(e,t,!0);return s&&(i.$L=s),i},h.clone=function(){return g.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},e}()).prototype,x.prototype=N,[["$ms",t],["$s",i],["$m",s],["$H",n],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(e){N[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,j,x),e.$i=!0),x},x.locale=p,x.isDayjs=v,x.unix=function(e){return x(1e3*e)},x.en=f[m],x.Ls=f,x.p={},x)},600:function(e,t,i){e.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),i="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),s="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),n="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),r=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function a(e,t,i){var s,n;return"m"===i?t?"минута":"минуту":e+" "+(s=+e,n=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[i].split("_"),s%10==1&&s%100!=11?n[0]:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?n[1]:n[2])}var l=function(e,s){return r.test(s)?t[e.month()]:i[e.month()]};l.s=i,l.f=t;var o=function(e,t){return r.test(t)?s[e.month()]:n[e.month()]};o.s=n,o.f=s;var c={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:o,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:a,mm:a,h:"час",hh:a,d:"день",dd:a,M:"месяц",MM:a,y:"год",yy:a},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(c,null,!0),c}(i(7484))},1490:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/film/[id]",function(){return i(5504)}])},4128:function(e,t,i){"use strict";i.d(t,{L:function(){return s}});let s=e=>e.continueBrowsing},3442:function(e,t,i){"use strict";var s=i(5893);i(7294);var n=i(2853),r=i.n(n),a=i(7786),l=i(9554);t.Z=e=>(0,s.jsx)(s.Fragment,{children:(null==e?void 0:e.onClick)!==null&&(0,s.jsx)(a.z,{className:r().next_button,onClick:()=>e.onClick(),children:(0,s.jsx)(l.hjJ,{})})})},3597:function(e,t,i){"use strict";var s=i(5893);i(7294);var n=i(5154),r=i.n(n),a=i(7786),l=i(9554);t.Z=e=>(0,s.jsx)(s.Fragment,{children:0!==e.currentSlide&&(0,s.jsx)(a.z,{className:r().button,onClick:()=>{e.currentSlide>0&&e.onClick()},children:(0,s.jsx)(l.u1R,{})})})},5809:function(e,t,i){"use strict";i.d(t,{Z:function(){return g}});var s=i(5893),n=i(7294),r=i(1525),a=i.n(r),l=i(6066);i(4640),i(9678);var o=i(1664),c=i.n(o),d=i(7720),_=i.n(d),u=i(5675),h=i.n(u),m=i(1163),f=e=>{let t="container_".concat(e.type),i=(0,m.useRouter)(),[r,a]=(0,n.useState)("ru"),[l,o]=(0,n.useState)(e.title.ruName),[c,d]=(0,n.useState)(e.text.ruName);return(0,n.useEffect)(()=>{var e,t;(null===(e=i.query)||void 0===e?void 0:e.lang)?a(null===(t=i.query)||void 0===t?void 0:t.lang):a("ru")},[i]),(0,n.useEffect)(()=>{"ru"===r?(d(e.text.ruName),o(e.title.ruName)):(d(e.text.enName),o(e.title.enName))},[r]),(0,s.jsxs)("div",{className:_()[t],children:[(0,s.jsxs)("div",{className:_().banner,children:[(0,s.jsx)(h(),{src:e.img,width:900,height:500,alt:""}),"summary"===e.type&&(0,s.jsxs)("div",{className:_().profile_time,children:[(0,s.jsxs)("div",{className:_().time,children:[" ",(0,s.jsx)("p",{children:"еще 6 мин"})]}),(0,s.jsx)("div",{className:_().progress,children:(0,s.jsx)("div",{style:{width:"".concat(80,"%")},className:_().active})})]})]}),(0,s.jsxs)("div",{className:_().decription,children:[(0,s.jsx)("h5",{className:_().title,children:l}),"detailed"===e.type&&e.text?(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:_().text,children:c.length>200?c.slice(0,170)+"...":c}),(0,s.jsx)("p",{className:_().text,children:"6 мин"})]}):(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:_().text,children:c})})]})]})},v=i(3442),p=i(3597);let x={dots:!1,infinite:!1,speed:500,slidesToScroll:1,arrows:!0,prevArrow:(0,s.jsx)(p.Z,{}),nextArrow:(0,s.jsx)(v.Z,{}),responsive:[{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:720,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:380,settings:{slidesToShow:2,slidesToScroll:1}}]};var g=e=>{let{title:t,type:i,movies:r,isLoading:o,setIsLoading:d}=e,_={...x,centerMode:!1,slidesToShow:3},u=(0,m.useRouter)(),[h,v]=(0,n.useState)("ru");return(0,n.useEffect)(()=>{var e,t;(null===(e=u.query)||void 0===e?void 0:e.lang)?v(null===(t=u.query)||void 0===t?void 0:t.lang):v("ru")},[u]),(0,s.jsx)(s.Fragment,{children:0!==r.length&&(0,s.jsxs)("div",{className:a().container,children:[(0,s.jsx)("div",{className:a().title,children:(0,s.jsx)("h4",{children:t})}),(0,s.jsx)(l.Z,{..._,className:a().container_slider,children:r.map((e,t)=>(0,s.jsx)(c(),{href:"/film/".concat(e.id,"?lang=").concat(h),onClick:()=>{d(!0)},children:(0,s.jsx)(f,{title:e.name,type:i,text:e.description,img:e.poster})},"".concat(e,"-").concat(t)))})]})})}},5504:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSP:function(){return eh},default:function(){return em}});var s=i(5893),n=i(1559),r=i.n(n),a=i(7294),l=i(457),o=i.n(l),c=i(7786),d=i(1163),_=i(7039),u=i(9327),h=i(2585),m=i(5137),f=i.n(m);let v=e=>{let{title:t}=e,[i,n]=(0,a.useState)(t),[r,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{n(t)},[t]),(0,s.jsx)("div",{className:f().container,children:r?(0,s.jsxs)("div",{className:f().edit,children:[(0,s.jsx)("input",{type:"text",value:i,onChange:e=>{n(e.target.value)}}),(0,s.jsx)(c.z,{color:"purple",onClick:()=>{l(!1)},className:f().button,children:(0,s.jsx)(h.saV,{})})]}):(0,s.jsxs)("div",{className:f().result,children:[(0,s.jsx)("h1",{children:i}),(0,s.jsx)(c.z,{color:"purple",onClick:()=>{l(!0)},className:f().button,children:(0,s.jsx)(u.EoG,{})})]})})};var p=i(3299);let x=e=>{var t,i,n;let{movie:r,className:l}=e,u=(0,d.useRouter)(),{data:h}=(0,p.useSession)(),[m,f]=(0,a.useState)(!1),{t:x}=(0,_.$G)(),[g,j]=(0,a.useState)();return(0,a.useEffect)(()=>{u.asPath.includes("?lang=en")?j(r.alternativeName):j(r.name)},[u]),(0,a.useEffect)(()=>{let e=localStorage.getItem("idUser")?localStorage.getItem("idUser"):null;null!==e&&"1"==e&&f(!0)},[]),(0,s.jsxs)("div",{className:[o().container,l].join(" "),children:[m?(0,s.jsx)(v,{title:g}):(0,s.jsx)("h1",{children:g}),(0,s.jsx)("h1",{children:x("movie.watch_online")}),(0,s.jsxs)("div",{className:o().data,children:[(0,s.jsxs)("div",{className:o().row_time,children:[(0,s.jsxs)("span",{children:[r.year," г."]}),(0,s.jsxs)("span",{children:[r.movieLength," мин."]}),(0,s.jsxs)("span",{children:[r.ageRating,"+"]})]}),(0,s.jsxs)("div",{className:o().row_theme,children:[null===(t=r.countries)||void 0===t?void 0:t.map((e,t)=>(0,s.jsxs)("span",{children:[" ",e.name]},"".concat(e.name,"-").concat(t))),null===(i=r.genres)||void 0===i?void 0:i.slice(0,2).map((e,t)=>(0,s.jsx)("div",{className:o().genres,children:(0,s.jsx)("span",{children:e.name})},"".concat(e.name,"-").concat(t)))]}),(0,s.jsxs)("div",{className:o().row_buttons,children:[(0,s.jsx)("div",{children:(0,s.jsx)(c.z,{color:"darkbluegrey",className:o().button_full_hd,children:"FullHD"})}),null===(n=r.spokenLanguages)||void 0===n?void 0:n.map((e,t)=>(0,s.jsxs)("div",{className:o().watch_params,children:[(0,s.jsx)("div",{className:"nbl-icon nbl-icon_player_volumeMidRegular_16 watchParams__nbl-icon"}),(0,s.jsx)("span",{children:e.name})]},"".concat(t)))]})]})]})};var g=i(5809),j=i(4543),N=i.n(j),w=i(6066);i(4640),i(9678);var M=i(1664),b=i.n(M),y=i(9573),S=i.n(y),A=i(9554),D=i(4417),$=i.n(D);let C={dots:!1,infinite:!1,speed:500,slidesToShow:5,slidesToScroll:1,arrows:!0,prevArrow:(0,s.jsx)(e=>(0,s.jsx)(s.Fragment,{children:0!==e.currentSlide&&(0,s.jsx)(c.z,{className:$().button,onClick:()=>{e.currentSlide>0&&e.onClick()},children:(0,s.jsx)(A.u1R,{})})}),{}),nextArrow:(0,s.jsx)(e=>(0,s.jsx)(s.Fragment,{children:(null==e?void 0:e.onClick)!==null&&(0,s.jsx)(c.z,{className:S().next_button,onClick:()=>e.onClick(),children:(0,s.jsx)(A.hjJ,{})})}),{}),responsive:[{breakpoint:1280,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1020,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:620,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:512,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:380,settings:{slidesToShow:3,slidesToScroll:1}}]};var k=i(3455),T=i.n(k);let O=e=>(0,s.jsxs)("div",{className:T().actor_cart,children:[(0,s.jsx)("div",{className:T().image,children:(0,s.jsx)("img",{src:e.img,alt:""})}),(0,s.jsx)("div",{className:T().name,children:(0,s.jsx)("p",{children:e.name})})]});var Y=e=>{let{persons:t,className:i,isLoading:n,setIsLoading:r}=e,l=(0,d.useRouter)(),[o,c]=(0,a.useState)("ru"),_={...C};return(0,a.useEffect)(()=>{var e,t;(null===(e=l.query)||void 0===e?void 0:e.lang)?c(null===(t=l.query)||void 0===t?void 0:t.lang):c("ru")},[l]),(0,s.jsx)("div",{className:[N().container,i].join(" "),children:(0,s.jsx)(w.Z,{..._,className:N().slider,children:t.map(e=>(0,s.jsx)(b(),{href:"/person/".concat(e.id,"?lang=").concat(o),onClick:()=>{r(!0)},children:(0,s.jsx)(O,{img:e.photo,name:e.name},"".concat(e.id))},"".concat(e.id)))})})},L=i(6660),R=i.n(L),E=i(4360),I=i.n(E),P=i(7484),B=i.n(P);i(600);var F=e=>{let{movie:t}=e,[i,n]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:I().details,children:[(0,s.jsx)("h3",{onClick:()=>n(!0),children:" Детали о фильме"}),i?(0,s.jsxs)("div",{className:I().show_details,children:[(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:"Год производства"}),(0,s.jsx)("p",{children:t.year})]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:"Страна"}),t.countries.map((e,t)=>(0,s.jsx)("p",{children:e.name},t))]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:"Жанр"}),t.genres.slice(0,3).map((e,t)=>(0,s.jsxs)("p",{children:[e.name," "]},t))]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:" Слоган"}),(0,s.jsx)("p",{children:t.slogan})]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:" Бюджет"}),(0,s.jsxs)("p",{children:[t.budget.value.toLocaleString("ru-RU")," ",t.budget.currency]})]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:"Премьера в России"}),(0,s.jsx)("p",{className:I().date,children:B()(t.premiere.russia).locale("ru").format("D MMMM YYYY")})]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:"Премьера в мире"}),(0,s.jsx)("p",{className:I().date,children:B()(t.premiere.world).locale("ru").format("D MMMM YYYY")})]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:" Возраст"}),(0,s.jsxs)("p",{children:[t.ageRating," + "]})]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:" Время"}),(0,s.jsxs)("p",{children:[t.movieLength," мин."]})]}),(0,s.jsxs)("div",{className:I().row,children:[(0,s.jsx)("h5",{children:" Рейтинг MPAA"}),(0,s.jsx)("p",{children:t.ratingMpaa})]}),(0,s.jsx)("h3",{onClick:()=>n(!1),children:"Свернуть детали фильма"})]}):""]})},H=i(5100),W=i.n(H),U=e=>{let{raiting:t,votes:i}=e;return(0,s.jsxs)("div",{className:W().raiting,children:[(0,s.jsx)("h3",{className:W().title,children:"Рейтинг фильма"}),(0,s.jsxs)("div",{className:W().row,children:[(0,s.jsx)("div",{className:W().stars,children:Array.from({length:10},(e,i)=>{let n=32;return n=i<Math.floor(t.kp)?32:0,i===Math.floor(t.kp)&&(n=32*(t.kp%1)),(0,s.jsxs)("div",{className:W().star,children:[(0,s.jsx)("span",{className:W().grey_star}),(0,s.jsx)("span",{className:W().red_star,style:{width:n}}),(0,s.jsx)("p",{children:i})]},i)})}),(0,s.jsxs)("div",{className:W().raiting_value,children:[t.kp>6?(0,s.jsx)("h1",{style:{color:"green"},children:t.kp.toFixed(1)}):(0,s.jsx)("h1",{style:{color:"red"},children:t.kp.toFixed(1)}),(0,s.jsxs)("p",{className:W().count,children:[null==i?void 0:i.kp.toLocaleString("ru-RU")," оценок"]})]})]})]})},V=e=>{let{className:t,movie:i}=e;return(0,s.jsxs)("div",{className:[R().container,t].join(" "),children:[(0,s.jsx)("div",{className:R().datas,children:i.description}),(0,s.jsx)(F,{movie:i}),(0,s.jsx)(U,{raiting:i.rating,votes:i.votes})]})},q=i(9744);let z=e=>({type:q.K.GET_CONTINUE_BROWSING,payload:e});var G=i(1649),Q=i(8461),Z=i.n(Q),J=i(5675),X=i.n(J),K=i(2663),ee=i.n(K),et=e=>{let{t}=(0,_.$G)(),i=()=>{e.setIsOpenModal(!0)};return(0,s.jsxs)("div",{className:ee().bottom_buttons,children:[(0,s.jsxs)("div",{className:ee().left_side,children:[(0,s.jsxs)(c.z,{color:"darkbluegrey",className:ee().trailer,onClick:()=>{i()},children:[(0,s.jsx)("div",{className:"nbl-icon nbl-icon_playOutline_20 nbl-button__nbl-icon"}),t("buttons.trailer")]}),(0,s.jsx)(c.z,{color:"darkbluegrey",className:ee().favorite,children:(0,s.jsx)("div",{className:"nbl-icon nbl-icon_favoriteAdd_20 nbl-button__nbl-icon"})}),(0,s.jsx)(c.z,{color:"darkbluegrey",className:ee().share,children:(0,s.jsx)("div",{className:"nbl-icon nbl-icon_share_20 nbl-button__nbl-icon"})})]}),(0,s.jsxs)(c.z,{color:"darkbluegrey",className:ee().free_movies,children:[(0,s.jsx)("div",{className:"nbl-icon nbl-icon_catalog_16 nbl-button__nbl-icon"}),(0,s.jsx)("p",{children:t("buttons.free_movies")})]})]})},ei=e=>{let{t}=(0,_.$G)(),i=(0,d.useRouter)();return(0,s.jsxs)("div",{className:[Z().container,e.className].join(" "),children:[(0,s.jsxs)("div",{className:Z().player_block,children:[(0,s.jsx)(X(),{src:e.filmPicture,alt:" ",fill:!0}),(0,s.jsxs)("div",{className:Z().buttons,children:[(0,s.jsxs)(b(),{href:"https://www.kinopoisk.ru/film/".concat(i.query.id),className:Z().watch,children:[(0,s.jsx)("p",{children:t("buttons.watch")}),(0,s.jsx)("span",{children:t("buttons.watch_by_subscription")})]}),(0,s.jsx)("div",{className:Z().note,children:(0,s.jsx)("p",{children:t("buttons.watch_first_30_days")})})]})]}),(0,s.jsx)(et,{filmLink:e.filmLink,isOpenModal:e.isOpenModal,setIsOpenModal:e.setIsOpenModal})]})};let es=e=>e.movie;var en=i(4128),er=i(9818),ea=i.n(er);let el=e=>(0,s.jsx)("div",{className:ea().container,onClick:()=>{e.setIsOpenModal(!1)},children:(0,s.jsx)("div",{className:ea().modal,children:(0,s.jsx)("iframe",{src:e.trailer,frameBorder:"0"})})});var eo=i(2533),ec=i.n(eo),ed={src:"/IVI/_next/static/media/tv-without-poster.7f56e9ce.png",height:544,width:1072,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeklEQVR42mMAgSU5xQaxUbHOKyw8Q7IsXd39PL1d/JzctRlAQF/MmZOBgUGIAQ3wSjqJyEhZ8DNoaBnp66hYajIwSHIH2DrX2pk72TAwqAupqdor8QqY8TIYGxsHGRgYrmVg0jCKcPQ46GjtkcDAoCmhpqLLy8DAwAAAj3sUmepqtQcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},e_={src:"/IVI/_next/static/media/ipad-without-poster.d7d9b72d.png",height:272,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfElEQVR42mNoCo99mBwS/pKBQ+iZmormcxUl9ef8EgrPXc0tXuRFhD1kCLN3Cs1w8eVnYGCQBmJJKJY2ZmDg93V2CmXQtrS0Z8ABdI1N7BmsLK1sGXAAPV1dWwYbG9t0HR1dYwMDQ2t9fQMrfX19Kz19fWtdXV1jXV3ddABmyBqFqgp8ZQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},eu=e=>{let{t}=(0,_.$G)(),i=(0,d.useRouter)(),[n,r]=(0,a.useState)("ru"),[l,o]=(0,a.useState)();return(0,a.useEffect)(()=>{var e,t;(null===(e=i.query)||void 0===e?void 0:e.lang)?r(null===(t=i.query)||void 0===t?void 0:t.lang):r("ru")},[i]),(0,a.useEffect)(()=>{var t,i;"ru"===n?o(null===(t=e.filmLang[0])||void 0===t?void 0:t.filmName):"en"===n?o(null===(i=e.filmLang[1])||void 0===i?void 0:i.filmName):o("")},[]),(0,s.jsxs)("div",{className:ec().container,children:[(0,s.jsxs)("div",{className:ec().title,children:[(0,s.jsxs)("h2",{children:[t("movie.watch")," ",l,t("movie.all_devices")]}),(0,s.jsx)("p",{children:t("movie.download")}),(0,s.jsx)(b(),{href:"https://www.ivi.tv/devices",children:(0,s.jsx)(c.z,{color:"pink",className:ec().button,children:t("buttons.connect_devices")})})]}),(0,s.jsxs)("div",{className:ec().banner,children:[(0,s.jsxs)("div",{className:ec().tv,children:[(0,s.jsx)(X(),{src:ed,alt:"",width:600,className:ec().tv_bg_img}),e.filmPicture&&(0,s.jsx)(X(),{src:e.filmPicture,alt:"",width:600,height:600,className:ec().tv_main_img})]}),(0,s.jsxs)("div",{className:ec().ipad,children:[(0,s.jsx)(X(),{src:e_,alt:"",width:500,className:ec().ipad_bg_img}),e.filmPicture&&(0,s.jsx)(X(),{src:e.filmPicture,alt:"",width:600,height:600,className:ec().ipad_main_img})]})]})]})},eh=!0,em=e=>{let[t,i]=(0,a.useState)(),{t:n}=(0,_.$G)(),[l,o]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),h=(0,d.useRouter)(),m=(0,G.v9)(en.L),f=(0,G.I0)(),v=(0,G.v9)(es),[p,j]=(0,a.useState)([]);return void 0!==v.genres&&(null==v||v.genres[0].name),(0,a.useEffect)(()=>{f(z({id:e.id,poster:e.poster.url,name:{ruName:e.name,enName:e.enName},description:{ruName:e.description,enName:e.description}})),i(h.asPath);let t=e.similarMovies.map(e=>({id:e.id,filmLang:[{lang:"ru",filmName:e.name},{lang:"en",filmName:e.enName}],filmPoster:e.poster.url}));j(t)},[]),(0,a.useEffect)(()=>{h.asPath!==t&&o(!1)},[h]),(0,s.jsx)("div",{className:r().container,children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:r().wrapper,children:[(0,s.jsx)(ei,{filmPicture:e.poster.url,filmLink:e.videos.trailers[0].url,isOpenModal:c,setIsOpenModal:u,className:r().trailer}),(0,s.jsx)(x,{movie:e,className:r().discription}),(0,s.jsx)(Y,{persons:e.persons||[],className:r().slider_actors,isLoading:l,setIsLoading:o}),(0,s.jsx)(V,{className:r().info,movie:e})]}),(0,s.jsx)(g.Z,{title:n("sliders_title.continue_browsing"),type:"detailed",movies:m,isLoading:l,setIsLoading:o}),c&&(0,s.jsx)(el,{isOpenModal:c,setIsOpenModal:u,trailer:e.videos.trailers[0].url}),(0,s.jsx)(eu,{filmLang:[{lang:"ru",filmName:e.name},{lang:"en",filmName:e.enName}],filmPicture:e.poster.url})]})})}},7720:function(e){e.exports={container_detailed:"CardMovie_container_detailed__R_WSY",container_summary:"CardMovie_container_summary__TPUDa",banner:"CardMovie_banner__J750l",decription:"CardMovie_decription__uyycx",title:"CardMovie_title__NVFqF",text:"CardMovie_text__tpsc_",profile_time:"CardMovie_profile_time__kE271",time:"CardMovie_time__hqnuK",progress:"CardMovie_progress__8CqQJ",active:"CardMovie_active__ALU3d"}},3455:function(e){e.exports={actor_cart:"Actors_actor_cart__4AmdE",image:"Actors_image__AFuUg",name:"Actors_name__VdAp7"}},5137:function(e){e.exports={container:"EditTitle_container__JjtEm",edit:"EditTitle_edit__ez33Y",result:"EditTitle_result__oGQOs",button:"EditTitle_button__Ye0Ax"}},457:function(e){e.exports={container:"DescriptionCard_container__NdzF9",data:"DescriptionCard_data__eNw0t",row_time:"DescriptionCard_row_time__HWByW",row_theme:"DescriptionCard_row_theme__8yiPa",row_buttons:"DescriptionCard_row_buttons__qQpsw",button_full_hd:"DescriptionCard_button_full_hd__0LTZ1",watch_params:"DescriptionCard_watch_params__h_p5F",description:"DescriptionCard_description__Mp0mF",genres:"DescriptionCard_genres__Wn4TU"}},2663:function(e){e.exports={bottom_buttons:"FilmButtons_bottom_buttons___P3n0",left_side:"FilmButtons_left_side__i1ABO",trailer:"FilmButtons_trailer__xLdsb",favorite:"FilmButtons_favorite__wX6oi",share:"FilmButtons_share__A7yiW",free_movies:"FilmButtons_free_movies__9NoYL"}},4360:function(e){e.exports={details:"Details_details__dSwcG",show_details:"Details_show_details__XbpGh",show:"Details_show__epM3N",row:"Details_row__ws3lh",date:"Details_date__UT3Fz"}},5100:function(e){e.exports={raiting:"MovieRating_raiting__KHbju",title:"MovieRating_title__HgOFm",row:"MovieRating_row__pTBBg",stars:"MovieRating_stars__VQ_nt",star:"MovieRating_star__TwPGr",grey_star:"MovieRating_grey_star__Nkxxg",red_star:"MovieRating_red_star__H7dHY",raiting_value:"MovieRating_raiting_value__LdpWj",count:"MovieRating_count__nyKWX"}},6660:function(e){e.exports={container:"InfoMovie_container__fwNSO",datas:"InfoMovie_datas__5q9fE",param:"InfoMovie_param__Zat3A",title:"InfoMovie_title__POM1x"}},9818:function(e){e.exports={container:"TrailerModal_container__PTVuV",open:"TrailerModal_open__DxSmV",modal:"TrailerModal_modal__NjIV4"}},9573:function(e){e.exports={next_button:"NextButton_next_button__92S3p"}},4417:function(e){e.exports={button:"PrevButton_button__06FEv"}},4543:function(e){e.exports={container:"ActorsSlider_container__hFV9y",slider:"ActorsSlider_slider__PhtGi"}},2853:function(e){e.exports={next_button:"NextButton_next_button__mYPSj"}},5154:function(e){e.exports={button:"PrevButton_button__83hIv"}},1525:function(e){e.exports={container:"Sliders_container__IOnqJ",container_slider:"Sliders_container_slider__5HRD5",title:"Sliders_title__cvLrl",loading_simple:"Sliders_loading_simple__Oc24V",loading_top_movies:"Sliders_loading_top_movies__iP8vT",loading_page:"Sliders_loading_page__JcSxF"}},8461:function(e){e.exports={container:"TrailerCard_container__mUJwr",player_block:"TrailerCard_player_block__YCeHr",buttons:"TrailerCard_buttons___u12X",watch:"TrailerCard_watch__nfD2e",note:"TrailerCard_note__hyrpR",bottom_buttons:"TrailerCard_bottom_buttons__93At_",left_side:"TrailerCard_left_side__mwhSS",trailer:"TrailerCard_trailer__1yJkj",favorite:"TrailerCard_favorite__wQ6Nj",share:"TrailerCard_share__Y6yVt",free_movies:"TrailerCard_free_movies__Pvk6d"}},2533:function(e){e.exports={container:"WatchOnAllDevices_container__0aBHP",title:"WatchOnAllDevices_title__6ZOS7",button:"WatchOnAllDevices_button__BPXBo",banner:"WatchOnAllDevices_banner__0D0ot",tv:"WatchOnAllDevices_tv___QHdM",tv_bg_img:"WatchOnAllDevices_tv_bg_img__UXA4M",tv_main_img:"WatchOnAllDevices_tv_main_img__d75uZ",ipad:"WatchOnAllDevices_ipad__pluiY",ipad_bg_img:"WatchOnAllDevices_ipad_bg_img__zLW3j",ipad_main_img:"WatchOnAllDevices_ipad_main_img__ElxR2"}},1559:function(e){e.exports={container:"film_container__iw43_",wrapper:"film_wrapper__a5Whi",trailer:"film_trailer__MTYpE",discription:"film_discription__vbn9M",slider_actors:"film_slider_actors__6vowo",info:"film_info__hRY0m"}}},function(e){e.O(0,[980,866,90,774,888,179],function(){return e(e.s=1490)}),_N_E=e.O()}]);