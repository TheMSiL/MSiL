import { skills } from '../data';

const Skills = () => {
	return (
		<>
			{skills.map(({ id, title, img, invert }) => {
				return (
					<div className='grid' key={id}>
						<div className={`skill__imgBox${invert ? ' skill__imgBox--invert' : ''}`}>
							<img src={img} alt={title} loading='lazy' />
						</div>
						<p className='skill__title'>{title}</p>
					</div>
				);
			})}
		</>
	);
};

export default Skills;
