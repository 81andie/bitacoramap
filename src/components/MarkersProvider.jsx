
import React, { useState , useContext} from "react";



const markerContext = React.createContext();
const storeMarkersContext = React.createContext();

export function useMarkerContext (){
    return useContext(markerContext);
}

export function useStoreMarkersContext (){
    return useContext(storeMarkersContext);
}

export function MarkersProvider({children}) {

    const [markers, setMarkers] = useState([]);
    


    const storeMarker = (coordinate) => {
        
        /*setMarkers(prevCoordenadas => {
            const nuevoArrayCoord = [...prevCoordenadas, coordinate];
            console.log(nuevoArrayCoord)
            localStorage.setItem("listaMarkers", JSON.stringify(nuevoArrayCoord))
            return nuevoArrayCoord;
        });*/

        
        console.log("markers:")
        console.log(markers)


        setMarkers([...markers, coordinate]);
        localStorage.setItem("listaMarkers", JSON.stringify(markers))

        console.log("markers2:")
        console.log(markers)
    }


    return (

        <markerContext.Provider value={markers}>
            <storeMarkersContext.Provider value={storeMarker}>
                {children}
            </storeMarkersContext.Provider>

        </markerContext.Provider>
    )



}
