import { navLinks } from '../data/constant';
function NavLinks() {
	return (
		<>
			{navLinks.map(({ title, id }) => (
				<li key={id} className='cursor-pointer font-normal hover:text-dimWhite'>
					<a href={`#${id}`}>{title}</a>
				</li>
			))}
		</>
	);
}

export default NavLinks;
