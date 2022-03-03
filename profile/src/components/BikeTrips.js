import React from 'react';
import TxtMap from './text/TxtMap';

//attempting make reusable code.
const BikeTrips = ({ image, text }) => {
	return (
		<div>
			<div className="trips d-flex flex-row align-items-center m-4 border border-2 border-opaque-border rounded ">
				<article>
					<TxtMap id={text} />
				</article>
				<img
					width="400"
					height="400"
					className="TripPic m-4 "
					src={image}
					alt={`${text} the image:${image}trip`}
				/>
			</div>
		</div>
	);
};

export default BikeTrips;
