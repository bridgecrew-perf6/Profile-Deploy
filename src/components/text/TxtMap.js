import React from 'react';
import Text from './Text';
import '../../index.css';

const TxtMap = (props) => {
	var r = Text.map((item) => {
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
