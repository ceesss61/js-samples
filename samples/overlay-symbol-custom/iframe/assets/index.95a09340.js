const s=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};s();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function c(){const l=new google.maps.Map(document.getElementById("map"),{zoom:6,center:{lat:20.291,lng:153.027},mapTypeId:"terrain"}),t={path:"M -2,0 0,-2 2,0 0,2 z",strokeColor:"#F00",fillColor:"#F00",fillOpacity:1},n={path:"M -1,0 A 1,1 0 0 0 -3,0 1,1 0 0 0 -1,0M 1,0 A 1,1 0 0 0 3,0 1,1 0 0 0 1,0M -3,3 Q 0,5 3,3",strokeColor:"#00F",rotation:45},r={path:"M -2,-2 2,2 M 2,-2 -2,2",strokeColor:"#292",strokeWeight:4};new google.maps.Polyline({path:[{lat:22.291,lng:153.027},{lat:18.291,lng:153.027}],icons:[{icon:t,offset:"0%"},{icon:n,offset:"50%"},{icon:r,offset:"100%"}],map:l})}window.initMap=c;
