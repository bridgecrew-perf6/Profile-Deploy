import React from 'react';
import '../../index.css';

export const GridSegment = ({ name, link, pic, description }) => {
	return (
		<div className="gridSegment column d-inline-flex justify-content-center">
			<div className="ui segment">
				<h4>{name}</h4>
				<div>
					<a href={link}>
						<img className="projectIMG" src={pic} alt="something" />
					</a>
				</div>
				<p className="paragraphHeight">{description}</p>
			</div>
		</div>
	);
};
