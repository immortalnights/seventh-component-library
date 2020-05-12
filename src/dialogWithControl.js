import React, { useState } from 'react';
import Dialog from './Dialog';
import Button from './Button';

function withControl(DialogContent, props) {
	// console.debug("withControl", props);
	return function Container(containerProps) {
		// console.debug("Container", containerProps);

		const [ display, setDisplay ] = useState(false);

		const { buttonValue, ...dialogProps } = props;

		let dialog;
		if (display)
		{
			dialog = (<Dialog onClose={ () => setDisplay(false) } {...dialogProps} {...containerProps}>{contentProps => (<DialogContent {...contentProps} />)}</Dialog>);
		}

		return (
			<div>
				{dialog}
				<Button type="submit" onClick={ () => setDisplay(!display) }>{buttonValue}</Button>
			</div>
		);
	}
};

export default withControl;
