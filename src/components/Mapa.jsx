import React from 'react'
import { useEffect} from 'react';
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
import { useMarkerContext, useStoreMarkersContext } from './MarcadoresProviders';


export const Mapa = () => {

  const {markers, panelIsOpen} = useMarkerContext();
  const {storeMarker, togglePanel} = useStoreMarkersContext();




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

      }
      
      ,[]);

   

    map.on('moveend', () => {
      console.log(map.getView().getCenter());
      console.log(map.getView().getZoom())

    })


    map.on('click', function (evt) {

      storeMarker(evt.coordinate);
      addMarker(evt.coordinate);
      
      togglePanel();
      console.log(panelIsOpen);
      console.log("estos son los marcadores")
      console.log( markers);

    });


    /*
    
        const vectorLayer = new VectorLayer({
          source: new VectorSource({
            features: [],
          })
        });
        
        */

        obtenerMarkers()

    map.addLayer(vectorLayer);

    /*
        mapa -> vista -> zoom / centro
        mapa.getView -> recuperas la vista
        view.getZoom -> recuperas el zoom
    
        el zoom esta dentro de la vista. la vista esta dentro del mapa.


    */

    //obtenerMarkers();


    return () => {
      map.setTarget(null);
    };
  }, []);


  const addMarker = (coordinate) => {



    const startMarker = new Feature({
      type: 'point',
      geometry: new Point(coordinate),


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





  const obtenerMarkers = () => {

    const markersRecuperados = JSON.parse(localStorage.getItem('listaMarkers') || "[]");
    storeMarker(markers)
   
    markersRecuperados.forEach(coord => addMarker(coord));
    console.log(markersRecuperados);

  }



  





  return (
    <>
      <div id="map" className="map"></div>
      <button type="button" id="zoom-out" onClick={zoomOut}>Zoom out</button>
      <button type="button" id="zoom-in" onClick={zoomIn}>Zoom in</button>
    </>
  )
}





