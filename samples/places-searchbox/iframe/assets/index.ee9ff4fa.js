const c=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};c();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function a(){const n=new google.maps.Map(document.getElementById("map"),{center:{lat:-33.8688,lng:151.2195},zoom:13,mapTypeId:"roadmap"}),r=document.getElementById("pac-input"),i=new google.maps.places.SearchBox(r);n.controls[google.maps.ControlPosition.TOP_LEFT].push(r),n.addListener("bounds_changed",()=>{i.setBounds(n.getBounds())});let s=[];i.addListener("places_changed",()=>{const e=i.getPlaces();if(e.length==0)return;s.forEach(t=>{t.setMap(null)}),s=[];const o=new google.maps.LatLngBounds;e.forEach(t=>{if(!t.geometry||!t.geometry.location){console.log("Returned place contains no geometry");return}const l={url:t.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(25,25)};s.push(new google.maps.Marker({map:n,icon:l,title:t.name,position:t.geometry.location})),t.geometry.viewport?o.union(t.geometry.viewport):o.extend(t.geometry.location)}),n.fitBounds(o)})}window.initAutocomplete=a;
