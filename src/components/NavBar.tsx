import { useState } from 'react';
import Logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import NavLinks from './NavLinks';
function NavBar() {
	const [toogle, setToggle] = useState(false);
	return (
		<nav className='flex items-center justify-between max-w-screen-xl py-6 mx-auto text-white paddingX m'>
			<img className=' w-[124px]' src={Logo} />
			<ul className='items-center justify-end flex-grow hidden text-base list-none  ss:flex gap-14'>
				<NavLinks />
			</ul>
			<div className='relative'>
				{toogle ? (
					<button
						className=' ss:hidden'
						onClick={() => setToggle((prev) => !prev)}>
						<img src={close} />
					</button>
				) : (
					<button
						className='ss:hidden '
						onClick={() => setToggle((prev) => !prev)}>
						<img src={menu} />
					</button>
				)}
				{toogle && (
					<div className='ss:hidden absolute right-0 top-6 shadow-lg px-8 py-6 my-2 mx-6  rounded-md sidebar bg-black-gradient min-w-[140px]'>
						<ul className='z-10 flex flex-col items-center justify-end flex-grow gap-2 text-base text-white list-none'>
							<NavLinks />
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
