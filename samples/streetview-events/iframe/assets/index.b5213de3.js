const d=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}};d();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function s(){const o=new google.maps.StreetViewPanorama(document.getElementById("pano"),{position:{lat:37.869,lng:-122.255},pov:{heading:270,pitch:0},visible:!0});o.addListener("pano_changed",()=>{const t=document.getElementById("pano-cell");t.innerHTML=o.getPano()}),o.addListener("links_changed",()=>{const t=document.getElementById("links_table");for(;t.hasChildNodes();)t.removeChild(t.lastChild);const i=o.getLinks();for(const r in i){const e=document.createElement("tr");t.appendChild(e);const n=document.createElement("td");n.innerHTML="<b>Link: "+r+"</b>";const l=document.createElement("td");l.innerHTML=i[r].description,t.appendChild(n),t.appendChild(l)}}),o.addListener("position_changed",()=>{const t=document.getElementById("position-cell");t.firstChild.nodeValue=o.getPosition()+""}),o.addListener("pov_changed",()=>{const t=document.getElementById("heading-cell"),i=document.getElementById("pitch-cell");t.firstChild.nodeValue=o.getPov().heading+"",i.firstChild.nodeValue=o.getPov().pitch+""})}window.initPano=s;