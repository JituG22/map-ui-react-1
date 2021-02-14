import React, { useEffect,useState } from 'react';
// ------ Ant design ------
import { MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import './map.css';
import FormInput  from './components/form-input/form-input';
// ------ Redux --------
import {useSelector} from "react-redux";
// -- map ----------
import Leaflet from "leaflet";

export default function Map(props){
    
    //-------  Redux state management  -----
    const reduxRegionData = useSelector(state => state.region);
   //-------  map marker -----
    const markerIcon = Leaflet.icon({
        iconUrl:"pinmark.png",
        iconSize: [55, 47],
        iconAnchor: [10, 35],
        popupAnchor: [0, -30],
      });

        return (
            <div className="map-wrp">
                {/* ------ Region input form---- */}
                <FormInput/>
                
                {/* ------ show only if valid data featch  ---- */}
                {   reduxRegionData.message == "Region data requested successful" ? 
                <div> 
                    {/* ------ Map template   ---- */}

                    <MapContainer center={reduxRegionData.data.latlng} zoom={5} scrollWheelZoom={true}>
                     <TileLayer
                            attribution='&copy; 
                            <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={reduxRegionData.data.latlng} icon={markerIcon}>
                            <Popup>  {reduxRegionData.data.name}<br /> <img className="flag-img" src={reduxRegionData.data.flag}/></Popup>
                            </Marker>  
                    </MapContainer>
                </div>
                // ------------ Show message if somthing went wrong ..!
                :reduxRegionData.message
                }
            </div>
           
            
        )
    
}
