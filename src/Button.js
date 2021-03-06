import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function Button(props) {
	const classNames = ['btn', props.style].join(' ');

	return (<button className={classNames} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>);
};

Button.propTypes = {
	style: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};

export default Button;
