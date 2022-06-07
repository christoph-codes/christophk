import React from 'react';
import Section from '../UI/Section/Section';
import { BsChevronDoubleDown } from "react-icons/bs";
import briefcase from '../assets/briefcase.svg';
import './Company.scss';
import Button from '../Button/Button';

export default function Company(props) {
	return (
		<div className='Company'>
			<Section id='my-company' variant="primary">
				<img
					src={briefcase}
					alt='Christopher Jones owns and operates The Kirk Concept a branding and web development company'
				/>
				<h1>My Company</h1>
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
				<Button variant='primary' href='https://thekirkconcept.com' rel="noopener noreferrer" target='_blank'>
					Visit The Kirk Concept
				</Button>
				<br/>
				<a style={{ marginTop: '2rem'}} href='#micro-startups' uk-scroll='true'>
					<BsChevronDoubleDown size='3em' color='#343a40' />
				</a>
			</Section>
		</div>
	);
}
