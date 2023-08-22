import Accordion from '../components/Accordion';

const AccordionPage = () => {
	const items = [
		{
			id: 'vyuv',
			label: 'Can I use React on a project?',
			content: 'Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes! Yes!'
		},
		{
			id: 'gtc9tyoc',
			label: 'Can I use JS on a project?',
			content: 'Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course! Of Course!'
		},
		{
			id: 'huyvou',
			label: 'Can I use CSS on a project?',
			content: 'Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely! Absolutely!'
		}
	];

	return <Accordion items={items} />;
};

export default AccordionPage;