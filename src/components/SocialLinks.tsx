import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
const socialIcons = [linkedin, facebook, insta, twitter];
function SocialLinks() {
	return (
		<div className='flex items-center justify-center py-6 text-white pg-primary'>
			<div className='w-full  xl:max-w-[1280px]  border-t-[1px] border-t-[#3f3e45]'>
				<div className='flex flex-col items-center justify-between gap-6 pt-6 md:flex-row'>
					<p>2022 HooBank. All Rights Reserved.</p>
					<div className='flex items-center gap-4'>
						{socialIcons.map((platform) => {
							return (
								<a className='cursor-pointer' key={platform}>
									<img src={platform} />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialLinks;
