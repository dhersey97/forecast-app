import React, { Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import DayList from './Components/DayList/DayList';
import Forecast from './Components/Forecast/Forecast';
import './App.css';

const city = "boston";
const lat = "42.3";
const lon = "-71";

class App extends Component{
	
	constructor() {
		super();
		this.state = {
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render(){
		const { forecast, searchfield } = this.state;
		const locationName = searchfield.toLowerCase();
		return (
			<div>
				<Header />
				<LocationSearch searchChange = {this.onSearchChange}/>
				<div>
					<Forecast lat={lat} lon={lon}/>
				</div>
			</div>
		);
	}
}

export default App;
