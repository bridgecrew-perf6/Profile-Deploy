import React from 'react';
import text from './text';
import '../index.css';

const TxtMap = (props) => {
	var r = text.map((item) => {
		if (item.id === props.id) {
			return (
				<div className="textBlock d-inline-flex border border-2 border-opaque-border rounded m-4">
					{item.text}
				</div>
			);
		}
	});
	return r;
};
export default TxtMap;
