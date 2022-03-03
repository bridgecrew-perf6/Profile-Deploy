import React from 'react';
import { GridSegment } from './GridSegment';
import { GridLinks } from './GridLinks';

const CertificateGrid = () => {
	return (
		<div class="ui two column grid">
			{/* going to add name prop for the <h4> tag */}
			<GridSegment
				GridLink={GridLinks.JS_Algorithms_Data_Structures_Cert}
				picLink={''}
			/>
			<GridSegment
				GridLink={GridLinks.Responsive_Web_Design_Cert}
				picLink={''}
			/>
		</div>
	);
};

export default CertificateGrid;
