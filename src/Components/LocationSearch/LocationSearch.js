import React from 'react';
import { Input } from 'react-rainbow-components';
import './LocationSearch.css';

const containerStyles = {
    width: 700,
    maxWidth: 700,
};

export const LocationSearch = () => {
    return (
        <div className="center">
            <Input 
                id="input-component-1"
                label="Location"
                placeholder="Search Location"
                style={containerStyles}
                className="rainbow-m-verticle_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
        </div>
    );
}

export default LocationSearch;