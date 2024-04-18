import quote from '../assets/quotes.svg';
interface feedbackCardProps {
	feedback: {
		id: string;
		content: string;
		name: string;
		title: string;
		img: string;
	};
}
function FeedbackCard({
	feedback: {  name, content, title, img },
}: feedbackCardProps) {
	return (
		<div className=' feature-card rounded-lg flex flex-col justify-between px-10 py-12 max-w-[370px] cursor-pointer'>
			<img src={quote} className='w-[42px]' alt='quote ' />
			<p className='my-10 text-lg font-medium tex-white'>{content}</p>
			<div className='flex gap-4'>
				<img
					src={img}
					className='object-contain w-12 h-12 rounded-full'
					alt='person image'
				/>
				<div>
					<h4 className='text-[20px] font-semibold'>{name}</h4>
					<p className='text-base text-dimWhite'>{title}</p>
				</div>
			</div>
		</div>
	);
}

export default FeedbackCard;
