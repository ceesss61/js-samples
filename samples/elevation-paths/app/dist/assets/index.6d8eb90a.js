const r=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};r();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */google.load("visualization","1",{packages:["columnchart"]});function c(){const o=[{lat:36.579,lng:-118.292},{lat:36.606,lng:-118.0638},{lat:36.433,lng:-117.951},{lat:36.588,lng:-116.943},{lat:36.34,lng:-117.468},{lat:36.24,lng:-116.832}],n=new google.maps.Map(document.getElementById("map"),{zoom:8,center:o[1],mapTypeId:"terrain"}),a=new google.maps.ElevationService;s(o,a,n)}function s(o,n,a){new google.maps.Polyline({path:o,strokeColor:"#0000CC",strokeOpacity:.4,map:a}),n.getElevationAlongPath({path:o,samples:256}).then(d).catch(l=>{const e=document.getElementById("elevation_chart");e.innerHTML="Cannot show elevation: request failed because "+l})}function d({results:o}){const n=document.getElementById("elevation_chart"),a=new google.visualization.ColumnChart(n),l=new google.visualization.DataTable;l.addColumn("string","Sample"),l.addColumn("number","Elevation");for(let e=0;e<o.length;e++)l.addRow(["",o[e].elevation]);a.draw(l,{height:150,legend:"none",titleY:"Elevation (m)"})}window.initMap=c;
