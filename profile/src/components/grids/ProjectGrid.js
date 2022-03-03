import React from 'react';
import { GridSegment } from './GridSegment';

const ProjectGrid = ({ link, description }) => {
	return (
		<div class="ui three column grid">
			{/* going to add name prop for the <h4> tag */}
			<GridSegment picLink={link} />
			<GridSegment picLink={link} />
			<GridSegment picLink={link} />
			<GridSegment picLink={link} />
			<GridSegment picLink={link} />
			<GridSegment picLink={link} />
		</div>
	);
};

export default ProjectGrid;
