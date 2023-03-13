/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_dds_datasets_polyline]
let map;

// [START maps_dds_datasets_polyline_style_function]
function setStyle(/* FeatureStyleFunctionOptions */ params) {
  return /* FeatureStyleOptions */ {
    strokeColor: "green",
    strokeWeight: 4,
  };
}

// [END maps_dds_datasets_polyline_style_function]
function initMap() {
  const position = new google.maps.LatLng(47.59, -122.31);
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "b98e588c46685dd7",
  });
  // Dataset ID for Seattle Bridges
  const datasetId = "3d0bd5fb-3f42-47fe-b50f-81c0932cd533";
  //@ts-ignore
  const datasetLayer = map.getDatasetFeatureLayer(datasetId);

  datasetLayer.style = setStyle;

  // Create an attribution DIV and add the attribution to the map.
  const attributionDiv = document.createElement("div");
  const attributionControl = createAttribution(map);

  attributionDiv.appendChild(attributionControl);
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(attributionDiv);
}

// Create a custom control to hold attribution text.
function createAttribution(map) {
  const attributionLabel = document.createElement("div");

  // Define CSS styles.
  attributionLabel.style.backgroundColor = "#fff";
  attributionLabel.style.opacity = "0.7";
  attributionLabel.style.fontFamily = "Roboto,Arial,sans-serif";
  attributionLabel.style.fontSize = "10px";
  attributionLabel.style.padding = "2px";
  attributionLabel.style.margin = "2px";
  attributionLabel.textContent = "Data source: Seattle GeoData";
  return attributionLabel;
}

window.initMap = initMap;
// [END maps_dds_datasets_polyline]
