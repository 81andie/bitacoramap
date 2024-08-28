
import React, { useState, useContext, useEffect } from "react";



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

    const storeMarker = (coordinate = null) => {

        /* setMarkers(prevCoordenadas => {
               const nuevoArrayCoord = [...prevCoordenadas, coordinate];
               console.log(nuevoArrayCoord)
               localStorage.setItem("listaMarkers", JSON.stringify(nuevoArrayCoord))
               return nuevoArrayCoord;
           });*/

        let storedMarkers = localStorage.getItem("listaMarkers");
        let updatedMarkers = storedMarkers ? JSON.parse(storedMarkers) : [];

        if (coordinate) {
            updatedMarkers = [...updatedMarkers, coordinate];
            localStorage.setItem("listaMarkers", JSON.stringify(updatedMarkers));
        }

        setMarkers(updatedMarkers);

    }

    useEffect(() => {
        storeMarker();
    }, []);



    return (

        <markerContext.Provider value={{ markers }}>
            <storeMarkersContext.Provider value={storeMarker}>
                {children}
            </storeMarkersContext.Provider>

        </markerContext.Provider>
    )



}
