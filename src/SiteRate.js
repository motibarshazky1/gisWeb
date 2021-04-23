import React, { useState, useEffect } from 'react';
import './SiteRate.css';

const SiteRate = () => {
	const [name, setName] = useState('');
	const [rate, setRate] = useState('');
	const [date, setDate] = useState('');
	const [comment, setComment] = useState('');

	const onChangeInput = (e, field) => {
		if (field === 'name') {
			setName(e.target.value);
		} else if (field === 'rate') {
			setRate(e.target.value);
		} else if (field === 'date') {
			setDate(e.target.value);
		} else {
			setComment(e.target.value);
		}
	};

	const onClickCancel = () => {
		setName('');
		setRate('');
		setDate('');
		setComment('');
	};

	const onClickSubmit = () => {
		alert(`Thanks for the report, ${name}`);
		setName('');
		setRate('');
		setDate('');
		setComment('');
	};

	return (
		<div className="site-rate" id="site-rate">
			<div className="title">
				<label>Report Form</label>
			</div>
			<div className="input-form">
				<input
					placeholder="Name"
					className="input"
					value={name}
					onChange={(e) => onChangeInput(e, 'name')}
				/>
				<input
					placeholder="Rate - Choose Between 1 to 5"
					value={rate}
					className="input"
					onChange={(e) => onChangeInput(e, 'rate')}
				/>
				<input
					placeholder="Date"
					value={date}
					className="input"
					onChange={(e) => onChangeInput(e, 'date')}
				/>
				<input
					placeholder="Comment"
					className="input comment"
					onChange={(e) => onChangeInput(e, 'comment')}
					value={comment}
				/>
				<div className="buttons">
					<button className="button" onClick={onClickSubmit}>
						Submit
					</button>
					<button className="button" onClick={onClickCancel}>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};

export default SiteRate;
