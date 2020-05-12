import React, { useState } from 'react'
import { Button, dialogWithControl } from 'seventh-components-library'
import 'seventh-components-library/dist/index.css'

const ControlledDialog = dialogWithControl(props => {
	// console.debug("ControlledDialog props", props);

	return (
		<div>
			<div className="flex column">
				<label htmlFor="nameinput" className="input-label">Name</label>
				<input id="nameinput" className="input" name="name" value={props.value.name || ""} onChange={props.onInput} />
			</div>
			<div className="column" style={{marginTop: '20px'}}>
				<label htmlFor="numberinput" className="input-label">Favorite Number</label>
				<input id="numberinput" className="input" name="number" value={props.value.number || ""} onChange={props.onInput} />
			</div>
		</div>
	);
}, { buttonValue: "Open Dialog" })


const App = () => {

	const onComplete = data => {
		console.log("onComplete", data);
	};

	const defaults = {
		name: 'Unnamed'
	};

	return (
		<>
			<ControlledDialog onComplete={onComplete} defaults={defaults}/>
		</>
	);
}

export default App
