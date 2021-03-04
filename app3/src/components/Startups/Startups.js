import React from 'react';
import Section from '../UI/Section/Section';
import { AiOutlineArrowDown } from 'react-icons/ai';
import lightbulb from '../assets/lightbulb.svg';
import './Startups.scss';

export default function Startups(props) {
	const startups = [
		{
			name: 'InThisOrder',
			emoji: '🪀',
			desc:
				'InThisOrder is the #1 Task List For Kids Created By Parents!  This was my first app developed in ReactJS',
			link: 'https://inthisorder.app',
		},
		{
			name: 'The Next Bill',
			emoji: '💵',
			desc:
				'The Next Bill App organizes and prioritizes your bills to properly keep you on track for financial success.',
			link: 'https://thenextbill.com',
		},
		{
			name: 'Equippd',
			emoji: '✝️',
			desc:
				'Equippd is an online ministry that brings believers of Christ from all around who is striving to look more and more like Christ with the way they live their lives.',
			link: 'https://equippdlife.com',
		},
		{
			name: 'Grubber',
			emoji: '🍣',
			desc: 'An app that joins people together who share the same food interests.',
			link: 'https://getgrubber.com',
		},
		{
			name: 'ShadeShip',
			emoji: '🕶',
			desc:
				'Shade Ship is the premier distributor of quality vintage and retro sunglasses picked to compliment your style.',
			link: 'https://facebook.com/shadeship',
		},
		{
			name: 'mySoloGym',
			emoji: '🏋🏽‍♂️',
			desc:
				'MySoloGym provides a private workout experience to fitness enthusiasts who focus on the quality of workout without the distractions.',
			link: 'https://facebook.com/mysologym',
		},
		{
			name: 'MommyFits',
			emoji: '👗',
			desc:
				'MommyFits was a mom inspired apparel line and lifestyle brand that was run by my wife with the expectation to inspire moms around the world to be the best “Fit mom” they could be.',
			link: 'https://facebook.com/mommyfits',
		},
	];
	return (
		<div className='Startups'>
			<Section id='micro-startups' bgColor={`white`}>
				<img
					src={lightbulb}
					alt='Christopher Jones comes up with ideas all the time, and here are his ideas has brought to life'
				/>
				<h1>Micro-Startups</h1>
				{startups.map((startup) => {
					return (
						<div key={startup.name} className='startup list-section'>
							<h3>
								{startup.emoji} {startup.name}
							</h3>
							<p>{startup.desc}</p>
							<a href={startup.link} rel='noopener noreferrer' target='_blank'>
								Visit {startup.name}
							</a>
						</div>
					);
				})}
				<a href='#milestones' uk-scroll='true'>
					<AiOutlineArrowDown size='3em' />
				</a>
			</Section>
		</div>
	);
}
