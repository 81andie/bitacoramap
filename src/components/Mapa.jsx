import React from 'react'

import { useEffect } from 'react';
import "ol/ol.css";
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

export const Mapa = () => {

  useEffect(() => {

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],

      view: new View({
        center: [311158.68373997946, 5157606.481663526],
        zoom: 18,
      }),

    });

    map.on('moveend',()=>{
      console.log(map.getView().getCenter());
      console.log(map.getView().getZoom())

    })

    setTimeout(() => {
      map.getView().setCenter([350443.1078544518, 5157661.908982817]);
      map.getView().setZoom(10);



    }, 10000);


    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div id="map" className="map"></div>
}





