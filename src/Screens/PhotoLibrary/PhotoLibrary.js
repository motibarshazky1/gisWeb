import React from 'react';
import './PhotoLibrary.css';
import gilboa1 from '../../assets/gilboa1.jpg';
import gilboa2 from '../../assets/gilboa2.jpg';
import nafha1 from '../../assets/nafha1.jpg';
import nafha2 from '../../assets/nafha2.jpg';
import nitzan1 from '../../assets/nitzan1.jpg';
import nitzan2 from '../../assets/nitzan2.jpg';
import shikma1 from '../../assets/shikma1.jpg';
import shikma2 from '../../assets/shikma2.jpg';
import tirza1 from '../../assets/tirza1.jpg';
import tirza2 from '../../assets/tirza2.jpg';
import jerusalem1 from '../../assets/jerusalem1.jpg';
import jerusalem2 from '../../assets/jerusalem2.jpg';
import hasharon1 from '../../assets/hasharon1.jpg';
import hasharon2 from '../../assets/hasharon2.jpg';
import ofek1 from '../../assets/ofek1.jpg';
import ofek2 from '../../assets/ofek2.jpg';
import ayalon1 from '../../assets/ayalon1.jpg';
import ayalon2 from '../../assets/ayalon2.jpg';
import eshel1 from '../../assets/eshel1.jpg';
import eshel2 from '../../assets/eshel2.jpg';
import kabir1 from '../../assets/kabir1.jpg';
import kabir2 from '../../assets/kabir2.jpg';
import masiau1 from '../../assets/masiau1.jpg';
import masiau2 from '../../assets/masiau2.jpg';
import keidar1 from '../../assets/keidar1.jpg';
import keidar2 from '../../assets/keidar2.jpg';
const SiteRate = () => {
	let array = [];
	array.push({ photoSrc: gilboa1, photoName: 'בית סוהר גלבוע' });
	array.push({ photoSrc: gilboa2, photoName: 'בית סוהר גלבוע' });
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
	array.push({ photoSrc: hasharon1, photoName: 'בית כלא השרון' });
	array.push({ photoSrc: hasharon2, photoName: 'בית כלא השרון' });
	array.push({ photoSrc: ofek1, photoName: 'בית כלא אופק' });
	array.push({ photoSrc: ofek2, photoName: 'בית כלא אופק' });
	array.push({ photoSrc: ayalon1, photoName: 'בית כלא איילון' });
	array.push({ photoSrc: ayalon2, photoName: 'בית כלא איילון' });
	array.push({ photoSrc: eshel1, photoName: 'בית כלא אשל' });
	array.push({ photoSrc: eshel2, photoName: 'בית כלא אשל' });
	array.push({ photoSrc: kabir1, photoName: 'בית מעצר תל אביב אבו כביר' });
	array.push({ photoSrc: kabir2, photoName: 'בית מעצר תל אביב אבו כביר' });
	array.push({ photoSrc: masiau1, photoName: 'בית סוהר מעשיהו' });
	array.push({ photoSrc: masiau2, photoName: 'בית סוהר מעשיהו' });
	array.push({ photoSrc: keidar1, photoName: 'בית סוהר אוהלי קידר' });
	array.push({ photoSrc: keidar2, photoName: 'בית סוהר אוהלי קידר' });
	return (
		<div className="photo-library" id="photo-library">
			<div className="title">
				<label>Photo Library</label>
			</div>
			<img
				src="https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png"
				className="img"
				alt=""
			></img>

			<div className="photos">
				{array.map((photo, i) => (
					<div key={i} className="photo-wrapper">
						<img className="photo" src={photo.photoSrc} alt=""></img>
						<label>{photo.photoName}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default SiteRate;
