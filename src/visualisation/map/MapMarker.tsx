import { Typography } from '@mui/material'
import { InfoWindow, MarkerF } from '@react-google-maps/api'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type MapMarkerProps = {
    position: {
        lat: number,
        lng: number
      },
    address: string
}

const onLoad = (marker: any) => {
    console.log('marker: ', marker)
}

export default function MapMarker(props: MapMarkerProps) {
    let navigate = useNavigate()
    const [showInfo, setShowInfo] = useState(false);
  
    const onHoverOpen = () => {
        setShowInfo(true)
    }
          
    const onHoverClose = () => {
        setShowInfo(false)
    }

    const handleMarkerOnClick = (e: google.maps.MapMouseEvent) => {
        navigate("/xtech/calculations")
    }

    return (
        <MarkerF
            onLoad={onLoad}
            position={props.position}
            onMouseOver={onHoverOpen}
            onMouseOut={onHoverClose}
            onClick={handleMarkerOnClick}
        >
            {showInfo && 
                <InfoWindow>
                  <div style={{ backgroundColor: `#ffff`, opacity: 1, padding: `12px` }}>
                    <Typography sx={{ color: "#0D0D0D", fontFamily: "Inter", fontSize: "16px" }} >{props.address}</Typography>
                  </div>
                </InfoWindow>}
        </MarkerF>
    )
}