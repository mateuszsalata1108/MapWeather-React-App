import React, { useEffect, useState } from 'react'
import ReactMapGL from "react-map-gl"
import { Header } from 'semantic-ui-react'


const Map=(props) => {
        return(
            <div className='ui segment padded inverted black'>
                    <div className='ui form'>
                        <div>
                            <Header as='h3' inverted color="white">Mapa twojego miasta:</Header>
                            <ReactMapGL
                            mapStyle={"mapbox://styles/mapbox/streets-v11"}
                             mapboxApiAccessToken='pk.eyJ1IjoianVzdGZvcjF0aGluZyIsImEiOiJja3lvdWdwaG0wM3M2Mm9vMW02NGcwbzltIn0.mlbLaxnWwrURfC_BCCyPlQ'
                             zoom={12} 
                             width={650}
                             height={500} 
                             latitude={props.latitude} 
                             longitude= {props.longitude}
                             >

                            </ReactMapGL>
                        </div>
                    </div>
            </div>
        )
    }

Map.defaultProps = {
    latitude : 54.44515223835213, 
    longitude : 18.55414874545668
}
export default Map