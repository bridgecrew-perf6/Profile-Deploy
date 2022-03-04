import React from 'react';
import { GridSegment } from './GridSegment';

//Generate the grids
const GenerateGrid = ({ column, Data }) => {
	return (
		<div class={`ui ${column} column grid`}>
			{Data.map(({ id, pic, link, description }) => (
				<GridSegment id={id} pic={pic} link={link} description={description} />
			))}
		</div>
	);
};

export default GenerateGrid;
