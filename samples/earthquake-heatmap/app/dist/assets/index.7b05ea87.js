const l=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};l();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let s;function c(){s=new google.maps.Map(document.getElementById("map"),{zoom:2,center:{lat:-33.865427,lng:151.196123},mapTypeId:"terrain"});const o=document.createElement("script");o.src="https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js",document.getElementsByTagName("head")[0].appendChild(o)}function d(o){const n=[];for(let r=0;r<o.features.length;r++){const a=o.features[r].geometry.coordinates,e=new google.maps.LatLng(a[1],a[0]);n.push(e)}new google.maps.visualization.HeatmapLayer({data:n,dissipating:!1,map:s})}window.initMap=c;window.eqfeed_callback=d;
