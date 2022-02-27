import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

class BikeTripMaps extends React.Component {
	render() {
		return (
			<div>
				<GoogleMap
					defaultZoom={5}
					defaultCenter={{ lat: 43.09513782605348, lng: -79.08152017339032 }}
				/>
			</div>
		);
	}
}

export default BikeTripMaps;
