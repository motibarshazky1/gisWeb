import React, { useState } from 'react';
import './SiteRate.css';
import StarRatings from 'react-star-ratings';

const SiteRate = () => {
	const [name, setName] = useState('');
	const [starsRating, setStarsRating] = useState(0);
	const [date, setDate] = useState('');
	const [comment, setComment] = useState('');

	const onChangeInput = (e, field) => {
		if (field === 'name') {
			setName(e.target.value);
		} else if (field === 'date') {
			setDate(e.target.value);
		} else {
			setComment(e.target.value);
		}
	};

	const onClickCancel = () => {
		setName('');
		setStarsRating(0);
		setDate('');
		setComment('');
	};

	const onClickSubmit = () => {
		alert(`Thanks for the report, ${name}!`);
		setName('');
		setStarsRating(0);
		setDate('');
		setComment('');
	};
	const changeRating = (newRating) => {
		setStarsRating(newRating);
	};
	return (
		<div className="site-rate" id="site-rate">
			<div className="title">
				<label>Report Form</label>
			</div>
			<img
				src="https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png"
				className="img"
				alt=""
			></img>

			<div className="input-form">
				<input
					placeholder="Name"
					className="input"
					value={name}
					onChange={(e) => onChangeInput(e, 'name')}
				/>
				{/* <input
					placeholder="Rate - Choose Between 1 to 5"
					value={rate}
					className="input"
					onChange={(e) => onChangeInput(e, 'rate')}
				/> */}
				<div style={{ marginTop: '25px' }}>
					<StarRatings
						rating={starsRating}
						starRatedColor="yellow"
						changeRating={changeRating}
						numberOfStars={5}
						name="rating"
						starHoverColor="orange"
					/>
				</div>
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
