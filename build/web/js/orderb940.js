(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{3:function(e,t,i){e.exports=i("EOhL")},EOhL:function(e,t,i){"use strict";i.r(t);i("Rvik");var n=i("eW77");Object(n.a)()},Jvb9:function(e,t,i){"use strict";var n=i("PKX/");t.a=function(e){n.a.widgetPresets.forEach(function(t){document.getElementById(t.id).addEventListener("click",function(){var i,a;!function(e,t){t.selectServiceTypes(e.map(function(e){return e.id})),e.forEach(function(e){t.setServiceTypeSettings({serviceTypeId:e.id,settings:{quantity:e.count,selectedServiceId:e.selectedServiceId}})})}(t.items,e),i=this,n.a.widgetPresets.forEach(function(e){i.id===e.id?i.classList.add("selected"):document.getElementById(e.id).classList.remove("selected")}),a=document.getElementsByClassName("vast-service-order-now")[0].getBoundingClientRect().top+window.pageYOffset-45,window.scroll({top:a,behavior:"smooth"})})})}},"PKX/":function(e,t,i){"use strict";t.a={email:{text:"support@viewsta.com",link:"mailto:support@viewsta.com"},skype:{text:"support@viewsta.com",link:"skype:support@viewsta.com?chat"},telegram:{text:"@viewsta",link:"https://t.me/viewstasupport"},terms:{text:"Terms & Conditions",link:"/terms-and-conditions"},privacy:{text:"Privacy Policy",link:"/privacy-policy"},navigation:{ru:[{path:"/ru/pricing",name:"services-and-pricing",target:!1},{path:"/blog",name:"blog",target:!1},{path:"/ru/contacts",name:"contacts",target:!1},{path:"https://help.viewsta.com",name:"faq",target:"_blank"},{path:"/ru/order",name:"order",target:!1}],en:[{path:"/pricing",name:"services-and-pricing",target:!1},{path:"/blog",name:"blog",target:!1},{path:"/contacts",name:"contacts",target:!1},{path:"https://help.viewsta.com",name:"faq",target:"_blank"},{path:"/order",name:"order",target:!1}]},login:{text:"Login",link:"https://app.viewsta.com/login"},signup:{text:"Sign Up",link:"https://app.viewsta.com/register"},socialLinks:[{name:"youtube",link:"https://www.youtube.com/channel/UCuogEiRBS-NWXJu_P3O7mLg",size:12},{name:"vk",link:"https://vk.com/viewsta",size:10},{name:"facebook",link:"https://www.facebook.com/viewstasupplier",size:14},{name:"instagram",link:"https://www.instagram.com/viewsta_official/",size:14},{name:"linkedin",link:"https://www.linkedin.com/groups/13823522",size:12},{name:"telegram",link:"https://t.me/viewstasupport",size:12},{name:"twitter",link:"https://twitter.com/ViewstaS",size:12}],widgetPresets:[{id:"newbie",items:[{id:1,count:1e3,selectedServiceId:129},{id:2,count:100,selectedServiceId:147},{id:5,count:100,selectedServiceId:311}]},{id:"quick_start",items:[{id:1,count:5e3,selectedServiceId:131},{id:2,count:1e3,selectedServiceId:147},{id:5,count:500,selectedServiceId:311}]},{id:"promotion",items:[{id:1,count:1e4,selectedServiceId:138},{id:2,count:5e3,selectedServiceId:147},{id:4,count:5e3,selectedServiceId:302}]}],shownWidgetNetwork:{viewstaclub:4,viewstame:2}}},Rvik:function(e,t){document.getElementById("app").classList.add("is-header")},eW77:function(e,t,i){"use strict";var n=i("Jvb9");function a(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.addEventListener("DOMContentLoaded",function(){if("vastServiceOrderWidget"in window){var t=document.getElementById("#order-widget".substr(1));if(t){var i=t.getAttribute("data-api-url"),r=t.getAttribute("data-api-token"),o=t.getAttribute("data-language"),s=t.getAttribute("data-currency"),c=t.getAttribute("data-domain");vastServiceOrderWidget({mountTargetSelector:"#order-widget",apiUrl:i,apiToken:r,language:o,currency:s,theme:{mainBackground:"none",buttonBackground:"#EDC431",orderButtonColor:"#EDC431",orderButtonTextColor:"#000000",modalHeaderColor:"#3E1C4E",primaryColor:"#3E1C4E",cardCheckColor:"#EDC431"}}).onInit(function(t,i){e[c]&&(document.getElementsByClassName("vast-service-order-now")[0].classList.add("hide-networks"),t.selectNetwork(e[c]));var r=localStorage.getItem("urlInWidget");r&&(t.setURL(r),localStorage.removeItem("urlInWidget")),Object(n.a)(t),function(e){var t=parseInt(a("network")),i=parseInt(a("type")),n=parseInt(a("service"));i&&(e.selectNetwork(t),setTimeout(function(){e.selectServiceTypes([i]),n&&e.setServiceTypeSettings({serviceTypeId:i,settings:{selectedServiceId:n}})}))}(t)})}}})}}},[[3,0]]]);