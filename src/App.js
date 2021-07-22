import React, { Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import './App.css';

class App extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render(){
		return (
			<div>
				<Header />
				<LocationSearch />
			</div>
		);
	}
}

export default App;
