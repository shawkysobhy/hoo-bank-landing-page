import { features } from '../data/constant';
import CustomButton from './Button';
import FeatureCard from './FeatureCard';
function Business() {
	return (
		<div className='flex items-start justify-center text-white pg-primary paddingY '>
			<div className='w-full xl:max-w-[1280px]'>
				<section className='flex flex-col items-center gap-10 md:flex-row paddingX'>
					<div className='flex flex-col items-start flex-1 '>
						<h2 className='heading'>
							You do the business,
							<br className='hidden sm:block' /> we'll handle the money.
						</h2>
						<p className=' paragraph max-w-[520px] mt-8'>
							With the right credit card, you can improve your financial life by
							building credit, earning rewards and saving money. But with
							hundreds of credit cards on the market.
						</p>
						<CustomButton style={'mt-10'}>Get Started</CustomButton>
					</div>
					<div className='flex flex-col justify-center flex-1 gap-6 '>
						{features.map((feature) => (
							<FeatureCard key={feature.id} feature={feature} />
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
export default Business;
