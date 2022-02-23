import React from 'react';
import text from './text';

const TxtMap = (props) => {
	var r = text.map((item) => {
		if (item.id === props.id) {
			return (
				<div className="d-inline-flex border border-2 border-success rounded w-50">
					{item.text}
				</div>
			);
		}
	});
	return r;
};
export default TxtMap;
