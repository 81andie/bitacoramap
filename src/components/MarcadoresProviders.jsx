import React from 'react'
import { useContext, useState } from "react";

const markerContext = React.createContext();
const storeMarkersContext = React.createContext();


export function useMarkerContext() {
    return useContext(markerContext);
}

export function useStoreMarkersContext() {
    return useContext(storeMarkersContext);
}

export const MarcadoresProviders = ({ children }) => {

    const [markers, setMarkers] = useState([]);
    const [panelIsOpen, setPanelIsOpen]= useState(false);

    const storeMarker = (coordinate = null) => {
        let storedMarkers = localStorage.getItem("listaMarkers");
        let updatedMarkers = storedMarkers ? JSON.parse(storedMarkers) : [];
        if (coordinate.length > 0) {
            updatedMarkers.push(coordinate);
            setMarkers(updatedMarkers);
            localStorage.setItem("listaMarkers", JSON.stringify(updatedMarkers));
        }
    }


    const togglePanel =()=>{
        console.log("togglePanel")
        setPanelIsOpen(!panelIsOpen)
    }


    return (
        <markerContext.Provider value={{ markers, panelIsOpen }}>
            <storeMarkersContext.Provider value={{storeMarker,togglePanel}}>
                {children}
            </storeMarkersContext.Provider>

        </markerContext.Provider>
    )
}
