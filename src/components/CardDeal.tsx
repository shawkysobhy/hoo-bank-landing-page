import CustomButton from "./Button";
import cardDeal from "../assets/card.png";
function CardDeal() {
  return (
		<div className='flex items-start justify-center py-6 pg-primary sm:py-16'>
			<div className='w-full xl:max-w-[1280px]'>
				<section className='flex flex-col-reverse items-center gap-10 md:flex-row-reverse paddingX'>
					<div className='flex-1'>
						<img src={cardDeal} className='w-[100%] h-[100%]' />
					</div>
					<div className='flex flex-col items-start flex-1 '>
						<h2 className='font-semibold xs:text-[48px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
							Find a better card deal in <br className='hidden sm:block' />
							few easy steps
						</h2>
						<p className=' paragraph max-w-[520px] mt-8'>
							We've been researching and comparing credit cards for over 15
							years. You can easily compare more than 270 Australian credit
							cards using our free tools. When you find one that suits, we'll
							take you securely to the bank's website.
						</p>
						<CustomButton style={'mt-10'}>Get Started</CustomButton>
					</div>
				</section>
			</div>
		</div>
	);
}

export default CardDeal