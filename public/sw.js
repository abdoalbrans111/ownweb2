if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1536-5d8ae7d526b222d3.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/3045-eef5b8387644cf0a.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/3741-6e9b5c59ce8fba41.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/3751-1d16b7c09e20bd7e.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/3782-dce846592a1e3a38.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/3783-857607dc13dbe56c.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/5250-163a326c7f0ab00a.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/5468-35120ffc105eec7d.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/5753.0aae2def8deec119.js",revision:"0aae2def8deec119"},{url:"/_next/static/chunks/6683-a0660c3b6953b60b.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/828-94661dae6d93fcc1.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/8356-204e1e55ed126071.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/8426-dc4062b05cc74368.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/8729-9f782e5f482f2331.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/8747-8d521de3c6eb1f80.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/9102-47d7aee840f6d42f.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/9665-f373b195770a5843.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/9747-0631613ab20cf7be.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/9925-5cf1a02f9de64a0a.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/about/page-1b00fa6d183dc48b.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/become-seller/page-3794e11ac105dba5.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/forget-password/%5Bverify%5D/page-9348d3a4d8aba950.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/forget-password/page-a92ad3edde088550.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/new-password/%5Bemail%5D/page-d478f0f10c86afb1.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/profile/favorites/page-6ded773b2a9fe859.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/profile/layout-3c53594a9ea52ab6.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/profile/order/page-1aa4456750079fcb.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/profile/page-7123127e90477fc8.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/profile/security/page-4509a15819552f19.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/profile/tickets/%5Bticket%5D/page-ed57bbb9e01f6041.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/profile/tickets/page-85e232cd6bed1ca9.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/signin/page-40347c2cc486259f.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/signup/%5Bverify%5D/page-a2790633fea1a2f2.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/auth/signup/page-d0b7e00a16c0f807.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/blogs/%5Bblog%5D/page-f642e4047f1c6ddf.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/blogs/page-184e29b9fab56c3b.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/cart/page-a5db49c9dd8ffa87.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/checkout/page-4a4f47e35a9f0af5.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/contact/page-68f92c8211cd38e1.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/faq/page-ea3c78960a5eaac3.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/layout-3b220d3428967db2.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/not-found-f6ccec4792256bea.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/page-dd0ed2a229ad9600.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/payment/failed/page-1575170eceb5c8db.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/payment/success/page-595886da89060b27.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/privacy-policy/page-9dc2db866541ec83.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/products/%5Bproduct%5D/page-8c3b1a72a348726b.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/products/page-fe6bbcbe6394c58b.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/sellers/%5Bseller%5D/page-671098765ec82773.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/app/terms-conditions/page-dc0e4af92e029fe8.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/fd9d1056-a67a690b9d1a7576.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/main-9044a9ea044e9025.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/main-app-b0b22052edaf482a.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1fcee682599d0b30.js",revision:"si13RFU9iRbKaWgJIXEeJ"},{url:"/_next/static/css/5bffc15373a934ca.css",revision:"5bffc15373a934ca"},{url:"/_next/static/css/6688ab2e0d634499.css",revision:"6688ab2e0d634499"},{url:"/_next/static/css/e493e3cd1ee7b397.css",revision:"e493e3cd1ee7b397"},{url:"/_next/static/css/f1d3edb5f9100bbf.css",revision:"f1d3edb5f9100bbf"},{url:"/_next/static/media/profile-img.dcc96d93.png",revision:"2e3a3ddd71e6088a37552fd257236ae2"},{url:"/_next/static/si13RFU9iRbKaWgJIXEeJ/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/si13RFU9iRbKaWgJIXEeJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/img/Group 1000006347.png",revision:"720a2594ed521880b76a6c42a61dce3f"},{url:"/assets/img/User.png",revision:"0888022c193bc45b1270ca02ab5230a6"},{url:"/assets/img/about-become-thumb.jpeg",revision:"f559294afc05f94db04f567150c2aa80"},{url:"/assets/img/about-become-thumb.webp",revision:"d194915c4de1d679f2b219224dc3e1ef"},{url:"/assets/img/about-count-4.png",revision:"c9b992ded067b17e23736a60962550fa"},{url:"/assets/img/best-selling-product-shape.png",revision:"8d0916cdd1d6137e2df8d1ae40833fbe"},{url:"/assets/img/blog-owner.png",revision:"04bc4d107fd0958a822626feb92b2660"},{url:"/assets/img/cardiogram 2.png",revision:"fff1782d0f0b2a686c2cc67fed888c5a"},{url:"/assets/img/cash-on-delivery.png",revision:"43d3030f285122ed40bf85dfa334ec6a"},{url:"/assets/img/comment-1.jpeg",revision:"fd97b1aaca8ee473c0fd3d6e307c92dd"},{url:"/assets/img/contact-headphone.png",revision:"f0545a65dc7f566f4235ed65af1fac2d"},{url:"/assets/img/e-wallet 2.png",revision:"cebcf5a9cdc06a6baee89d96f896eb97"},{url:"/assets/img/gift-card 1.png",revision:"095a40176c852bd5402693244eb4c653"},{url:"/assets/img/hour-24.png",revision:"7202d8db5da663701e8607c3b4450b48"},{url:"/assets/img/invoice 2.png",revision:"14e7e7751c9e5c61deaf2cde889e39e3"},{url:"/assets/img/menu 2.png",revision:"2a4a46f0d276c4304ad93d3108dd8ec8"},{url:"/assets/img/page-title-bg.png",revision:"2a7d6210919522aab338f92829bbf5da"},{url:"/assets/img/payment-1.png",revision:"17165d71f7dd5f990561a24f8720c220"},{url:"/assets/img/payment-10.png",revision:"03cd4033fe08b21b3bf798b2dcee2751"},{url:"/assets/img/payment-2.png",revision:"2b1006861484eb782b27d3e172e86d77"},{url:"/assets/img/payment-3.png",revision:"fddcf145abec62381cb7db1af4d6cbbb"},{url:"/assets/img/payment-4.png",revision:"9f158661c5606f4e8f6198d6fd95aa4a"},{url:"/assets/img/payment-5.png",revision:"0904bc2d2623ae8fdd85a89091b6b0a8"},{url:"/assets/img/payment-6.png",revision:"8985499dbfb11cdf258efd5ef7399817"},{url:"/assets/img/payment-7.png",revision:"32d67121cd0c84fc49e4e2400ba20917"},{url:"/assets/img/payment-8.png",revision:"04825d761b665c144add5114df753d0a"},{url:"/assets/img/payment-9.png",revision:"6eecbbd8cdff796cac5807477cfc4a6c"},{url:"/assets/img/payment-success.png",revision:"7cddfb4103963187f816d2aeebbf9a9d"},{url:"/assets/img/product-details-reveiw-user.jpeg",revision:"3ace12e9bbda337f8260a3eb70873d9d"},{url:"/assets/img/product-details.png",revision:"e9d7799c29024a61a938163b33902a97"},{url:"/assets/img/profile-img.png",revision:"2e3a3ddd71e6088a37552fd257236ae2"},{url:"/assets/img/seller-dash-icon-1.png",revision:"b5cb863b048c73ec2d224fa30c95427d"},{url:"/assets/img/seller-dash-icon-2.png",revision:"cf009249cc0c77271fb967574ea9f92c"},{url:"/assets/img/seller-dash-icon.png",revision:"993d928c12be23c95b760702e4124f78"},{url:"/assets_pwa/icons/icon-128x128.png",revision:"a13c0010534b5d13911596b84d73035d"},{url:"/assets_pwa/icons/icon-144x144.png",revision:"fec26bd26601f4309a50740d2aacdc4b"},{url:"/assets_pwa/icons/icon-152x152.png",revision:"fec26bd26601f4309a50740d2aacdc4b"},{url:"/assets_pwa/icons/icon-192x192.png",revision:"026b5dac7e5039b25dd596dad9c6fdaf"},{url:"/assets_pwa/icons/icon-384x384.png",revision:"71c4cbabd231d32d93c32d0b6524da63"},{url:"/assets_pwa/icons/icon-512x512.png",revision:"ad214df97ccfbbe63f386822d669f4d7"},{url:"/assets_pwa/icons/icon-72x72.png",revision:"d938d5b31b42d59cb6ed72519a29dd5a"},{url:"/assets_pwa/icons/icon-96x96.png",revision:"348df1690236ad31eb3891172e00bd0a"},{url:"/manifest.json",revision:"c31a05e5fde471168197293fcf1a6783"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));