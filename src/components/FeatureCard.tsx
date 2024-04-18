interface FeatureCardProps {
	feature: { id: string; icon: string; title: string; content: string };
}
function FeatureCard({ feature: { icon, title, content } }: FeatureCardProps) {
	return (
		<div className='flex flex-row items-center gap-4 p-3 transition duration-300 rounded-lg cursor-pointer ss:p-6 feature-card'>
			<div className='flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full bg-dimBlue'>
				<img src={icon} alt='feature icon' />
			</div>
			<div className='flex flex-col gap-4'>
				<h4 className='text-lg font-semibold text-white'>{title}</h4>
				<p className='max-w-sm mb-1 text-base text-dimWhite'>{content}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
