import React from 'react';

export const GridSegment = ({ name, link, pic, description }) => {
	return (
		<div class="column">
			<div class="ui segment">
				<h4>{name}</h4>
				<a href={link}>
					<img className="projectIMG" src={pic} />
				</a>
				<p>{description}</p>
			</div>
		</div>
	);
};
