const y=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};y();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let o;const s={lat:21.27869,lng:-157.826347},c=[{elementType:"geometry",stylers:[{color:"#efe6be"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#f5f5f5"},{weight:1.5}]},{elementType:"labels.text.stroke",stylers:[{color:"#9e9e9e"},{weight:1.5}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#c44135"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#328829"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#2ca37b"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#e4b083"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#32cbb1"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}];function p(){const r=new google.maps.localContext.LocalContextMapView({element:document.getElementById("map"),placeTypePreferences:[{type:"bakery",weight:1},{type:"park",weight:2},{type:"restaurant",weight:3},{type:"shopping_mall",weight:1},{type:"tourist_attraction",weight:3}],maxPlaceCount:18,directionsOptions:{origin:s}});o=r.map,o.addListener("click",()=>{r.hidePlaceDetailsView()});const l=o.get("styles").concat(c);o.setOptions({center:s,zoom:14,styles:l}),new google.maps.Marker({position:s,map:o,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAdUlEQVR4AWMYOWAU/AfhYWMBCxA3A/FlIN4MxN7I6gjg80DcD8QC+CzIxqIxH6aOSHwfYQmmBZexuQymjgTcj8uCz1gUHybDgvO4LFiMRXE4GRb8x2UBDxCXQ8PxPdSrLNSxAD+g3ALCeNQCKoHhZcHAg1EAAM3cyWj3TGxhAAAAAElFTkSuQmCC",zIndex:30})}window.initMap=p;
