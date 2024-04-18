import CustomButton from './Button';

function CTA() {
	return (
		<div className='flex items-center justify-center py-6 text-white pg-primary sm:py-16 '>
			<div className='w-full  xl:max-w-[1280px]'>
				<section className='flex flex-col paddingX'>
					<div className='flex flex-col items-center justify-between px-6 py-6 rounded-lg md:flex-row sm:py-14 sm:px-16 bg-black-gradient'>
						<div>
							{' '}
							<h2 className='font-semibold xs:text-5xl text-xl text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
								Come try our service now!
							</h2>
							<p className=' paragraph max-w-[500px] mt-4'>
								Everything you need to accept card payments and grow your
								business anywhere on the planet.
							</p>
						</div>
						<CustomButton style={'mt-10  self-start '}>Get Started</CustomButton>
					</div>
				</section>
			</div>
		</div>
	);
}

export default CTA;
