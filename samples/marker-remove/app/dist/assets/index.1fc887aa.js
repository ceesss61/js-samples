const f=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}};f();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let o,i=[];function m(){const n={lat:37.769,lng:-122.446};o=new google.maps.Map(document.getElementById("map"),{zoom:12,center:n,mapTypeId:"terrain"}),o.addListener("click",t=>{c(t.latLng)}),document.getElementById("show-markers").addEventListener("click",p),document.getElementById("hide-markers").addEventListener("click",d),document.getElementById("delete-markers").addEventListener("click",g),c(n)}function c(n){const t=new google.maps.Marker({position:n,map:o});i.push(t)}function a(n){for(let t=0;t<i.length;t++)i[t].setMap(n)}function d(){a(null)}function p(){a(o)}function g(){d(),i=[]}window.initMap=m;
