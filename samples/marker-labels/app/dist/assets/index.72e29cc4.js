const a=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};a();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */const s="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let d=0;function u(){const n={lat:12.97,lng:77.59},o=new google.maps.Map(document.getElementById("map"),{zoom:12,center:n});google.maps.event.addListener(o,"click",r=>{c(r.latLng,o)}),c(n,o)}function c(n,o){new google.maps.Marker({position:n,label:s[d++%s.length],map:o})}window.initMap=u;
