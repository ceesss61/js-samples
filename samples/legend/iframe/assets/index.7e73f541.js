const l=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(o){if(o.ep)return;o.ep=!0;const e=a(o);fetch(o.href,e)}};l();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let s;function m(){s=new google.maps.Map(document.getElementById("map"),{zoom:16,center:new google.maps.LatLng(-33.91722,151.23064),mapTypeId:"roadmap"});const p="https://maps.google.com/mapfiles/kml/shapes/",n={parking:{name:"Parking",icon:p+"parking_lot_maps.png"},library:{name:"Library",icon:p+"library_maps.png"},info:{name:"Info",icon:p+"info-i_maps.png"}};[{position:new google.maps.LatLng(-33.91721,151.2263),type:"info"},{position:new google.maps.LatLng(-33.91539,151.2282),type:"info"},{position:new google.maps.LatLng(-33.91747,151.22912),type:"info"},{position:new google.maps.LatLng(-33.9191,151.22907),type:"info"},{position:new google.maps.LatLng(-33.91725,151.23011),type:"info"},{position:new google.maps.LatLng(-33.91872,151.23089),type:"info"},{position:new google.maps.LatLng(-33.91784,151.23094),type:"info"},{position:new google.maps.LatLng(-33.91682,151.23149),type:"info"},{position:new google.maps.LatLng(-33.9179,151.23463),type:"info"},{position:new google.maps.LatLng(-33.91666,151.23468),type:"info"},{position:new google.maps.LatLng(-33.916988,151.23364),type:"info"},{position:new google.maps.LatLng(-33.91662347903106,151.22879464019775),type:"parking"},{position:new google.maps.LatLng(-33.916365282092855,151.22937399734496),type:"parking"},{position:new google.maps.LatLng(-33.91665018901448,151.2282474695587),type:"parking"},{position:new google.maps.LatLng(-33.919543720969806,151.23112279762267),type:"parking"},{position:new google.maps.LatLng(-33.91608037421864,151.23288232673644),type:"parking"},{position:new google.maps.LatLng(-33.91851096391805,151.2344058214569),type:"parking"},{position:new google.maps.LatLng(-33.91818154739766,151.2346203981781),type:"parking"},{position:new google.maps.LatLng(-33.91727341958453,151.23348314155578),type:"library"}].forEach(o=>{new google.maps.Marker({position:o.position,icon:n[o.type].icon,map:s})});const t=document.getElementById("legend");for(const o in n){const e=n[o],i=e.name,r=e.icon,g=document.createElement("div");g.innerHTML='<img src="'+r+'"> '+i,t.appendChild(g)}s.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(t)}window.initMap=m;
