import React from 'react';

import { Button } from 'seventh-component-library';

// const MyDialog = dialogWithControl(props => {
// 	return (<div>Content</div>);
// }, { buttonValue: "Open Dialog", header: "Custom Dialog Header" });

export default class App extends React.Component {
	render () {
		return (
			<div>
				<h2>Button</h2>
				<Button>Click Me</Button>
				<Button disabled={true}>Can't Click Me</Button>
				<hr />
				<h2>Dialog</h2>
				<p>Not yet...</p>
				<hr />
			</div>
		);
	};
};
