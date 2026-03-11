import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function LandMap() {

  const [lands,setLands] = useState([]);

  useEffect(()=>{
    fetchLands();
  },[]);

  const fetchLands = async ()=>{

    const res = await axios.get(
      "http://localhost:5000/api/lands"
    );

    setLands(res.data);

  };

  const mapStyle = {
    width:"100%",
    height:"600px"
  };

  const center = {
    lat:5.6037,
    lng:-0.1870
  };

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return(

    <div>

      <h2>Church Land Map</h2>

      {!apiKey ? (
        <p style={{ color: 'red' }}>
          Google Maps API key missing. Set <code>REACT_APP_GOOGLE_MAPS_API_KEY</code> in
          a <code>.env</code> file and restart the development server.
        </p>
      ) : (
        <LoadScript googleMapsApiKey={apiKey}>

          <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={10}
            center={center}
          >

            {lands.map((land)=>(
              <Marker
                key={land._id}
                position={{
                  lat:land.latitude,
                  lng:land.longitude
                }}
                title={land.churchName}
              />
            ))}

          </GoogleMap>

        </LoadScript>
      )}

    </div>

  );

}

export default LandMap;