import arrowUp from '../assets/arrow-up.svg';
function GetStarted() {
	return (
		<div className='flex items-center justify-center p-[3px] w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer'>
			<div className='flex items-center justify-center w-full h-full rounded-full bg-primary'>
				<div className='flex flex-col text-lg'>
					<div className='flex items-center gap-2'>
						<p className='text-gradient'>Get</p> <img src={arrowUp} />
					</div>
					<p className='text-gradient'>Started</p>
				</div>
			</div>
		</div>
	);
}

export default GetStarted;
