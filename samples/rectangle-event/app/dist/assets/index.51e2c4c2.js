const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};u();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let r,c,s;function d(){c=new google.maps.Map(document.getElementById("map"),{center:{lat:44.5452,lng:-78.5389},zoom:9});const o={north:44.599,south:44.49,east:-78.443,west:-78.649};r=new google.maps.Rectangle({bounds:o,editable:!0,draggable:!0}),r.setMap(c),r.addListener("bounds_changed",f),s=new google.maps.InfoWindow}function f(){const o=r.getBounds().getNorthEast(),n=r.getBounds().getSouthWest(),i="<b>Rectangle moved.</b><br>New north-east corner: "+o.lat()+", "+o.lng()+"<br>New south-west corner: "+n.lat()+", "+n.lng();s.setContent(i),s.setPosition(o),s.open(c)}window.initMap=d;
