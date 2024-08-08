import React from 'react'
import { useEffect, useState } from 'react';
import "ol/ol.css";
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point.js';
import { Vector as VectorLayer } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style.js';

export const Mapa = () => {

  const [coordenadas, setCoordenadas]= useState([]); 


  let map;

  const vectorSource = new VectorSource({
    features: []
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource
  });


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


    map.on('click', function (evt) {
     storeMarker(evt.coordinate);
     addMarker(evt.coordinate);
      
    });


  
    /*
    
        const vectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [],
          })
        });
        
        */

    map.addLayer(vectorLayer);

    /*
        mapa -> vista -> zoom / centro
        mapa.getView -> recuperas la vista
        view.getZoom -> recuperas el zoom
    
        el zoom esta dentro de la vista. la vista esta dentro del mapa.
    */


    return () => {
      map.setTarget(null);
    };
  }, []);


  const addMarker = (coordinate) =>{
 

    const startMarker = new Feature({
      type: 'point',
      geometry: new Point(coordinate)
    });
    
    startMarker.setStyle(new Style({
      image: new Icon({
        anchor: [0.6, 0.5],
        src: 'marker.png',
        scale: 0.3
      })
    }))

    vectorSource.addFeature(startMarker);

  }

  let arrayCoordenadas = [];
  let arrayCoordenadas1;

  const storeMarker = (coordinate) => {  
 
 {/* //array de las coordenadas
  // guardar en Storage
  arrayCoordenadas.push(coordinate);

  localStorage.setItem("listaMarkers",JSON.stringify(
    arrayCoordenadas
  )) */}

 
  setCoordenadas(prevCoordenadas=>{
    const nuevoArrayCoord =[...prevCoordenadas, coordinate];
    console.log(nuevoArrayCoord)
    localStorage.setItem("listaMarkers",JSON.stringify( nuevoArrayCoord))
    return nuevoArrayCoord;
  });
  

  }









  return (
    <>
      <div id="map" className="map"></div>
      <button type="button" id="zoom-out" onClick={zoomOut}>Zoom out</button>
      <button type="button" id="zoom-in" onClick={zoomIn}>Zoom in</button>
    </>
  )
}





