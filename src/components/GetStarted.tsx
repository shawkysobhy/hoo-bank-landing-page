import arrowUp from '../assets/arrow-up.svg';
function GetStarted() {
	return (
		<div className='flex items-center justify-center p-[3px] w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer'>
			<div className='h-full w-full bg-primary rounded-full flex items-center justify-center'>
				<div className='flex flex-col text-[18px]'>
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
