import discount from '../assets/Discount.svg';
import robot from '../assets/robot.png'
import GetStarted from './GetStarted';
function Hero() {
	return (
		<div className='flex justify-center items-start  pg-primary text-white '>
			<div className=' w-full xl:max-w-[1280px]'>
				<section
					id='home'
					className='flex flex-col md:flex-row py-16 md:py-4 gap-10 md:gap-4'>
					<div className='flex-1 flex flex-col justify-center items-start  paddingX xl:px-0  w-full'>
						<div className='bg-discount-gradient px-2 py-1 flex items-center gap-2 rounded-lg mb-4'>
							<img src={discount} />
							<p className='paragraph '>
								20% <span className='text-white'>Discount For</span> 1 Month{' '}
								<span className='text-white'>Account</span>
							</p>
						</div>
						<div className='flex flex-row justify-between items-center w-full'>
							<h1 className='text-[52px] ss:text-[62px]  font-semibold'>
								The Next <br className='sm:block hidden' />
								<span className='text-gradient'>Generation</span>{' '}
							</h1>
							<div className='hidden ss:flex'>
								<GetStarted />
							</div>
						</div>
						<h1 className='text-[52px] ss:text-[62px]  font-semibold'>
							Payment Method.
						</h1>
						<p className='paragraph mt-6 max-w-[500px]'>
							Our team of experts uses a methodology to identify the credit
							cards most likely to fit your needs. We examine annual percentage
							rates, annual fees.
						</p>
					</div>
					<div className='flex-1 relative'>
						<img
							className='z-10'
							src={robot}
							alt='billing card with robot arm'
						/>
						<div className='absolute top-0 z-[2] w-[40%] h-[40%] pink__gradient'></div>
						<div className='absolute top-0 z-[3] rounded-full w-[80%] h-[80%] white__gradient'></div>
						<div className='absolute top-30 z-[4] rounded-full w-[70%] h-[50%] white__gradient'></div>
					</div>
					<div className='flex ss:hidden mx-auto'>
						<GetStarted />
					</div>
				</section>
			</div>
		</div>
	);
}

export default Hero;
