import { stats } from '../data/constant';
function Stats() {
	return (
		<div className='flex justify-center items-start  pg-primary text-white py-6 sm:py-16 '>
			<div className=' w-full xl:max-w-[1280px]'>
				<section className='flex flex-wrap sm:justify-center items-center paddingX gap-10'>
					{stats.map((stat, index) => {
						return (
							<>
								<div className='flex items-center gap-4  py-4 px-3'>
									<h4 className='text-2xl sm:text-4xl font-bold'>{stat.value}</h4>
									<p className='text-base sm:text-xl text-gradient '>{stat.title}</p>
								</div>
								{index !== stats.length - 1 && (
									<span className='hidden md:block'>|</span>
								)}
							</>
						);
					})}
				</section>
			</div>
		</div>
	);
}

export default Stats;
