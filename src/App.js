import React, { useState } from 'react';
import Button from './Button';
import Dialog from './Dialog';
import './App.css';

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

function App() {
	return (
		<>
			<h2>Button</h2>
			<Button>Click Me</Button>
			<Button disabled={true}>Can't Click Me</Button>
			<hr />
			<h2>Dialog</h2>
			<DialogContainer />
			<hr />
		</>
	);
}

export default App;
