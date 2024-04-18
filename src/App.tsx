import {
	Hero,
	NavBar,
	Stats,
	Business,
	Billing,
	CardDeal,
	Teshtimoninials,
	CTA,
	Clients,
	Footer,
} from './components';

function App() {
	return (
		<div className='w-full bg-primary'>
			<NavBar />
			<Hero />
			<Stats />
			<Business />
			<Billing />
			<CardDeal />
			<Teshtimoninials />
			<Clients/>
			<CTA/>
			<Footer/>
		</div>
	);
}

export default App;
