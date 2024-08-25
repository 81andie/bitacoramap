
import React, { useState , useContext} from "react";



const markerContext = React.createContext();
const storeMarkersContext = React.createContext();

export function useMarkerContext (){
    return useContext(markerContext);
}

export function useStoreMarkersContext (){
    return useContext(storeMarkersContext);
}

export function MarkersProvider() {

    const [markers, setMarkers] = useState(null);



    const storeMarker = (coordinate) => {
        setCoordenadas(prevCoordenadas => {
            const nuevoArrayCoord = [...prevCoordenadas, coordinate];
            console.log(nuevoArrayCoord)
            localStorage.setItem("listaMarkers", JSON.stringify(nuevoArrayCoord))
            return nuevoArrayCoord;
        });


    }


    return (

        <markerContext.Provider value={markers}>
            <storeMarkersContext.Provider value={storeMarker}>
                {children}
            </storeMarkersContext.Provider>

        </markerContext.Provider>
    )



}
