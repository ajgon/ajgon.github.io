webpackJsonp([0xe350753fb6ff],{103:function(e,t,n){"use strict";function a(e,t,n){var a={};h.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(e===!0)return void(a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"});if("auto"===e)return void(a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"});var r="".concat(Math.round(e/12*1e7)/1e5,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}),"xs"===n?(0,s.default)(e,a):e[t.breakpoints.up(n)]=a}function r(e,t){var n={};return y.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}function o(e){var t,n=e.alignContent,a=e.alignItems,r=e.classes,i=e.className,d=e.component,p=e.container,y=e.direction,h=e.item,m=e.justify,g=e.lg,v=e.md,x=e.sm,b=e.spacing,w=e.wrap,j=e.xl,O=e.xs,_=e.zeroMinWidth,k=(0,u.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),W=(0,f.default)((t={},(0,l.default)(t,r.container,p),(0,l.default)(t,r.item,h),(0,l.default)(t,r.zeroMinWidth,_),(0,l.default)(t,r["spacing-xs-".concat(String(b))],p&&0!==b),(0,l.default)(t,r["direction-xs-".concat(String(y))],y!==o.defaultProps.direction),(0,l.default)(t,r["wrap-xs-".concat(String(w))],w!==o.defaultProps.wrap),(0,l.default)(t,r["align-items-xs-".concat(String(a))],a!==o.defaultProps.alignItems),(0,l.default)(t,r["align-content-xs-".concat(String(n))],n!==o.defaultProps.alignContent),(0,l.default)(t,r["justify-xs-".concat(String(m))],m!==o.defaultProps.justify),(0,l.default)(t,r["grid-xs-".concat(String(O))],O!==!1),(0,l.default)(t,r["grid-sm-".concat(String(x))],x!==!1),(0,l.default)(t,r["grid-md-".concat(String(v))],v!==!1),(0,l.default)(t,r["grid-lg-".concat(String(g))],g!==!1),(0,l.default)(t,r["grid-xl-".concat(String(j))],j!==!1),t),i);return c.default.createElement(d,(0,s.default)({className:W},k))}var i=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var l=i(n(8)),u=i(n(4)),s=i(n(5)),c=i(n(1)),f=(i(n(3)),i(n(7))),d=i(n(6)),p=n(20),y=(i(n(123)),[0,8,16,24,32,40]),h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],m=function(e){return(0,s.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},r(e,"xs"),p.keys.reduce(function(t,n){return a(t,e,n),t},{}))};t.styles=m,o.propTypes={},o.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,d.default)(m,{name:"MuiGrid"})(o),v=g;t.default=v},68:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(103))},51:function(e,t,n){"use strict";function a(e){var t=e.implementation,n=(0,o.default)(e,["implementation"]);return"js"===t?i.default.createElement(l.default,n):i.default.createElement(u.default,n)}var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(4)),i=r(n(1)),l=(r(n(3)),r(n(53))),u=r(n(52));a.propTypes={},a.defaultProps={implementation:"js",lgDown:!1,lgUp:!1,mdDown:!1,mdUp:!1,smDown:!1,smUp:!1,xlDown:!1,xlUp:!1,xsDown:!1,xsUp:!1};var s=a;t.default=s},52:function(e,t,n){"use strict";function a(e){var t=e.children,n=e.classes,a=e.className,r=(e.lgDown,e.lgUp,e.mdDown,e.mdUp,e.only),i=(e.smDown,e.smUp,e.xlDown,e.xlUp,e.xsDown,e.xsUp,(0,o.default)(e,["children","classes","className","lgDown","lgUp","mdDown","mdUp","only","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]),[]);a&&i.push(a);for(var c=0;c<u.keys.length;c+=1){var f=u.keys[c],d=e["".concat(f,"Up")],p=e["".concat(f,"Down")];d&&i.push(n["".concat(f,"Up")]),p&&i.push(n["".concat(f,"Down")])}if(r){var y=Array.isArray(r)?r:[r];y.forEach(function(e){i.push(n["only".concat((0,s.capitalize)(e))])})}return l.default.createElement("div",{className:i.join(" ")},t)}var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(4)),i=r(n(8)),l=r(n(1)),u=(r(n(3)),r(n(14)),n(20)),s=n(19),c=r(n(6)),f=function(e){var t={display:"none"};return u.keys.reduce(function(n,a){return n["only".concat((0,s.capitalize)(a))]=(0,i.default)({},e.breakpoints.only(a),t),n["".concat(a,"Up")]=(0,i.default)({},e.breakpoints.up(a),t),n["".concat(a,"Down")]=(0,i.default)({},e.breakpoints.down(a),t),n},{})};a.propTypes={};var d=(0,c.default)(f)(a);t.default=d},53:function(e,t,n){"use strict";function a(e){var t=e.children,n=e.only,a=e.width,r=!0;if(n)if(Array.isArray(n))for(var o=0;o<n.length;o+=1){var i=n[o];if(a===i){r=!1;break}}else n&&a===n&&(r=!1);if(r)for(var s=0;s<l.keys.length;s+=1){var c=l.keys[s],f=e["".concat(c,"Up")],d=e["".concat(c,"Down")];if(f&&(0,u.isWidthUp)(c,a)||d&&(0,u.isWidthDown)(c,a)){r=!1;break}}return r?t:null}var r=n(34),o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(3)),l=n(20),u=r(n(45)),s=o(n(26));a.propTypes={children:i.default.node,className:i.default.string,implementation:i.default.oneOf(["js","css"]),initialWidth:i.default.oneOf(["xs","sm","md","lg","xl"]),lgDown:i.default.bool,lgUp:i.default.bool,mdDown:i.default.bool,mdUp:i.default.bool,only:i.default.oneOfType([i.default.oneOf(["xs","sm","md","lg","xl"]),i.default.arrayOf(i.default.oneOf(["xs","sm","md","lg","xl"]))]),smDown:i.default.bool,smUp:i.default.bool,width:i.default.string.isRequired,xlDown:i.default.bool,xlUp:i.default.bool,xsDown:i.default.bool,xsUp:i.default.bool},a.propTypes=(0,s.default)(a.propTypes);var c=(0,u.default)()(a);t.default=c},42:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(51))},54:function(e,t,n){"use strict";function a(e){var t,n=e.align,a=e.classes,r=e.className,c=e.color,d=e.component,p=e.gutterBottom,y=e.headlineMapping,h=e.noWrap,m=e.paragraph,g=e.variant,v=(0,l.default)(e,["align","classes","className","color","component","gutterBottom","headlineMapping","noWrap","paragraph","variant"]),x=(0,s.default)(a.root,a[g],(t={},(0,i.default)(t,a["color".concat((0,f.capitalize)(c))],"default"!==c),(0,i.default)(t,a.noWrap,h),(0,i.default)(t,a.gutterBottom,p),(0,i.default)(t,a.paragraph,m),(0,i.default)(t,a["align".concat((0,f.capitalize)(n))],"inherit"!==n),t),r),b=d||(m?"p":y[g])||"span";return u.default.createElement(b,(0,o.default)({className:x},v))}var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=r(n(5)),i=r(n(8)),l=r(n(4)),u=r(n(1)),s=(r(n(3)),r(n(7))),c=r(n(6)),f=n(19),d=function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main}}};t.styles=d,a.propTypes={},a.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:{display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3",body2:"aside",body1:"p"},noWrap:!1,paragraph:!1,variant:"body1"};var p=(0,c.default)(d,{name:"MuiTypography"})(a);t.default=p},21:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(54))},19:function(e,t,n){"use strict";function a(e){return e.charAt(0).toUpperCase()+e.slice(1)}function r(e,t){return Object.keys(t).every(function(n){return e.hasOwnProperty(n)&&e[n]===t[n]})}function o(e,t){for(var n=(0,s.default)(t),a=0;a<e.length;a+=1){if("function"===n&&!!t(e[a],a,e)==!0)return a;if("object"===n&&r(e[a],t))return a;if(["string","number","boolean"].indexOf(n)!==-1)return e.indexOf(t)}return-1}function i(e,t){var n=o(e,t);return n>-1?e[n]:void 0}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return null==t?e:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}},function(){})}var u=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=a,t.contains=r,t.findIndex=o,t.find=i,t.createChainedFunction=l;var s=u(n(35));u(n(14))},123:function(e,t,n){"use strict";function a(e){return function(){return null}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a;t.default=r},45:function(e,t,n){"use strict";var a=n(34);Object.defineProperty(t,"__esModule",{value:!0});var r={};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(55));Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))})},55:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.isWidthDown=t.isWidthUp=void 0;var r=a(n(5)),o=a(n(4)),i=a(n(9)),l=a(n(10)),u=a(n(13)),s=a(n(11)),c=a(n(12)),f=a(n(1)),d=(a(n(3)),a(n(40))),p=a(n(38)),y=(a(n(27)),a(n(64))),h=a(n(28)),m=n(20),g=a(n(122)),v=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?m.keys.indexOf(e)<=m.keys.indexOf(t):m.keys.indexOf(e)<m.keys.indexOf(t)};t.isWidthUp=v;var x=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?m.keys.indexOf(t)<=m.keys.indexOf(e):m.keys.indexOf(t)<m.keys.indexOf(e)};t.isWidthDown=x;var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.withTheme,a=void 0!==n&&n,v=e.noSSR,x=void 0!==v&&v,b=e.initialWidth,w=e.resizeInterval,j=void 0===w?166:w,O=function(e){function n(e){var t;return(0,i.default)(this,n),t=(0,u.default)(this,(0,s.default)(n).call(this,e)),t.handleResize=(0,p.default)(function(){var e=t.getWidth();e!==t.state.width&&t.setState({width:e})},j),t.state={width:void 0},x&&(t.state.width=t.getWidth()),t}return(0,c.default)(n,e),(0,l.default)(n,[{key:"componentDidMount",value:function(){var e=this.getWidth();e!==this.state.width&&this.setState({width:e})}},{key:"componentWillUnmount",value:function(){this.handleResize.clear()}},{key:"getWidth",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth,t=this.props.theme.breakpoints,n=null,a=1;null===n&&a<m.keys.length;){var r=m.keys[a];if(e<t.values[r]){n=m.keys[a-1];break}a+=1}return n=n||"xl"}},{key:"render",value:function(){var e=this.props,n=e.initialWidth,i=e.theme,l=e.width,u=(0,o.default)(e,["initialWidth","theme","width"]),s=(0,r.default)({width:l||this.state.width||n||b||(0,g.default)({theme:i,name:"MuiWithWidth"}).initialWidth},u),c={};return a&&(c.theme=i),void 0===s.width?null:f.default.createElement(d.default,{target:"window",onResize:this.handleResize},f.default.createElement(t,(0,r.default)({},c,s)))}}]),n}(f.default.Component);return O.propTypes={},(0,y.default)(O,t),(0,h.default)()(O)}},w=b;t.default=w},7:function(e,t,n){var a,r;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===r)for(var l in a)o.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(n.default=n,e.exports=n):(a=[],r=function(){return n}.apply(t,a),!(void 0!==r&&(e.exports=r)))}()},38:function(e,t){function n(e,t,n){function a(){var s=Date.now()-l;s<t&&s>=0?r=setTimeout(a,t-s):(r=null,n||(u=e.apply(i,o),i=o=null))}var r,o,i,l,u;null==t&&(t=100);var s=function(){i=this,o=arguments,l=Date.now();var s=n&&!r;return r||(r=setTimeout(a,t)),s&&(u=e.apply(i,o),i=o=null),u};return s.clear=function(){r&&(clearTimeout(r),r=null)},s.flush=function(){r&&(u=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},s}n.debounce=n,e.exports=n},40:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function r(e,t,n){return Object.defineProperty(e,t,n)}function o(e){return v({},w,e)}function i(e,t,n){var a=[e,t];return a.push(b?n:n.capture),a}function l(e,t,n,a){e.addEventListener.apply(e,i(t,n,a))}function u(e,t,n,a){e.removeEventListener.apply(e,i(t,n,a))}function s(e,t){var n=(e.children,e.target,g(e,["children","target"]));Object.keys(n).forEach(function(e){if("on"===e.substring(0,2)){var a=n[e],r=m(a),i="object"===r,l="function"===r;if(i||l){var u="capture"===e.substr(-7).toLowerCase(),s=e.substring(2).toLowerCase();s=u?s.substring(0,s.length-7):s,i?t(s,a.handler,a.options):t(s,a,o({capture:u}))}}})}function c(e,t){return{handler:e,options:o(t)}}Object.defineProperty(t,"__esModule",{value:!0});var f=a(n(9)),d=a(n(10)),p=a(n(13)),y=a(n(11)),h=a(n(12)),m=a(n(35)),g=a(n(4)),v=a(n(5)),x=a(n(1)),b=(a(n(3)),a(n(14)),function(){var e=null;return function(){if(null!==e)return e;var t=!1;try{window.addEventListener("test",null,r({},"passive",{get:function(){t=!0}}))}catch(e){}return e=t,t}()}()),w={capture:!1,passive:!1},j=function(e){function t(){return f(this,t),p(this,y(t).apply(this,arguments))}return h(t,e),d(t,[{key:"componentDidMount",value:function(){this.applyListeners(l)}},{key:"componentDidUpdate",value:function(e){this.applyListeners(u,e),this.applyListeners(l)}},{key:"componentWillUnmount",value:function(){this.applyListeners(u)}},{key:"applyListeners",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props,n=t.target;if(n){var a=n;"string"==typeof n&&(a=window[n]),s(t,e.bind(null,a))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(x.PureComponent);j.propTypes={},t.withOptions=c,t.default=j},125:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=a(l),s=n(3),c=a(s),f=n(42),d=a(f),p=n(21),y=a(p),h=n(18),m={root:{padding:"5rem 5px 0",marginTop:"15rem"},strongHeader:{fontWeight:"bold",marginBottom:"20px"}},g=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.classes,a=e.headline,r=e.idName,o=e.className,i="arialabel-"+(a||"").toLowerCase().replace(/[^a-z0-9]/g,"");return a?u.default.createElement("section",{className:n.root+" "+(o||""),id:r||a.toLowerCase(),role:"region","aria-labelledby":i},u.default.createElement(d.default,{smUp:!0},u.default.createElement(y.default,{variant:"display2",className:n.strongHeader,id:i},a)),u.default.createElement(d.default,{xsDown:!0},u.default.createElement(y.default,{variant:"display4",className:n.strongHeader,id:i},a)),t):u.default.createElement("section",{className:n.root+" "+(o||""),role:"region"},t)},t}(u.default.Component);g.propTypes={classes:c.default.object.isRequired},t.default=(0,h.withStyles)(m)(g),e.exports=t.default},597:function(e,t,n){e.exports=n.p+"static/ajgon.288480e5.png"},598:function(e,t,n){e.exports=n.p+"static/programajor.ead0a591.png"},347:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=a(l),s=n(3),c=a(s),f=n(68),d=a(f),p=n(75),y=a(p),h=n(18),m=n(597),g=a(m),v=n(598),x=a(v),b=n(125),w=a(b),j={autoFit:{maxWidth:"100%"}},O=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.classes;return u.default.createElement(w.default,null,u.default.createElement(d.default,{container:!0,spacing:24},u.default.createElement(d.default,{item:!0,xs:12,sm:6},u.default.createElement("a",{href:g.default,download:"ajgon.png"},u.default.createElement("img",{src:g.default,alt:"",className:e.autoFit}))),u.default.createElement(d.default,{item:!0,xs:12,sm:6},u.default.createElement("a",{href:x.default,download:"programajor.png"},u.default.createElement("img",{src:x.default,alt:"",className:e.autoFit})))))},t}(u.default.Component);O.propTypes={classes:c.default.object.isRequired},t.default=(0,y.default)((0,h.withStyles)(j)(O)),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-avatar-js-9fa81655143eb02dbbef.js.map