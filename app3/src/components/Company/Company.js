import React from 'react';
import Section from '../UI/Section/Section';
import { AiOutlineArrowDown } from "react-icons/ai";
import briefcase from '../assets/briefcase.svg';
import './Company.scss';

export default function Company(props) {
	return (
		<div className='Company'>
			<Section id='my-company' bgColor={`var(--ltgray)`}>
				<img
					src={briefcase}
					alt='Christopher Jones owns and operates The Kirk Concept a branding and web development company'
				/>
				<h1>My Story</h1>
				<p>
					The Kirk Concept is all about getting companies excited about their
					brand. I provide custom logo/branding, graphic design, website
					development, and marketing services for all of my clients.
				</p>
				<p>
					I started this business right out of college in 2012 and it has been a
					part-time gig and worked full-time jobs as my primary source of
					income. Over the years I was most excited about creating brands that
					companies get excited about.
				</p>
				<p>
					My goal is to have every company in Las Vegas excited about their own
					brand to the point where it becomes a marketing competition and not a
					quality/brand competition.
				</p>
				<p>
					<a className='btn' href='https://thekirkconcept.com' rel="noopener noreferrer" target='_blank'>
						Visit The Kirk Concept
					</a>
				</p>
				<a href='#micro-startups' uk-scroll='true'>
					<AiOutlineArrowDown size='3em' />
				</a>
			</Section>
		</div>
	);
}
