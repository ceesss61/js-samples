const s=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};s();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function a(){const l=new google.maps.Map(document.getElementById("map"),{center:{lat:24.886,lng:-70.269},zoom:5}),n=[{lat:25.774,lng:-80.19},{lat:18.466,lng:-66.118},{lat:32.321,lng:-64.757}],r=new google.maps.Polygon({paths:n});google.maps.event.addListener(l,"click",t=>{const e=google.maps.geometry.poly.containsLocation(t.latLng,r)?"blue":"red",o=google.maps.geometry.poly.containsLocation(t.latLng,r)?"m 0 -1 l 1 2 -2 0 z":google.maps.SymbolPath.CIRCLE;new google.maps.Marker({position:t.latLng,map:l,icon:{path:o,fillColor:e,fillOpacity:.2,strokeColor:"white",strokeWeight:.5,scale:10}})})}window.initMap=a;
