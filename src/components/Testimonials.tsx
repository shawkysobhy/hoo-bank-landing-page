import FeedbackCard from './FeedbackCard';
import { feedback } from '../data/constant';
function Teshtimoninials() {
	return (
		<div className='flex items-center justify-center py-6 text-white pg-primary sm:py-16 '>
			<div className='w-full xl:max-w-[1280px]'>
				<section className='flex flex-col paddingX'>
					<div className='flex flex-col items-center justify-between mb-6 ss:flex-row sm:mb-16'>
						<h2 className='font-semibold xs:text-[48px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px]'>
							What people are <br className='hidden sm:block' /> saying about us
						</h2>
						<p className='paragraph max-w-[520px]'>
							Everything you need to accept card payments and grow your business
							anywhere on the planet.
						</p>
					</div>
					<div className='flex flex-wrap justify-center '>
						{feedback.map((feedback) => {
							return <FeedbackCard key={feedback.id} feedback={feedback} />;
						})}
					</div>
				</section>
			</div>
		</div>
	);
}

export default Teshtimoninials;
