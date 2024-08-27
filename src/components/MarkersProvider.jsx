
import React, { useState , useContext, useEffect} from "react";



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
    
let array1=[];
    const storeMarker = (coordinate) => {
        
        /*setMarkers(prevCoordenadas => {
            const nuevoArrayCoord = [...prevCoordenadas, coordinate];
            console.log(nuevoArrayCoord)
            localStorage.setItem("listaMarkers", JSON.stringify(nuevoArrayCoord))
            return nuevoArrayCoord;
        });*/
      
      
 
       setMarkers(...coordinate, markers)
      

        localStorage.setItem("listaMarkers", JSON.stringify(markers))
       
    }


    return (

        <markerContext.Provider value={{markers}}>
            <storeMarkersContext.Provider value={storeMarker}>
                {children}
            </storeMarkersContext.Provider>

        </markerContext.Provider>
    )



}
