import React, { useState } from 'react';
import Dialog from './Dialog';
import Button from './Button';

function withControl(DialogContent, props) {
	return function Container() {
		const [ display, setDisplay ] = useState(false);

		const { buttonValue, ...dialogProps } = props;


		let dialog;
		if (display)
		{
			dialog = (<Dialog onClose={ () => setDisplay(false) } {...dialogProps}><DialogContent /></Dialog>);
		}

		return (
			<div>
				{dialog}
				<Button value="" onClick={ () => setDisplay(!display) }>{buttonValue}</Button>
			</div>
		);
	}
};

export default withControl;
