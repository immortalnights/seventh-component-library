import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

function Button(props) {
	const classNames = [styles.btn, props.style].join(' ');

	return (<button className={classNames} type={props.type || "button"} disabled={props.disabled} onClick={props.onClick}>{props.children}</button>);
};

Button.propTypes = {
	style: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};

export default Button;
