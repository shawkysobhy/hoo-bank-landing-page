import { stats } from '../data/constant';
function Stats() {
	return (
		<div className='flex items-start justify-center py-6 text-white pg-primary sm:py-16 '>
			<div className=' w-full xl:max-w-[1280px]'>
				<section className='flex flex-wrap items-center gap-10 sm:justify-center paddingX'>
					{stats.map((stat) => {
						return (
								<div key={stat.id} className='flex items-center gap-4 px-3 py-4'>
									<h4 className='text-2xl font-bold sm:text-4xl'>{stat.value}</h4>
									<p className='text-base sm:text-xl text-gradient '>{stat.title}</p>
								</div>
								
						);
					})}
				</section>
			</div>
		</div>
	);
}

export default Stats;
/**{/* {index !== stats.length - 1 && (
									<span className='hidden md:block'>|</span>
								)} */ 