import airbnb from '../assets/airbnb.png';
import binance from '../assets/binance.png';
import dropbox from '../assets/dropbox.png';
import coinbase from '../assets/coinbase.png';
function Clients() {
	return (
		<div className='flex items-center justify-center py-6 text-white pg-primary sm:py-16 '>
			<div className='w-full  xl:max-w-[1280px]'>
				<section className='flex flex-col paddingX'>
					<div className='flex flex-row flex-wrap items-center justify-around gap-4'>
						{[airbnb, binance, dropbox, coinbase].map((img, index) => {
							return (
								<div
									key={index}
									className='flex items-start justify-center flex-1 min-w-[100px] sm:min-w-[180px]'>
									<img src={img} className='w-[100px] sm:w-[180px]' />
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
}

export default Clients;
