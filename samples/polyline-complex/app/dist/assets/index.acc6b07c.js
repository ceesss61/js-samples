const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};c();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let l,n;function u(){n=new google.maps.Map(document.getElementById("map"),{zoom:7,center:{lat:41.879,lng:-87.624}}),l=new google.maps.Polyline({strokeColor:"#000000",strokeOpacity:1,strokeWeight:3}),l.setMap(n),n.addListener("click",d)}function d(r){const o=l.getPath();o.push(r.latLng),new google.maps.Marker({position:r.latLng,title:"#"+o.getLength(),map:n})}window.initMap=u;
