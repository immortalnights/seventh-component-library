import React from 'react';

function Button(props) {
	return (<button>{props.children || "Click Me!"}</button>);
};

export default Button;