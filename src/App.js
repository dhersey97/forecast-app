import React, { Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import DayList from './Components/DayList/DayList';
import './App.css';

const city = "boston";
const lat = "42.3";
const lon = "-71";

class App extends Component{
	
	constructor() {
		super();
		this.state = {
			forecast: {},
			searchfield: ''
		}
	}

	//https://api.openweathermap.org/data/2.5/onecall?lat=42.3&lon=-71&appid=042dddf3fcb6c45c88287e33ed68f139
	componentDidMount(){
		fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
			.then(response => response.json())
			.then(data => this.setState({ forecast: data }));
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
				<DayList forecast = {this.forecast}/>
			</div>
		);
	}
}

export default App;
