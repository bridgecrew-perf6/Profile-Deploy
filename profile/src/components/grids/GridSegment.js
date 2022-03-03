import React from 'react';

export const GridSegment = ({ name, GridLink, picLink, description }) => {
	return (
		<div class="column">
			<div class="ui segment">
				<h4>{name}</h4>
				<a href={GridLink}>
					<img className="projectIMG" src={picLink} />
				</a>
			</div>
		</div>
	);
};
