import React from 'react';
import axios from"axios";

import SearchBar from './SearchBar';
import Map from "./Map";
import Weather from "./Weather";
import MainHeader from './Header';
import "../App.css";

export default class App extends React.Component {
   state ={info: null};

   onSearchSubmit =term =>{
       axios.get("https://api.openweathermap.org/data/2.5/weather?",{
       params:{
           q: term,
           appid: "ad211c70bcf9a4967de02d06d82e338c",
           units: "metric"
       }
    }).then(result=>{
           this.setState({info: result.data})
       })
   }

    render(){
        return(
            <div className='ui segment padded inverted black'>
                <MainHeader/>
                <div className="ui container">
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                    <div className="ui grid">
                        <div className="row">
                            <div className="ten wide column">
                                <Map  longitude={this.state.info?.coord?.lon} latitude={this.state.info?.coord?.lat}/>
                            </div>
                            <div className="six wide column">
                                <Weather info ={this.state.info}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}