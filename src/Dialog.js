import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './dialog.css';

class Dialog extends React.Component {

	render()
	{
		const headerText = this.props.header || "Dialog";

		return (<div className="dialog-container">
			<div className="dialog">
				<div className="header"><h2>{headerText}</h2></div>
				<div className="content">
					{this.props.children}
				</div>
				<div className="footer">
					<Button onClick={ () => this.props.onClose() }>Close</Button>
				</div>
			</div>
		</div>);
	}
};

Dialog.propTypes = {

};

export default Dialog;