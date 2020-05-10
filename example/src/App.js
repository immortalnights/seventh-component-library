import React, { useState } from 'react';

import { Button, Dialog } from 'seventh-component-library';

function DialogContainer() {
	const [ display, setDisplay ] = useState(false);

	let dialog;
	if (display)
	{
		dialog = (
			<Dialog onClose={ () => setDisplay(false) }>
				<div>Content</div>
			</Dialog>
		);
	}

	return (
		<div>
			{dialog}
			<Button value="" onClick={ () => setDisplay(!display) }>Click Me</Button>
		</div>
	);
};

export default class App extends React.Component {
	render () {
		return (
			<div>
				<h2>Button</h2>
				<Button>Click Me</Button>
				<Button disabled={true}>Can't Click Me</Button>
				<hr />
				<h2>Dialog</h2>
				<DialogContainer />
				<hr />
			</div>
		);
	};
};
