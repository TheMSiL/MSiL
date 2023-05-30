import { hobbies } from '../data';

const Hobbies = () => {
	return (
		<>
			{hobbies.map(({ img, id }) => {
				return <img src={img} alt='' key={id} />;
			})}
		</>
	);
};

export default Hobbies;
