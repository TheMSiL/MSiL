import './reviews.css';
import ava from '../../assets/review_avatar.png';

const ReviewsItem = ({ name, text }) => {
	return (
		<div className='review_item'>
			<div className='review_left'>
				<img className='review_img' width='80' src={ava} />
				<p className='review_name'>{name}</p>
				<p>CUSTOMER</p>
			</div>
			<span className='span_mob'>“</span>
			<div className='review_right'>
				<span>“</span>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ReviewsItem;
