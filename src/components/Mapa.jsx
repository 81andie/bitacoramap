import React from 'react'
import { useEffect } from 'react';
import "ol/ol.css";
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

export const Mapa = () => {


  let map;


  const zoomOut = () => {
    
    if (map) {
      const view = map.getView();
      const zoom = view.getZoom();
      view.setZoom(zoom - 1);

      console.log("zoom out");


    }

  }

  const zoomIn = () => {
   
    if (map) {
      const view = map.getView();
      const zoom = view.getZoom();
      view.setZoom(zoom + 1);

      
    }

  };

  useEffect(() => {

    map = new Map(
      {
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

   

    map.on('moveend', () => {
      console.log(map.getView().getCenter());
      console.log(map.getView().getZoom())

    })
    /*
        mapa -> vista -> zoom / centro
        mapa.getView -> recuperas la vista
        view.getZoom -> recuperas el zoom
    
        el zoom esta dentro de la vista. la vista esta dentro del mapa.
    */
    setTimeout(() => {
      map.getView().setCenter([350443.1078544518, 5157661.908982817]);
      map.getView().setZoom(10);

    }, 10000);



    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <>
      <div id="map" className="map"></div>
      <button type="button" id="zoom-out" onClick={zoomOut}>Zoom out</button>
      <button type="button" id="zoom-in" onClick={zoomIn}>Zoom in</button>
    </>
  )
}





