import React, { useState, useEffect } from 'react';
import './PhotoLibrary.css';
import gilboa1 from '../src/assets/gilboa1.jpg';
import gilboa2 from '../src/assets/gilboa2.jpg';
import ramon1 from '../src/assets/ramon1.jpg';
import ramon2 from '../src/assets/ramon2.jpg';
import nafha1 from '../src/assets/nafha1.jpg';
import nafha2 from '../src/assets/nafha2.jpg';
import nitzan1 from '../src/assets/nitzan1.jpg';
import nitzan2 from '../src/assets/nitzan2.jpg';
import shikma1 from '../src/assets/shikma1.jpg';
import shikma2 from '../src/assets/shikma2.jpg';
import tirza1 from '../src/assets/tirza1.jpg';
import tirza2 from '../src/assets/tirza2.jpg';
import jerusalem1 from '../src/assets/jerusalem1.jpg';
import jerusalem2 from '../src/assets/jerusalem2.jpg';
import hadarim1 from '../src/assets/hadarim1.jpg';
import hadarim2 from '../src/assets/hadarim2.jpg';
import rimonim1 from '../src/assets/rimonim1.jpg';
import rimonim2 from '../src/assets/rimonim2.jpg';
import hasharon1 from '../src/assets/hasharon1.jpg';
import hasharon2 from '../src/assets/hasharon2.jpg';
import ofek1 from '../src/assets/ofek1.jpg';
import ofek2 from '../src/assets/ofek2.jpg';
import ayalon1 from '../src/assets/ayalon1.jpg';
import ayalon2 from '../src/assets/ayalon2.jpg';
import eshel1 from '../src/assets/eshel1.jpg';
import eshel2 from '../src/assets/eshel2.jpg';
const SiteRate = () => {
	let array = [];
	array.push({ photoSrc: gilboa1, photoName: 'בית סוהר גלבוע' });
	array.push({ photoSrc: gilboa2, photoName: 'בית סוהר גלבוע' });
	array.push({ photoSrc: ramon1, photoName: 'בית כלא רמון' });
	array.push({ photoSrc: ramon2, photoName: 'בית כלא רמון' });
	array.push({ photoSrc: nafha1, photoName: 'בית סוהר נפחא' });
	array.push({ photoSrc: nafha2, photoName: 'בית סוהר נפחא' });
	array.push({ photoSrc: nitzan1, photoName: 'בית מעצר ניצן' });
	array.push({ photoSrc: nitzan2, photoName: 'בית מעצר ניצן' });
	array.push({ photoSrc: shikma1, photoName: 'בית כלא שקמה' });
	array.push({ photoSrc: shikma2, photoName: 'בית כלא שקמה' });
	array.push({ photoSrc: tirza1, photoName: 'בית סוהר נווה תרצה' });
	array.push({ photoSrc: tirza2, photoName: 'בית סוהר נווה תרצה' });
	array.push({ photoSrc: jerusalem1, photoName: 'בית מעצר ירושלים' });
	array.push({ photoSrc: jerusalem2, photoName: 'בית מעצר ירושלים' });
	array.push({ photoSrc: hadarim1, photoName: 'בית מעצר הדרים' });
	array.push({ photoSrc: hadarim2, photoName: 'בית מעצר הדרים' });
	array.push({ photoSrc: rimonim1, photoName: 'בית כלא רימונים' });
	array.push({ photoSrc: rimonim2, photoName: 'בית כלא רימונים' });
	array.push({ photoSrc: hasharon1, photoName: 'בית כלא השרון' });
	array.push({ photoSrc: hasharon2, photoName: 'בית כלא השרון' });
	array.push({ photoSrc: ofek1, photoName: 'בית כלא אופק' });
	array.push({ photoSrc: ofek2, photoName: 'בית כלא אופק' });
	array.push({ photoSrc: ayalon1, photoName: 'בית כלא איילון' });
	array.push({ photoSrc: ayalon2, photoName: 'בית כלא איילון' });
	array.push({ photoSrc: eshel1, photoName: 'בית כלא אשל' });
	array.push({ photoSrc: eshel2, photoName: 'בית כלא אשל' });
	return (
		<div className="photo-library" id="photo-library">
			<div className="title">
				<label>Photo Library</label>
			</div>
			<div className="photos">
				{array.map((photo) => (
					<div className="photo-wrapper">
						<img className="photo" src={photo.photoSrc}></img>
						<label>{photo.photoName}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default SiteRate;
