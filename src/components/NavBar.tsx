import { useState } from 'react';
import Logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import NavLinks from './NavLinks';
function NavBar() {
	const [toogle, setToggle] = useState(false);
	return (
		<nav className='flex  items-center justify-between  text-white paddingX py-6  m max-w-screen-xl	 mx-auto'>
			<img className=' w-[124px]' src={Logo} />
			<ul className=' list-none hidden ss:flex items-center text-base gap-14 flex-grow justify-end'>
				<NavLinks />
			</ul>
			<div className='relative'>
				{toogle ? (
					<button
						className=' ss:hidden '
						onClick={() => setToggle((prev) => !prev)}>
						<img src={close} />
					</button>
				) : (
					<button
						className=' ss:hidden '
						onClick={() => setToggle((prev) => !prev)}>
						<img src={menu} />
					</button>
				)}
				{toogle && (
					<div className='ss:hidden absolute right-0 top-6 shadow-lg px-8 py-6 my-2 mx-6  rounded-md sidebar bg-black-gradient min-w-[140px]'>
						<ul className='list-none  flex flex-col items-center  text-base gap-2 flex-grow justify-end z-10  text-white'>
							<NavLinks />
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
