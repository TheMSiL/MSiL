import { skills } from '../data';

const Skills = () => {
	return (
		<>
			{skills.map(({ id, title, img }) => {
				return (
					<div className='grid' key={id}>
						<div className='skill__imgBox'>
							<img src={img} alt={title} />
						</div>
						<p className='skill__title'>{title}</p>
					</div>
				);
			})}
		</>
	);
};

export default Skills;
