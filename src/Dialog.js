import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './dialog.module.css';

class Dialog extends React.Component {

	render()
	{
		const headerText = this.props.header || "Dialog";

		return (<div className={styles['dialog-container']}>
			<div className={styles.dialog}>
				<div className={styles.header}><h2>{headerText}</h2></div>
				<div className={styles.content}>
					{this.props.children}
				</div>
				<div className={styles.footer}>
					<Button onClick={ () => this.props.onClose() }>Close</Button>
				</div>
			</div>
		</div>);
	}
};

Dialog.propTypes = {
	header: PropTypes.string,

	onClose: PropTypes.func.isRequired
};

export default Dialog;