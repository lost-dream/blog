"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){for(var t,i,u,D=Math.abs,d=Math.sin,f=Math.cos,A=Math.max,I=Math.min,c=Math.ceil,m=Math.sqrt,g=Math.pow,n={},a={},o={0:"0,",1:"17,",2:"34,",3:"51,",4:"68,",5:"85,",6:"102,",7:"119,",8:"136,",9:"153,",a:"170,",A:"170,",b:"187,",B:"187,",c:"204,",C:"204,",d:"221,",D:"221,",e:"238,",E:"238,",f:"255,",F:"255,"},p=document,w={},e=0;e<256;++e)t=e.toString(16),a[t=e<16?"0"+t:t]=a[t.toUpperCase()]=e.toString()+",";function x(t){return void 0!==t}function r(t){return"object"==_typeof(t)&&null!=t}function v(t,i,e){return isNaN(t)?e:I(e,A(i,t))}function y(){return!1}function T(){return(new Date).valueOf()}function S(t){for(var i,e,s=t.length-1;s;)e=~~(Math.random()*s),i=t[s],t[s]=t[e],t[e]=i,--s}function b(t,i,e){this.x=t,this.y=i,this.z=e}function C(t){this[1]={1:t[0],2:t[1],3:t[2]},this[2]={1:t[3],2:t[4],3:t[5]},this[3]={1:t[6],2:t[7],3:t[8]}}function z(t,i,e,s,h){for(var n,a,o,r=[],l=2/t,u=Math.PI*(3-m(5)+(parseFloat(h)?parseFloat(h):0)),g=0;g<t;++g)a=m(1-(n=g*l-1+l/2)*n),r.push([f(o=g*u)*a*i,n*e,d(o)*a*s]);return r}function l(t,i,e,s,h,n){for(var a,o,r,l=[],u=2/t,g=Math.PI*(3-m(5)+(parseFloat(n)?parseFloat(n):0)),c=0;c<t;++c)a=c*u-1+u/2,o=f(r=c*g),r=d(r),l.push(i?[a*e,o*s,r*h]:[o*e,a*s,r*h]);return l}function M(t,i,e,s,h,n){for(var a,o,r=[],l=2*Math.PI/i,u=0;u<i;++u)a=f(o=u*l),o=d(o),r.push(t?[n*e,a*s,o*h]:[a*e,n*s,o*h]);return r}function F(t,i,e,s,h){return l(t,0,i,e,s,h)}function O(t,i,e,s,h){return l(t,1,i,e,s,h)}function k(t,i,e,s,h){return M(0,t,i,e,s,h=isNaN(h)?0:+h)}function P(t,i,e,s,h){return M(1,t,i,e,s,h=isNaN(h)?0:+h)}function E(t,i){if(window.G_vmlCanvasManager)return null;var e=p.createElement("canvas");return e.width=t,e.height=i,e}function B(t,i,e){var s,h,n=1,a=t.weightGradient;if(t.gCanvas)s=t.gCanvas.getContext("2d"),n=t.gCanvas.height;else{if(r(a[0])?n=a.length:a=[a],t.gCanvas=t=E(1024,n),!t)return null;for(s=t.getContext("2d"),h=0;h<n;++h)!function(t,i,e,s){var h,n=t.createLinearGradient(0,0,i,0);for(h in s)n.addColorStop(1-h,s[h]);t.fillStyle=n,t.fillRect(0,e,i,1)}(s,1024,h,a[h])}return e=A(I(e||0,n-1),0),"rgba("+(e=s.getImageData(~~(1023*i),e,1,1).data)[0]+","+e[1]+","+e[2]+","+e[3]/255+")"}function R(t,i,e,s,h,n,a,o,r,l,u,g){var c,d,f=h+(o||0)+(r.length&&r[0]<0?D(r[0]):0),m=n+(o||0)+(r.length&&r[1]<0?D(r[1]):0);for(t.font=i,t.textBaseline="top",t.fillStyle=e,a&&(t.shadowColor=a),o&&(t.shadowBlur=o),r.length&&(t.shadowOffsetX=r[0],t.shadowOffsetY=r[1]),c=0;c<s.length;++c)d=0,u&&("right"==g?d=l-u[c]:"centre"==g&&(d=(l-u[c])/2)),t.fillText(s[c],f+d,m),m+=parseInt(i)}function N(t,i,e,s,h,n,a){n?(t.beginPath(),t.moveTo(i,e+h-n),t.arcTo(i,e,i+n,e,n),t.arcTo(i+s,e,i+s,e+n,n),t.arcTo(i+s,e+h,i+s-n,e+h,n),t.arcTo(i,e+h,i,e+h-n,n),t.closePath(),t[a?"stroke":"fill"]()):t[a?"strokeRect":"fillRect"](i,e,s,h)}function _(t,i,e,s,h,n,a,o,r){this.strings=t,this.font=i,this.width=e,this.height=s,this.maxWidth=h,this.stringWidths=n,this.align=a,this.valign=o,this.scale=r}function L(t,i,e){var s=E(i,e);return s?(s.getContext("2d").drawImage(t,(i-t.width)/2,(e-t.height)/2),s):null}function H(t,i,e){var s=E(i,e);return s?(s.getContext("2d").drawImage(t,0,0,i,e),s):null}function W(t,i,e,s,h,n,a,o,r,l){var u,g,c,d,f,m=i+(2*o+n)*s,p=e+(2*o+n)*s,w=E(m,p);return w?(r*=s,d=m-(n*=s),f=p-n,o=o*s+(g=c=n/2),u=w.getContext("2d"),r=I(r,d/2,f/2),h&&(u.fillStyle=h,N(u,g,c,d,f,r)),n&&(u.strokeStyle=a,u.lineWidth=n,N(u,g,c,d,f,r,!0)),l?((l=(r=E(m,p)).getContext("2d")).drawImage(t,o,o,i,e),l.globalCompositeOperation="source-in",l.fillStyle=a,l.fillRect(0,0,m,p),l.globalCompositeOperation="destination-over",l.drawImage(w,0,0),l.globalCompositeOperation="source-over",u.drawImage(r,0,0)):u.drawImage(t,o,o,t.width,t.height),{image:w,width:m/s,height:p/s}):null}function X(t,i,e){var s,h,n,a,o,r,l,u=parseInt(t.toString().length*e),g=parseInt(2*e*t.length),c=E(u,g);if(!c)return null;for((s=c.getContext("2d")).fillStyle="#000",s.fillRect(0,0,u,g),R(s,e+"px "+i,"#fff",t,0,0,0,0,[],"centre"),l={min:{x:n=(h=s.getImageData(0,0,u,g)).width,y:a=h.height},max:{x:-1,y:-1}},r=0;r<a;++r)for(o=0;o<n;++o)0<h.data[1+4*(r*n+o)]&&(o<l.min.x&&(l.min.x=o),o>l.max.x&&(l.max.x=o),r<l.min.y&&(l.min.y=r),r>l.max.y&&(l.max.y=r));return n!=u&&(l.min.x*=u/n,l.max.x*=u/n),a!=g&&(l.min.y*=u/a,l.max.y*=u/a),c=null,l}function Y(t){return"'"+t.replace(/(\'|\")/g,"").replace(/\s*,\s*/g,"', '")+"'"}function U(t,i,e){(e=e||p).addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)}function V(t,i,e,s){var h,n,a,o,r,l,u,g,c,d,f,m,p,w,x,v,y=s.imageScale;return i.complete?t.complete?(i.width=i.width,i.height=i.height,y&&(t.width=i.width*y,t.height=i.height*y),e.iw=t.width,e.ih=t.height,s.txtOpt&&(n=t,h=s.zoomMax*s.txtScale,a=e.iw*h,o=e.ih*h,a<i.naturalWidth||o<i.naturalHeight?(n=H(t,a,o))&&(e.fimage=n):(a=e.iw,o=e.ih,h=1),parseFloat(s.imageRadius)&&(e.image=e.fimage=(c=e.image,d=s.imageRadius,f=a,m=o,p=h,w=parseFloat(d),x=A(f,m),v=E(f,m),t=v?(0<d.indexOf("%")?w=x*w/100:w*=p,(p=v.getContext("2d")).globalCompositeOperation="source-over",p.fillStyle="#fff",x/2<=w?(w=I(f,m)/2,p.beginPath(),p.moveTo(f/2,m/2),p.arc(f/2,m/2,w,0,2*Math.PI,!1),p.fill(),p.closePath()):(N(p,0,0,f,m,w=I(f/2,m/2,w),!0),p.fill()),p.globalCompositeOperation="source-in",p.drawImage(c,0,0,f,m),v):null)),e.HasText()||(s.shadow&&(r=e.image,l=a,y=o,u=h,d=s.shadow,x=s.shadowBlur,w=s.shadowOffset,p=D(w[0]),c=D(w[1]),f=l+(x<p?p+x:2*x)*u,g=y+(x<c?c+x:2*x)*u,m=u*((x||0)+(w[0]<0?p:0)),v=u*((x||0)+(w[1]<0?c:0)),(n=(p=E(f,g))?(c=p.getContext("2d"),d&&(c.shadowColor=d),x&&(c.shadowBlur=x*u),w&&(c.shadowOffsetX=w[0]*u,c.shadowOffsetY=w[1]*u),c.drawImage(r,m,v,l,y),{image:p,width:f/u,height:g/u}):null)&&(e.fimage=n.image,e.w=n.width,e.h=n.height)),(s.bgColour||s.bgOutlineThickness)&&(g="tag"==s.bgColour?q(e.a,"background-color"):s.bgColour,u="tag"==s.bgOutline?q(e.a,"color"):s.bgOutline||s.textColour,a=e.fimage.width,o=e.fimage.height,"colour"==s.outlineMethod&&(n=W(e.fimage,a,o,h,g,s.bgOutlineThickness,e.outline.colour,s.padding,s.bgRadius,1))&&(e.oimage=n.image),(n=W(e.fimage,a,o,h,g,s.bgOutlineThickness,u,s.padding,s.bgRadius))&&(e.fimage=n.image,e.w=n.width,e.h=n.height)),"size"==s.outlineMethod&&(0<s.outlineIncrease?(e.iw+=2*s.outlineIncrease,e.ih+=2*s.outlineIncrease,a=h*e.iw,o=h*e.ih,n=H(e.fimage,a,o),e.oimage=n,e.fimage=L(e.fimage,e.oimage.width,e.oimage.height)):(a=h*(e.iw+2*s.outlineIncrease),o=h*(e.ih+2*s.outlineIncrease),n=H(e.fimage,a,o),e.oimage=L(n,e.fimage.width,e.fimage.height))))),void e.Init()):(U("load",function(){V(t,i,e,s)},t),0):(U("load",function(){V(t,i,e,s)},i),0)}function q(t,i){var e=p.defaultView,s=i.replace(/\-([a-z])/g,function(t){return t.charAt(1).toUpperCase()});return e&&e.getComputedStyle&&e.getComputedStyle(t,null).getPropertyValue(i)||t.currentStyle&&t.currentStyle[s]}function G(t){return(t.target&&x(t.target.id)?t.target:t.srcElement.parentNode).id}function Z(t,i){var e,s=parseInt(q(i,"width"))/i.width,h=parseInt(q(i,"height"))/i.height;return x(t.offsetX)?e={x:t.offsetX,y:t.offsetY}:(i=ht(i.id),(t=x(t.changedTouches)?t.changedTouches[0]:t).pageX&&(e={x:t.pageX-i.x,y:t.pageY-i.y})),e&&s&&h&&(e.x/=s,e.y/=h),e}function j(t){t=t.target||t.fromElement.parentNode,t=rt.tc[t.id];t&&(t.mx=t.my=-1,t.UnFreeze(),t.EndDrag())}function J(t){var i,e,s=rt,h=G(t);for(i in s.tc)(e=s.tc[i]).tttimer&&(clearTimeout(e.tttimer),e.tttimer=null);h&&s.tc[h]&&((h=Z(t,(e=s.tc[h]).canvas))&&(e.mx=h.x,e.my=h.y,e.Drag(t,h)),e.drawn=0)}function K(t){var i=rt,e=p.addEventListener?0:1,s=G(t);s&&t.button==e&&i.tc[s]&&i.tc[s].BeginDrag(t)}function Q(t){var i=rt,e=p.addEventListener?0:1,s=G(t);s&&t.button==e&&i.tc[s]&&(s=i.tc[s],J(t),s.EndDrag()||s.touchState||s.Clicked(t))}function $(t){var i=G(t),e=i&&rt.tc[i];e&&t.changedTouches&&(1==t.touches.length&&0==e.touchState?(e.touchState=1,e.BeginDrag(t),(i=Z(t,e.canvas))&&(e.mx=i.x,e.my=i.y,e.drawn=0)):2==t.targetTouches.length&&e.pinchZoom?(e.touchState=3,e.EndDrag(),e.BeginPinch(t)):(e.EndDrag(),e.EndPinch(),e.touchState=0))}function tt(t){var i=G(t),e=i&&rt.tc[i];if(e&&t.changedTouches){switch(e.touchState){case 1:e.Draw(),e.Clicked();break;case 2:e.EndDrag();break;case 3:e.EndPinch()}e.touchState=0}}function it(t){var i,e,s,h=rt,n=G(t);for(i in h.tc)(e=h.tc[i]).tttimer&&(clearTimeout(e.tttimer),e.tttimer=null);if((e=n&&h.tc[n])&&t.changedTouches&&e.touchState){switch(e.touchState){case 1:case 2:(s=Z(t,e.canvas))&&(e.mx=s.x,e.my=s.y,e.Drag(t,s)&&(e.touchState=2));break;case 3:e.Pinch(t)}e.drawn=0}}function et(t){var i=rt,e=G(t);e&&i.tc[e]&&(t.cancelBubble=!0,t.returnValue=!1,t.preventDefault&&t.preventDefault(),i.tc[e].Wheel(0<(t.wheelDelta||t.detail)))}function st(t){var i,e=rt;for(i in clearTimeout(e.scrollTimer),e.tc)e.tc[i].Pause();e.scrollTimer=setTimeout(function(){var t,i=rt;for(t in i.tc)i.tc[t].Resume()},e.scrollPause)}function s(){h(T())}function h(t){var i,e=rt.tc;for(i in rt.NextFrame(rt.interval),t=t||T(),e)e[i].Draw(t)}function ht(t){var i=p.getElementById(t).getBoundingClientRect(),e=p.documentElement,s=p.body,h=window,n=h.pageXOffset||e.scrollLeft,t=h.pageYOffset||e.scrollTop,h=e.clientLeft||s.clientLeft,s=e.clientTop||s.clientTop;return{x:i.left+n-h,y:i.top+t-s}}function nt(t){this.e=t,this.br=0,this.line=[],this.text=[],this.original=t.innerText||t.textContent}function at(t,i){this.ts=null,this.tc=t,this.tag=i,this.x=this.y=this.w=this.h=this.sc=1,this.z=0,this.pulse=1,this.pulsate=t.pulsateTo<1,this.colour=t.outlineColour,this.adash=~~t.outlineDash,this.agap=~~t.outlineDashSpace||this.adash,this.aspeed=+t.outlineDashSpeed,"tag"==this.colour?this.colour=q(i.a,"color"):"tagbg"==this.colour&&(this.colour=q(i.a,"background-color")),this.Draw=this.pulsate?this.DrawPulsate:this.DrawSimple,this.radius=0|t.outlineRadius,this.SetMethod(t.outlineMethod)}function ot(t,i,e,s,h,n,a,o,r,l,u,g,c,d){this.tc=t,this.image=null,this.text=i,this.text_original=d,this.line_widths=[],this.title=e.title||null,this.a=e,this.position=new b(s[0],s[1],s[2]),this.x=this.y=this.z=0,this.w=h,this.h=n,this.colour=a||t.textColour,this.bgColour=o||t.bgColour,this.bgRadius=0|r,this.bgOutline=l||this.colour,this.bgOutlineThickness=0|u,this.textFont=g||t.textFont,this.padding=0|c,this.sc=this.alpha=1,this.weighted=!t.weight,this.outline=new at(t,this)}function rt(t,i,e){var s,h,o,r,n,a,l,u=p.getElementById(t),g=["id","class","innerHTML"];if(!u)throw 0;if(x(window.G_vmlCanvasManager)&&(u=window.G_vmlCanvasManager.initElement(u),this.ie=parseFloat(navigator.appVersion.split("MSIE")[1])),u&&(!u.getContext||!u.getContext("2d").fillText)){for(h=p.createElement("DIV"),s=0;s<g.length;++s)h[g[s]]=u[g[s]];throw u.parentNode.insertBefore(h,u),u.parentNode.removeChild(u),0}for(s in rt.options)this[s]=(e&&x(e[s])?e:x(rt[s])?rt:rt.options)[s];if(this.canvas=u,this.ctxt=u.getContext("2d"),this.z1=250/A(this.depth,.001),this.z2=this.z1/this.zoom,this.radius=.0075*I(u.height,u.width),this.max_radius=100,this.max_weight=[],this.min_weight=[],this.textFont=this.textFont&&Y(this.textFont),this.textHeight*=1,this.imageRadius=this.imageRadius.toString(),this.pulsateTo=v(this.pulsateTo,0,1),this.minBrightness=v(this.minBrightness,0,1),this.maxBrightness=v(this.maxBrightness,this.minBrightness,1),this.ctxt.textBaseline="top",this.lx=(this.lock+"").indexOf("x")+1,this.ly=(this.lock+"").indexOf("y")+1,this.frozen=this.dx=this.dy=this.fixedAnim=this.touchState=0,this.fixedAlpha=1,this.source=i||t,this.repeatTags=I(64,~~this.repeatTags),this.minTags=I(200,~~this.minTags),0<~~this.scrollPause?rt.scrollPause=~~this.scrollPause:this.scrollPause=0,0<this.minTags&&this.repeatTags<1&&(s=this.GetTags().length)&&(this.repeatTags=c(this.minTags/s)-1),this.transform=C.Identity(),this.startTime=this.time=T(),this.mx=this.my=-1,this.centreImage&&(o=this,(r=new Image).onload=function(){var n=r.width/2,a=r.height/2;o.centreFunc=function(t,i,e,s,h){t.setTransform(1,0,0,1,0,0),t.globalAlpha=1,t.drawImage(r,s-n,h-a)}},r.src=o.centreImage),this.Animate=this.dragControl?this.AnimateDrag:this.AnimatePosition,this.animTiming="function"==typeof rt[this.animTiming]?rt[this.animTiming]:rt.Smooth,this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]?(this.ctxt.shadowColor=this.shadow,this.shadow=this.ctxt.shadowColor,this.shadowAlpha=!!(a=E(3,3))&&((n=a.getContext("2d")).strokeStyle="#000",n.shadowColor="#fff",n.shadowBlur=3,n.globalAlpha=0,n.strokeRect(2,2,2,2),n.globalAlpha=1,a=null,0<n.getImageData(2,2,1,1).data[0])):delete this.shadow,this.Load(),i&&this.hideTags&&(l=this,rt.loaded?l.HideTags():U("load",function(){l.HideTags()},window)),this.yaw=this.initial?this.initial[0]*this.maxSpeed:0,this.pitch=this.initial?this.initial[1]*this.maxSpeed:0,this.tooltip?(this.ctitle=u.title,u.title="","native"==this.tooltip?this.Tooltip=this.TooltipNative:(this.Tooltip=this.TooltipDiv,this.ttdiv||(this.ttdiv=p.createElement("div"),this.ttdiv.className=this.tooltipClass,this.ttdiv.style.position="absolute",this.ttdiv.style.zIndex=u.style.zIndex+1,U("mouseover",function(t){t.target.style.display="none"},this.ttdiv),p.body.appendChild(this.ttdiv)))):this.Tooltip=this.TooltipNone,!this.noMouse&&!w[t])for(w[t]=[["mousemove",J],["mouseout",j],["mouseup",Q],["touchstart",$],["touchend",tt],["touchcancel",tt],["touchmove",it]],this.dragControl&&(w[t].push(["mousedown",K]),w[t].push(["selectstart",y])),this.wheelZoom&&(w[t].push(["mousewheel",et]),w[t].push(["DOMMouseScroll",et])),this.scrollPause&&w[t].push(["scroll",st,window]),s=0;s<w[t].length;++s)U((h=w[t][s])[0],h[1],h[2]||u);rt.started||(i=window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,rt.NextFrame=i?rt.NextFrameRAF:rt.NextFrameTimeout,rt.interval=this.interval,rt.NextFrame(this.interval),rt.started=1)}function lt(t){var i=t.targetTouches[0],t=t.targetTouches[1];return m(g(t.pageX-i.pageX,2)+g(t.pageY-i.pageY,2))}function ut(t,i){rt.tc[i]&&rt.tc[i][t]()}for(e in(i=b.prototype).length=function(){return m(this.x*this.x+this.y*this.y+this.z*this.z)},i.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},i.cross=function(t){return new b(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)},i.angle=function(t){var i=this.dot(t);return 0==i?Math.PI/2:1<=(t=i/(this.length()*t.length()))?0:t<=-1?Math.PI:Math.acos(t)},i.unit=function(){var t=this.length();return new b(this.x/t,this.y/t,this.z/t)},i=C.prototype,C.Identity=function(){return new C([1,0,0,0,1,0,0,0,1])},C.Rotation=function(t,i){var e=d(t),s=f(t),t=1-s;return new C([s+g(i.x,2)*t,i.x*i.y*t-i.z*e,i.x*i.z*t+i.y*e,i.y*i.x*t+i.z*e,s+g(i.y,2)*t,i.y*i.z*t-i.x*e,i.z*i.x*t-i.y*e,i.z*i.y*t+i.x*e,s+g(i.z,2)*t])},i.mul=function(t){for(var i,e=[],s=t.xform?1:0,h=1;h<=3;++h)for(i=1;i<=3;++i)s?e.push(this[h][1]*t[1][i]+this[h][2]*t[2][i]+this[h][3]*t[3][i]):e.push(this[h][i]*t);return new C(e)},i.xform=function(t){var i={},e=t.x,s=t.y,t=t.z;return i.x=e*this[1][1]+s*this[2][1]+t*this[3][1],i.y=e*this[1][2]+s*this[2][2]+t*this[3][2],i.z=e*this[1][3]+s*this[2][3]+t*this[3][3],i},(i=_.prototype).SetImage=function(t,i,e,s,h,n,a,o){this.image=t,this.iwidth=i*this.scale,this.iheight=e*this.scale,this.ipos=s,this.ipad=h*this.scale,this.iscale=o,this.ialign=n,this.ivalign=a},i.Align=function(t,i,e){var s=0;return"right"==e||"bottom"==e?s=i-t:"left"!=e&&"top"!=e&&(s=(i-t)/2),s},i.Create=function(t,i,e,s,h,n,a,o,r){var l,u,g,c,d,f,m,p,w,x,v,y,T,S,b,C=D(a[0]),z=D(a[1]);return o=A(o,C+n,z+n),u=this.width+(c=2*(o+s)),g=this.height+(f=2*(o+s)),p=w=o+s,this.image&&(x=v=o+s,y=this.iwidth,T=this.iheight,"top"==this.ipos||"bottom"==this.ipos?(y<this.width?x+=this.Align(y,this.width,this.ialign):p+=this.Align(this.width,y,this.align),"top"==this.ipos?w+=T+this.ipad:v+=this.height+this.ipad,u=A(u,y+c),g+=T+this.ipad):(T<this.height?v+=this.Align(T,this.height,this.ivalign):w+=this.Align(this.height,T,this.valign),"right"==this.ipos?x+=this.width+this.ipad:p+=y+this.ipad,u+=y+this.ipad,g=A(g,T+f))),(l=E(u,g))?(c=f=s/2,o=I(r,(d=u-s)/2,(m=g-s)/2),r=l.getContext("2d"),i&&(r.fillStyle=i,N(r,c,f,d,m,o)),s&&(r.strokeStyle=e,r.lineWidth=s,N(r,c,f,d,m,o,!0)),(n||C||z)&&(S=E(u,g))&&(b=r,r=S.getContext("2d")),R(r,this.font,t,this.strings,p,w,0,0,[],this.maxWidth,this.stringWidths,this.align),this.image&&r.drawImage(this.image,x,v,y,T),b&&(r=b,h&&(r.shadowColor=h),n&&(r.shadowBlur=n),r.shadowOffsetX=a[0],r.shadowOffsetY=a[1],r.drawImage(S,0,0)),l):null},(i=nt.prototype).Empty=function(){for(var t=0;t<this.text.length;++t)if(this.text[t].length)return!1;return!0},i.Lines=function(t){for(var i,e=t?1:0,s=(i=(t=t||this.e).childNodes).length,h=0;h<s;++h)"BR"==i[h].nodeName?(this.text.push(this.line.join(" ")),this.br=1):3==i[h].nodeType?this.br?(this.line=[i[h].nodeValue],this.br=0):this.line.push(i[h].nodeValue):this.Lines(i[h]);return e||this.br||this.text.push(this.line.join(" ")),this.text},i.SplitWidth=function(t,i,e,s){var h,n,a,o=[];for(i.font=s+"px "+e,h=0;h<this.text.length;++h){for(a=this.text[h].split(/\s+/),this.line=[a[0]],n=1;n<a.length;++n)i.measureText(this.line.join(" ")+" "+a[n]).width>t?(o.push(this.line.join(" ")),this.line=[a[n]]):this.line.push(a[n]);o.push(this.line.join(" "))}return this.text=o},(i=at.prototype).SetMethod=function(t){var i={block:["PreDraw","DrawBlock"],colour:["PreDraw","DrawColour"],outline:["PostDraw","DrawOutline"],classic:["LastDraw","DrawOutline"],size:["PreDraw","DrawSize"],none:["LastDraw"]},i=i[t]||i.outline;"none"==t?this.Draw=function(){return 1}:this.drawFunc=this[i[1]],this[i[0]]=this.Draw},i.Update=function(t,i,e,s,h,n,a,o){var r=this.tc.outlineOffset,l=2*r;this.x=h*t+a-r,this.y=h*i+o-r,this.w=h*e+l,this.h=h*s+l,this.sc=h,this.z=n},i.Ants=function(t){var i,e,s,h,n,a,o,r,l;this.adash&&(s=(i=this.adash)+(l=this.agap),n=i,a=l,r=o=h=0,(e=this.aspeed)&&(r=D(e)*(T()-this.ts)/50,e=~~(r=e<0?864e4-r:r)%s),l=e?(e<=i?(h=i-e,n=e):o=l-(a=s-e),[h,a,n,o]):[i,l],t.setLineDash(l))},i.DrawOutline=function(t,i,e,s,h,n){var a=I(this.radius,h/2,s/2);t.strokeStyle=n,this.Ants(t),N(t,i,e,s,h,a,!0)},i.DrawSize=function(t,i,e,s,h,n,a,o,r){var l,u,g=a.w,c=a.h;return this.pulsate?(u=a.image?(a.image.height+this.tc.outlineIncrease)/a.image.height:a.oscale,l=a.fimage||a.image,u=1+(u-1)*(1-this.pulse),a.h*=u,a.w*=u):l=a.oimage,a.alpha=1,a.Draw(t,o,r,l),a.h=c,a.w=g,1},i.DrawColour=function(t,i,e,s,h,n,a,o,r){return a.oimage?(this.pulse<1?(a.alpha=1-g(this.pulse,2),a.Draw(t,o,r,a.fimage),a.alpha=this.pulse):a.alpha=1,a.Draw(t,o,r,a.oimage),1):this[a.image?"DrawColourImage":"DrawColourText"](t,i,e,s,h,n,a,o,r)},i.DrawColourText=function(t,i,e,s,h,n,a,o,r){var l=a.colour;return a.colour=n,a.alpha=1,a.Draw(t,o,r),a.colour=l,1},i.DrawColourImage=function(t,i,e,s,h,n,a,o,r){var l=t.canvas,i=~~A(i,0),e=~~A(e,0),s=I(l.width-i,s)+.5|0,h=I(l.height-e,h)+.5|0;return u?(u.width=s,u.height=h):u=E(s,h),u?(u.getContext("2d").drawImage(l,i,e,s,h,0,0,s,h),t.clearRect(i,e,s,h),this.pulsate?a.alpha=1-g(this.pulse,2):a.alpha=1,a.Draw(t,o,r),t.setTransform(1,0,0,1,0,0),t.save(),t.beginPath(),t.rect(i,e,s,h),t.clip(),t.globalCompositeOperation="source-in",t.fillStyle=n,t.fillRect(i,e,s,h),t.restore(),t.globalAlpha=1,t.globalCompositeOperation="destination-over",t.drawImage(u,0,0,s,h,i,e,s,h),t.globalCompositeOperation="source-over",1):this.SetMethod("outline")},i.DrawBlock=function(t,i,e,s,h,n){var a=I(this.radius,h/2,s/2);t.fillStyle=n,N(t,i,e,s,h,a)},i.DrawSimple=function(t,i,e,s,h,n){var a=this.tc;return t.setTransform(1,0,0,1,0,0),t.strokeStyle=this.colour,t.lineWidth=a.outlineThickness,t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0,t.globalAlpha=n?h:1,this.drawFunc(t,this.x,this.y,this.w,this.h,this.colour,i,e,s)},i.DrawPulsate=function(t,i,e,s){var h=T()-this.ts,n=this.tc,n=n.pulsateTo+(1-n.pulsateTo)*(.5+f(2*Math.PI*h/(1e3*n.pulsateTime))/2);return this.pulse=n=rt.Smooth(1,n),this.DrawSimple(t,i,e,s,n,1)},i.Active=function(t,i,e){e=i>=this.x&&e>=this.y&&i<=this.x+this.w&&e<=this.y+this.h;return this.ts=e?this.ts||T():null,e},i.PreDraw=i.PostDraw=i.LastDraw=y,(i=ot.prototype).Init=function(t){var i=this.tc;this.textHeight=i.textHeight,this.HasText()?this.Measure(i.ctxt,i):(this.w=this.iw,this.h=this.ih),this.SetShadowColour=i.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed,this.SetDraw(i)},i.Draw=y,i.HasText=function(){return this.text&&0<this.text[0].length},i.EqualTo=function(t){var i=t.getElementsByTagName("img");return this.a.href!=t.href?0:i.length?this.image.src==i[0].src:(t.innerText||t.textContent)==this.text_original},i.SetImage=function(t){this.image=this.fimage=t},i.SetDraw=function(t){this.Draw=this.fimage?7<t.ie?this.DrawImageIE:this.DrawImage:this.DrawText,t.noSelect&&(this.CheckActive=y)},i.MeasureText=function(t){for(var i,e=this.text.length,s=0,h=0;h<e;++h)this.line_widths[h]=i=t.measureText(this.text[h]).width,s=A(s,i);return s},i.Measure=function(t,i){var e,s,h,n,a,o,r,l,u=X(this.text,this.textFont,this.textHeight),g=u?u.max.y+u.min.y:this.textHeight;t.font=this.font=this.textHeight+"px "+this.textFont,o=this.MeasureText(t),i.txtOpt&&(h=(e=i.txtScale)*this.textHeight+"px "+this.textFont,n=[e*i.shadowOffset[0],e*i.shadowOffset[1]],t.font=h,a=this.MeasureText(t),l=new _(this.text,h,a+e,e*g+e,a,this.line_widths,i.textAlign,i.textVAlign,e),this.image&&l.SetImage(this.image,this.iw,this.ih,i.imagePosition,i.imagePadding,i.imageAlign,i.imageVAlign,i.imageScale),r=l.Create(this.colour,this.bgColour,this.bgOutline,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius),"colour"==i.outlineMethod?this.oimage=l.Create(this.outline.colour,this.bgColour,this.outline.colour,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius):"size"==i.outlineMethod&&(s=(u=X(this.text,this.textFont,this.textHeight+i.outlineIncrease)).max.y+u.min.y,h=e*(this.textHeight+i.outlineIncrease)+"px "+this.textFont,t.font=h,a=this.MeasureText(t),l=new _(this.text,h,a+e,e*s+e,a,this.line_widths,i.textAlign,i.textVAlign,e),this.image&&l.SetImage(this.image,this.iw+i.outlineIncrease,this.ih+i.outlineIncrease,i.imagePosition,i.imagePadding,i.imageAlign,i.imageVAlign,i.imageScale),this.oimage=l.Create(this.colour,this.bgColour,this.bgOutline,e*this.bgOutlineThickness,i.shadow,e*i.shadowBlur,n,e*this.padding,e*this.bgRadius),this.oscale=this.oimage.width/r.width,0<i.outlineIncrease?r=L(r,this.oimage.width,this.oimage.height):this.oimage=L(this.oimage,r.width,r.height)),r&&(this.fimage=r,o=this.fimage.width/e,g=this.fimage.height/e),this.SetDraw(i),i.txtOpt=!!this.fimage),this.h=g,this.w=o},i.SetFont=function(t,i,e,s){this.textFont=t,this.colour=i,this.bgColour=e,this.bgOutline=s,this.Measure(this.tc.ctxt,this.tc)},i.SetWeight=function(t){var i,e,s=this.tc,h=s.weightMode.split(/[, ]/),n=t.length;if(this.HasText()){for(this.weighted=!0,e=0;e<n;++e)"both"==(i=h[e]||"size")?(this.Weight(t[e],s.ctxt,s,"size",s.min_weight[e],s.max_weight[e],e),this.Weight(t[e],s.ctxt,s,"colour",s.min_weight[e],s.max_weight[e],e)):this.Weight(t[e],s.ctxt,s,i,s.min_weight[e],s.max_weight[e],e);this.Measure(s.ctxt,s)}},i.Weight=function(t,i,e,s,h,n,a){h=((t=isNaN(t)?1:t)-h)/(n-h);"colour"==s?this.colour=B(e,h,a):"bgcolour"==s?this.bgColour=B(e,h,a):"bgoutline"==s?this.bgOutline=B(e,h,a):"outline"==s?this.outline.colour=B(e,h,a):"size"==s&&(0<e.weightSizeMin&&e.weightSizeMax>e.weightSizeMin?this.textHeight=e.weightSize*(e.weightSizeMin+(e.weightSizeMax-e.weightSizeMin)*h):this.textHeight=A(1,t*e.weightSize))},i.SetShadowColourFixed=function(t,i,e){t.shadowColor=i},i.SetShadowColourAlpha=function(t,i,e){var s,h;t.shadowColor=(h=s=i,i=(+(t=e)).toPrecision(3)+")","#"===s[0]?(n[s]||(4===s.length?n[s]="rgba("+o[s[1]]+o[s[2]]+o[s[3]]:n[s]="rgba("+a[s.substr(1,2)]+a[s.substr(3,2)]+a[s.substr(5,2)]),h=n[s]+i):"rgb("===s.substr(0,4)||"hsl("===s.substr(0,4)?h=s.replace("(","a(").replace(")",","+i):"rgba("!==s.substr(0,5)&&"hsla("!==s.substr(0,5)||(e=s.lastIndexOf(",")+1,i=s.indexOf(")"),t*=parseFloat(s.substring(e,i)),h=s.substr(0,e)+t.toPrecision(3)+")"),h)},i.DrawText=function(t,i,e){var s,h,n=this.tc,a=this.x,o=this.y,r=this.sc;for(t.globalAlpha=this.alpha,t.fillStyle=this.colour,n.shadow&&this.SetShadowColour(t,n.shadow,this.alpha),t.font=this.font,a+=i/r,o+=e/r-this.h/2,s=0;s<this.text.length;++s)h=a,"right"==n.textAlign?h+=this.w/2-this.line_widths[s]:"centre"==n.textAlign?h-=this.line_widths[s]/2:h-=this.w/2,t.setTransform(r,0,0,r,r*h,r*o),t.fillText(this.text[s],0,0),o+=this.textHeight},i.DrawImage=function(t,i,e,s){var h=this.x,n=this.y,a=this.sc,o=s||this.fimage,r=this.w,l=this.h,u=this.alpha,s=this.shadow;t.globalAlpha=u,s&&this.SetShadowColour(t,s,u),t.setTransform(a,0,0,a,a*(h+=i/a-r/2),a*(n+=e/a-l/2)),t.drawImage(o,0,0,r,l)},i.DrawImageIE=function(t,i,e){var s=this.fimage,h=this.sc,n=s.width=this.w*h,a=s.height=this.h*h,n=this.x*h+i-n/2,a=this.y*h+e-a/2;t.setTransform(1,0,0,1,0,0),t.globalAlpha=this.alpha,t.drawImage(s,n,a)},i.Calc=function(t,i){var e,s,h=this.tc,n=h.minBrightness,a=h.maxBrightness,o=h.max_radius,r=t.xform(this.position);return this.xformed=r,e=h.stretchX,s=h.stretchY,t=h.radius*h.z1/(h.z1+h.z2+r.z),r={x:r.x*t*e,y:r.y*t*s,z:r.z,w:(h.z1-r.z)/h.z2},this.x=r.x,this.y=r.y,this.z=r.z,this.sc=r.w,this.alpha=i*v(n+(a-n)*(o-this.z)/(2*o),0,1),this.xformed},i.UpdateActive=function(t,i,e){var s=this.outline,h=this.w,n=this.h,a=this.x-h/2,o=this.y-n/2;return s.Update(a,o,h,n,this.sc,this.z,i,e),s},i.CheckActive=function(t,i,e){var s=this.tc,e=this.UpdateActive(t,i,e);return e.Active(t,s.mx,s.my)?e:null},i.Clicked=function(t){var i,e=this.a,s=e.target,h=e.href;if(""==s||"_self"==s){if(p.createEvent){if((i=p.createEvent("MouseEvents")).initMouseEvent("click",1,1,window,0,0,0,0,0,0,0,0,0,0,null),!e.dispatchEvent(i))return}else if(e.fireEvent&&!e.fireEvent("onclick"))return;p.location=h}else if(self.frames[s])self.frames[s].document.location=h;else{try{if(top.frames[s])return void(top.frames[s].document.location=h)}catch(t){}window.open(h,s)}},(i=rt.prototype).SourceElements=function(){return p.querySelectorAll?p.querySelectorAll("#"+this.source):[p.getElementById(this.source)]},i.HideTags=function(){for(var t=this.SourceElements(),i=0;i<t.length;++i)t[i].style.display="none"},i.GetTags=function(){for(var t,i,e,s=this.SourceElements(),h=[],n=0;n<=this.repeatTags;++n)for(i=0;i<s.length;++i)for(t=s[i].getElementsByTagName("a"),e=0;e<t.length;++e)h.push(t[e]);return h},i.Message=function(t){for(var i,e,s,h=[],n=t.split(""),a=0;a<n.length;++a)" "!=n[a]&&(s=a-n.length/2,(i=p.createElement("A")).href="#",i.innerText=n[a],e=100*d(s/9),s=-100*f(s/9),(s=new ot(this,n[a],i,[e,0,s],2,18,"#000","#fff",0,0,0,"monospace",2,n[a])).Init(),h.push(s));return h},i.CreateTag=function(t){var i,e,s,h,n,a,o,r,l=[0,0,0];return"text"!=this.imageMode&&(i=t.getElementsByTagName("img")).length&&((e=new Image).src=i[0].src,!this.imageMode)?((s=new ot(this,"",t,l,0,0)).SetImage(e),V(e,i[0],s,this),s):("image"!=this.imageMode&&(h=(n=new nt(t)).Lines(),n.Empty()?n=null:(a=this.textFont||Y(q(t,"font-family")),this.splitWidth&&(h=n.SplitWidth(this.splitWidth,this.ctxt,a,this.textHeight)),o="tag"==this.bgColour?q(t,"background-color"):this.bgColour,r="tag"==this.bgOutline?q(t,"color"):this.bgOutline)),n||e?(s=new ot(this,h,t,l,2,this.textHeight+2,this.textColour||q(t,"color"),o,this.bgRadius,r,this.bgOutlineThickness,a,this.padding,n&&n.original),e?(s.SetImage(e),V(e,i[0],s,this)):s.Init(),s):void 0)},i.UpdateTag=function(t,i){var e=this.textColour||q(i,"color"),s=this.textFont||Y(q(i,"font-family")),h="tag"==this.bgColour?q(i,"background-color"):this.bgColour,n="tag"==this.bgOutline?q(i,"color"):this.bgOutline;t.a=i,t.title=i.title,t.colour==e&&t.textFont==s&&t.bgColour==h&&t.bgOutline==n||t.SetFont(s,e,h,n)},i.Weight=function(t){for(var i,e,s,h,n,a,o=t.length,r=[],l=this.weightFrom?this.weightFrom.split(/[, ]/):[null],u=l.length,g=0;g<o;++g)for(r[g]=[],i=0;i<u;++i)s=t[g].a,h=l[i],n=this.textHeight,a=void 0,a=1,h?a=+(s.getAttribute(h)||n):(s=q(s,"font-size"))&&(a=-1<s.indexOf("px")&&+s.replace("px","")||-1<s.indexOf("pt")&&1.25*s.replace("pt","")||3.3*s),a=a,(!this.max_weight[i]||a>this.max_weight[i])&&(this.max_weight[i]=a),(!this.min_weight[i]||a<this.min_weight[i])&&(this.min_weight[i]=a),r[g][i]=a;for(i=0;i<u;++i)this.max_weight[i]>this.min_weight[i]&&(e=1);if(e)for(g=0;g<o;++g)t[g].SetWeight(r[g])},i.Load=function(){var t,i,e,s,h,n,a,o,r=this.GetTags(),l=[],u=[],g={sphere:z,vcylinder:F,hcylinder:O,vring:k,hring:P};if(r.length){for(u.length=r.length,o=0;o<r.length;++o)u[o]=o;for(this.shuffleTags&&S(u),s=100*this.radiusX,h=100*this.radiusY,n=100*this.radiusZ,this.max_radius=A(s,A(h,n)),o=0;o<r.length;++o)(i=this.CreateTag(r[u[o]]))&&l.push(i);for(this.weight&&this.Weight(l,!0),this.shapeArgs?this.shapeArgs[0]=l.length:(t=(e=this.shape.toString().split(/[(),]/)).shift(),"function"==typeof window[t]?this.shape=window[t]:this.shape=g[t]||g.sphere,this.shapeArgs=[l.length,s,h,n].concat(e)),a=this.shape.apply(this,this.shapeArgs),this.listLength=l.length,o=0;o<l.length;++o)l[o].position=new b(a[o][0],a[o][1],a[o][2])}this.noTagsMessage&&!l.length&&(o=this.imageMode&&"both"!=this.imageMode?this.imageMode+" ":"",l=this.Message("No "+o+"tags")),this.taglist=l},i.Update=function(){var t,i,e,s,h,n,a=this.GetTags(),o=[],r=this.taglist,l=[],u=[];if(!this.shapeArgs)return this.Load();if(a.length){for(s=this.listLength=a.length,e=r.length,h=0;h<e;++h)o.push(r[h]),u.push(h);for(h=0;h<s;++h){for(t=n=0;n<e;++n)r[n].EqualTo(a[h])&&(this.UpdateTag(o[n],a[h]),t=u[n]=-1);t||l.push(h)}for(n=h=0;h<e;++h)-1==u[n]?u.splice(n,1):++n;if(u.length){for(S(u);u.length&&l.length;)h=u.shift(),n=l.shift(),o[h]=this.CreateTag(a[n]);for(u.sort(function(t,i){return t-i});u.length;)o.splice(u.pop(),1)}for(n=o.length/(l.length+1),h=0;l.length;)o.splice(c(++h*n),0,this.CreateTag(a[l.shift()]));for(this.shapeArgs[0]=s=o.length,i=this.shape.apply(this,this.shapeArgs),h=0;h<s;++h)o[h].position=new b(i[h][0],i[h][1],i[h][2]);this.weight&&this.Weight(o)}this.taglist=o},i.SetShadow=function(t){t.shadowBlur=this.shadowBlur,t.shadowOffsetX=this.shadowOffset[0],t.shadowOffsetY=this.shadowOffset[1]},i.Draw=function(t){if(!this.paused){var i,e,s,h=this.canvas,n=h.width,a=h.height,o=0,r=(t-this.time)*rt.interval/1e3,l=n/2+this.offsetX,u=a/2+this.offsetY,g=this.ctxt,c=-1,d=this.taglist,f=d.length,m=this.frontSelect,p=this.centreFunc==y;if(this.time=t,this.frozen&&this.drawn)return this.Animate(n,a,r);for(t=this.AnimateFixed(),g.setTransform(1,0,0,1,0,0),s=0;s<f;++s)d[s].Calc(this.transform,this.fixedAlpha);if(d=function(t,i){for(var e=[],s=t.length,h=0;h<s;++h)e.push(t[h]);return e.sort(i),e}(d,function(t,i){return i.z-t.z}),t&&this.fixedAnim.active)i=this.fixedAnim.tag.UpdateActive(g,l,u);else{for(this.active=null,s=0;s<f;++s)(e=0<=this.mx&&0<=this.my&&this.taglist[s].CheckActive(g,l,u))&&e.sc>o&&(!m||e.z<=0)&&(c=s,(i=e).tag=this.taglist[s],o=e.sc);this.active=i}for(this.txtOpt||this.shadow&&this.SetShadow(g),g.clearRect(0,0,n,a),s=0;s<f;++s){if(!p&&d[s].z<=0){try{this.centreFunc(g,n,a,l,u)}catch(t){alert(t),this.centreFunc=y}p=!0}i&&i.tag==d[s]&&i.PreDraw(g,d[s],l,u)||d[s].Draw(g,l,u),i&&i.tag==d[s]&&i.PostDraw(g)}this.freezeActive&&i?this.Freeze():(this.UnFreeze(),this.drawn=f==this.listLength),this.fixedCallback&&(this.fixedCallback(this,this.fixedCallbackTag),this.fixedCallback=null),t||this.Animate(n,a,r),i&&i.LastDraw(g),h.style.cursor=i?this.activeCursor:"",this.Tooltip(i,this.taglist[c])}},i.TooltipNone=function(){},i.TooltipNative=function(t,i){this.canvas.title=t?i&&i.title?i.title:"":this.ctitle},i.SetTTDiv=function(t,i){var e=this,s=e.ttdiv.style;t!=e.ttdiv.innerHTML&&(s.display="none"),e.ttdiv.innerHTML=t,i&&(i.title=e.ttdiv.innerHTML),"none"!=s.display||e.tttimer||(e.tttimer=setTimeout(function(){var t=ht(e.canvas.id);s.display="block",s.left=t.x+e.mx+"px",s.top=t.y+e.my+24+"px",e.tttimer=null},e.tooltipDelay))},i.TooltipDiv=function(t,i){t&&i&&i.title?this.SetTTDiv(i.title,i):!t&&-1!=this.mx&&-1!=this.my&&this.ctitle.length?this.SetTTDiv(this.ctitle):this.ttdiv.style.display="none"},i.Transform=function(t,i,e){var s,h;(i||e)&&(s=d(i),h=f(i),i=d(e),e=new C([e=f(e),0,i,0,1,0,-i,0,e]),h=new C([1,0,0,0,h,-s,0,s,h]),t.transform=t.transform.mul(e.mul(h)))},i.AnimateFixed=function(){var t,i,e,s;return this.fadeIn&&((t=T()-this.startTime)>=this.fadeIn?(this.fadeIn=0,this.fixedAlpha=1):this.fixedAlpha=t/this.fadeIn),!!this.fixedAnim&&(this.fixedAnim.transform||(this.fixedAnim.transform=this.transform),e=this.fixedAnim,t=T()-e.t0,i=e.angle,s=this.animTiming(e.t,t),this.transform=e.transform,t>=e.t?(this.fixedCallbackTag=e.tag,this.fixedCallback=e.cb,this.fixedAnim=this.yaw=this.pitch=0):i*=s,e=C.Rotation(i,e.axis),this.transform=this.transform.mul(e),0!=this.fixedAnim)},i.AnimatePosition=function(t,i,e){var s,h,n=this,a=n.mx,o=n.my;!n.frozen&&0<=a&&0<=o&&a<t&&o<i?(s=n.maxSpeed,h=n.reverse?-1:1,n.lx||(n.yaw=(2*a*s/t-s)*h*e),n.ly||(n.pitch=(2*o*s/i-s)*-h*e),n.initial=null):n.initial||(n.frozen&&!n.freezeDecel?n.yaw=n.pitch=0:n.Decel(n)),this.Transform(n,n.pitch,n.yaw)},i.AnimateDrag=function(t,i,e){var s=this,e=100*e*s.maxSpeed/s.max_radius/s.zoom;s.dx||s.dy?(s.lx||(s.yaw=s.dx*e/s.stretchX),s.ly||(s.pitch=s.dy*-e/s.stretchY),s.dx=s.dy=0,s.initial=null):s.initial||s.Decel(s),this.Transform(s,s.pitch,s.yaw)},i.Freeze=function(){this.frozen||(this.preFreeze=[this.yaw,this.pitch],this.frozen=1,this.drawn=0)},i.UnFreeze=function(){this.frozen&&(this.yaw=this.preFreeze[0],this.pitch=this.preFreeze[1],this.frozen=0)},i.Decel=function(t){var i=t.minSpeed,e=D(t.yaw),s=D(t.pitch);!t.lx&&i<e&&(t.yaw=e>t.z0?t.yaw*t.decel:0),!t.ly&&i<s&&(t.pitch=s>t.z0?t.pitch*t.decel:0)},i.Zoom=function(t){this.z2=this.z1*(1/t),this.drawn=0},i.Clicked=function(t){var i=this.active;try{i&&i.tag&&(!1===this.clickToFront||null===this.clickToFront?i.tag.Clicked(t):this.TagToFront(i.tag,this.clickToFront,function(){i.tag.Clicked(t)},!0))}catch(t){}},i.Wheel=function(t){t=this.zoom+this.zoomStep*(t?1:-1);this.zoom=I(this.zoomMax,A(this.zoomMin,t)),this.Zoom(this.zoom)},i.BeginDrag=function(t){this.down=Z(t,this.canvas),t.cancelBubble=!0,t.returnValue=!1,t.preventDefault&&t.preventDefault()},i.Drag=function(t,i){var e,s,h;return this.dragControl&&this.down&&(e=this.dragThreshold*this.dragThreshold,s=i.x-this.down.x,h=i.y-this.down.y,(this.dragging||e<s*s+h*h)&&(this.dx=s,this.dy=h,this.dragging=1,this.down=i)),this.dragging},i.EndDrag=function(){var t=this.dragging;return this.dragging=this.down=null,t},i.BeginPinch=function(t){this.pinched=[lt(t),this.zoom],t.preventDefault&&t.preventDefault()},i.Pinch=function(t){var i=this.pinched;i&&(t=lt(t),i=i[1]*t/i[0],this.zoom=I(this.zoomMax,A(this.zoomMin,i)),this.Zoom(this.zoom))},i.EndPinch=function(t){this.pinched=null},i.Pause=function(){this.paused=!0},i.Resume=function(){this.paused=!1},i.SetSpeed=function(t){this.initial=t,this.yaw=t[0]*this.maxSpeed,this.pitch=t[1]*this.maxSpeed},i.FindTag=function(t){if(!x(t))return null;if(!r(t=x(t.index)?t.index:t))return this.taglist[t];var i,e,s;for(x(t.id)?(i="id",e=t.id):x(t.text)&&(i="innerText",e=t.text),s=0;s<this.taglist.length;++s)if(this.taglist[s].a[i]==e)return this.taglist[s]},i.RotateTag=function(t,i,e,s,h,n){var a=t.Calc(this.transform,1),a=new b(a.x,a.y,a.z),e=(e=e,i=(i=i)*Math.PI/180,e=e*Math.PI/180,new b(d(e)*f(i),-d(i),-f(e)*f(i))),i=a.angle(e),e=a.cross(e).unit();0==i?(this.fixedCallbackTag=t,this.fixedCallback=h):this.fixedAnim={angle:-i,axis:e,t:s,t0:T(),cb:h,tag:t,active:n}},i.TagToFront=function(t,i,e,s){this.RotateTag(t,0,0,i,e,s)},rt.Start=function(t,i,e){rt.Delete(t),rt.tc[t]=new rt(t,i,e)},rt.Linear=function(t,i){return i/t},rt.Smooth=function(t,i){return.5-f(i*Math.PI/t)/2},rt.Pause=function(t){ut("Pause",t)},rt.Resume=function(t){ut("Resume",t)},rt.Reload=function(t){ut("Load",t)},rt.Update=function(t){ut("Update",t)},rt.SetSpeed=function(t,i){return!(!r(i)||!rt.tc[t]||isNaN(i[0])||isNaN(i[1]))&&(rt.tc[t].SetSpeed(i),!0)},rt.TagToFront=function(t,i){return!!r(i)&&(i.lat=i.lng=0,rt.RotateTag(t,i))},rt.RotateTag=function(t,i){if(r(i)&&rt.tc[t]){isNaN(i.time)&&(i.time=500);var e=rt.tc[t].FindTag(i);if(e)return rt.tc[t].RotateTag(e,i.lat,i.lng,i.time,i.callback,i.active),!0}return!1},rt.Delete=function(t){var i,e,s,h,n;if(w[t]&&(e=p.getElementById(t)))for(i=0;i<w[t].length;++i)s=w[t][i][0],h=w[t][i][1],(n=(n=e)||p).removeEventListener?n.removeEventListener(s,h):n.detachEvent("on"+s,h);delete w[t],delete rt.tc[t]},rt.NextFrameRAF=function(){requestAnimationFrame(h)},rt.NextFrameTimeout=function(t){setTimeout(s,t)},rt.tc={},rt.options={z1:2e4,z2:2e4,z0:2e-4,freezeActive:!0,freezeDecel:!1,activeCursor:"pointer",pulsateTo:1,pulsateTime:3,reverse:!1,depth:.5,maxSpeed:.05,minSpeed:0,decel:.95,interval:20,minBrightness:.1,maxBrightness:1,outlineColour:"",outlineThickness:2,outlineOffset:5,outlineMethod:"outline",outlineRadius:0,textColour:["#222","#000"],textHeight:15,textFont:"Helvetica, Arial, sans-serif",shadow:"#111",shadowBlur:1,shadowOffset:[.1,.1],initial:null,hideTags:!1,zoom:0,weight:!1,weightMode:"size",weightFrom:null,weightSize:1,weightSizeMin:null,weightSizeMax:null,weightGradient:{0:"#f00",.33:"#ff0",.66:"#0f0",1:"#00f"},txtOpt:!0,txtScale:2,frontSelect:!1,wheelZoom:!0,zoomMin:.8,zoomMax:.8,zoomStep:.05,shape:"sphere",lock:null,tooltip:null,tooltipDelay:300,tooltipClass:"tctooltip",radiusX:1,radiusY:1,radiusZ:1,stretchX:1,stretchY:1,offsetX:0,offsetY:0,shuffleTags:!1,noSelect:!1,noMouse:!1,imageScale:1,paused:!1,dragControl:!1,dragThreshold:4,centreFunc:y,splitWidth:0,animTiming:"Smooth",clickToFront:!1,fadeIn:0,padding:0,bgColour:null,bgRadius:0,bgOutline:null,bgOutlineThickness:0,outlineIncrease:4,textAlign:"centre",textVAlign:"middle",imageMode:null,imagePosition:null,imagePadding:2,imageAlign:"centre",imageVAlign:"middle",noTagsMessage:!0,centreImage:null,pinchZoom:!1,repeatTags:0,minTags:0,imageRadius:0,scrollPause:!1,outlineDash:0,outlineDashSpace:0,outlineDashSpeed:1},rt.options)rt[e]=rt.options[e];window.TagCanvas=rt,U("load",function(){rt.loaded=1},window)}();