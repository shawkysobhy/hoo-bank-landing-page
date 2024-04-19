import billingImage from '../assets/bill.png';
import apple from '../assets/apple.svg';
import googlePlay from '../assets/google.svg';
function Billing() {
	return (
		<div className='flex items-start justify-center paddingY pg-primary'>
			<div className='w-full xl:max-w-[1280px]'>
				<section className='flex flex-col-reverse items-center gap-10 md:flex-row paddingX'>
					<div className='flex-1'>
						<img src={billingImage} className='w-[100%] h-[100%]' />
					</div>
					<div className='flex flex-col items-start flex-1'>
						<h2 className='heading'>
							Easily control your <br className='hidden sm:block' /> billing &
							invoicing. You do the business,
						</h2>
						<p className='paragraph max-w-[520px] mt-8'>
							We consider the payment methods you'll offer your customers when
							you start your business. This is an important part of managing
							your business cash flow and meeting your customer's needs.
						</p>
						<div className='relative flex flex-row flex-wrap gap-6 mt-6'>
							<button type='button'>
								<img src={apple} />
							</button>
							<button type='button'>
								<img src={googlePlay} />
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Billing;
