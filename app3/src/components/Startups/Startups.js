import React from 'react';
import Section from '../UI/Section/Section';
import { BsChevronDoubleDown } from 'react-icons/bs';
import lightbulb from '../assets/lightbulb.svg';
import './Startups.scss';

export default function Startups(props) {
	const startups = [
		{
			name: 'InThisOrder',
			emoji: '🪀',
			desc: 'InThisOrder is the #1 Task List For Kids Created By Parents!  This was my first app developed in ReactJS',
			image: (
				<>
					<a
						href='https://www.producthunt.com/posts/ito-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ito&#0045;2'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=357714&theme=light'
							alt='Ito - The&#0032;&#0035;1&#0032;Priority&#0032;Task&#0032;List&#0032;For&#0032;Kids&#0044;&#0032;Create&#0032;Your&#0032;Account&#0032;Now&#0033; | Product Hunt'
							style={{
								maxWidth: '200px',
								textAlign: 'center',
								marginBottom: '16px',
							}}
						/>
					</a>
				</>
			),
			link: 'https://inthisorder.app',
		},
		{
			name: 'The Next Bill',
			emoji: '💵',
			desc: 'The Next Bill App organizes and prioritizes your bills to properly keep you on track for financial success.',
			link: 'https://thenextbill.com',
		},
		{
			name: 'Equippd',
			emoji: '✝️',
			desc: 'Equippd is an online ministry that brings believers of Christ from all around who is striving to look more and more like Christ with the way they live their lives.',
			link: 'https://equippdlife.com',
		},
		{
			name: 'Grubber',
			emoji: '🍣',
			desc: 'An app that joins people together who share the same food interests.',
			link: 'https://getgrubber.com',
		},
		{
			name: 'Bulb',
			emoji: '💡',
			desc: 'A community of ideas by founders and entrepreneurs. Partnering with the infamous Eric Feuerstein @fireprone',
			link: 'https://github.com/christoph-codes/bulb',
		},
		{
			name: 'Reverse Recipe',
			emoji: '🍗',
			desc: 'Use your ingredients to find the perfect recipe.',
			link: 'https://github.com/DebitTwo/reverseRecipe',
		},
		// {
		// 	name: 'ShadeShip',
		// 	emoji: '🕶',
		// 	desc:
		// 		'Shade Ship is the premier distributor of quality vintage and retro sunglasses picked to compliment your style.',
		// 	link: 'https://facebook.com/shadeship',
		// },
		// {
		// 	name: 'mySoloGym',
		// 	emoji: '🏋🏽‍♂️',
		// 	desc:
		// 		'MySoloGym provides a private workout experience to fitness enthusiasts who focus on the quality of workout without the distractions.',
		// 	link: 'https://facebook.com/mysologym',
		// },
		// {
		// 	name: 'MommyFits',
		// 	emoji: '👗',
		// 	desc:
		// 		'MommyFits was a mom inspired apparel line and lifestyle brand that was run by my wife with the expectation to inspire moms around the world to be the best “Fit mom” they could be.',
		// 	link: 'https://facebook.com/mommyfits',
		// },
	];
	return (
		<div className='Startups'>
			<Section id='micro-startups' variant='tertiary'>
				<img
					src={lightbulb}
					alt='Christopher Jones comes up with ideas all the time, and here are his ideas has brought to life'
				/>
				<h1>Micro-Startups</h1>
				{startups.map((startup) => {
					return (
						<div
							key={startup.name}
							className='startup list-section'
						>
							<h3>
								{startup.emoji} {startup.name}
							</h3>
							{startup.image && startup.image}
							<p>{startup.desc}</p>
							<a
								href={startup.link}
								rel='noopener noreferrer'
								target='_blank'
							>
								Visit {startup.name}
							</a>
						</div>
					);
				})}
				<a href='#milestones' uk-scroll='true'>
					<BsChevronDoubleDown size='3em' color='' />
				</a>
			</Section>
		</div>
	);
}
