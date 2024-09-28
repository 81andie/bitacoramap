
import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


const markerContext = React.createContext();
const storeMarkersContext = React.createContext();

export function useMarkerContext() {
    return useContext(markerContext);
}

export function useStoreMarkersContext() {
    return useContext(storeMarkersContext);
}

export function MarkersProvider({ children }) {

    const [markers, setMarkers] = useState([]);
    //coordinate= null 


    const storeMarker = (coordinate = null) => {

      

        /* 1a opcion

        setMarkers(prevCoordenadas => {
               const nuevoArrayCoord = [...prevCoordenadas, coordinate];
               console.log(nuevoArrayCoord)
               localStorage.setItem("listaMarkers", JSON.stringify(nuevoArrayCoord))
               return nuevoArrayCoord;
           });*/


       
        
         let storedMarkers = localStorage.getItem("listaMarkers");
         let updatedMarkers = storedMarkers ? JSON.parse(storedMarkers): [];
        
          if (coordinate.length > 0) {
         // updatedMarkers = [...updatedMarkers, coordinate];
          updatedMarkers.push(coordinate);
          localStorage.setItem("listaMarkers", JSON.stringify(updatedMarkers));


    
          }
       
      

        

    

    }


   



   
  










    return (

        <markerContext.Provider value={{ markers }}>
            <storeMarkersContext.Provider value={storeMarker}>
                {children}
            </storeMarkersContext.Provider>

        </markerContext.Provider>
    )



}
