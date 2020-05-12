import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './dialog.module.css';

class Dialog extends React.Component {
	constructor(props)
	{
		super();

		props = props || {};
		this.state = {
			display: true,
			value: props.defaults
		};
	}

	render()
	{
		const headerText = this.props.header || "Dialog";

		// console.debug("Dialog props", this.props);

		const setData = ({ key, value }) => {
			this.setState({ value: { ...this.state.value, [key]: value } });
		};

		const onInput = event => {
			const target = event.target;
			setData({ key: target.name, value: target.value });
		};

		const onSubmit = event => {
			event.preventDefault();
			// this.setState({ display: false });
			this.props.onClose();
			this.props.onComplete(this.state.value);
		};

		const display = this.state.display ? 'absolute' : 'none';

		return (
			<div style={{display: display}} className={styles['dialog-container']}>
				<div className={styles.dialog}>
					<form onSubmit={onSubmit}>
						<div className={styles.header}><h2>{headerText}</h2></div>
						<div className={styles.content}>
							{this.props.children && this.props.children({ value: this.state.value, setData, onInput })}
						</div>
						<div className={styles.footer}>
							<Button type={"submit"}>{this.props.submitText || "Close"}</Button>
						</div>
					</form>
				</div>
			</div>
		);
	}
};

Dialog.propTypes = {
	header: PropTypes.string,
	children: PropTypes.func,
	submitText: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	onComplete: PropTypes.func.isRequired
};

export default Dialog;
