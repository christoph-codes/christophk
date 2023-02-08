import React from "react";
import Section from "../UI/Section/Section";
import { BsChevronDoubleDown } from "react-icons/bs";
import flag from "../assets/flag.svg";
import Button from "../Button/Button";
import "./Milestones.scss";

export default function Milestones() {
	const milestones = [
		{
			name: "Runner Up Redis x DEV Hackathon 2022",
			emoji: "🥈",
			desc: "I have built a personal credit card wallet that consolidates all of your credit card data to view in one glance.",
			link: "https://dev.to/christoph_codes/wallet-where-your-credit-lives-redis-hackathon-submission-august-2022-46h4",
		},
		{
			name: "1st Place Twilio x Credit One Bank Hackathon 2020",
			emoji: "🥇",
			desc: "Created a service that allowed a current customer to double verify their identity and created an automated response experience for multiple channels for existing customers all using the Twilio software.",
			link: "https://github.com/tkcwebdev/secureX",
		},
		{
			name: "3rd place Startup Weekend 2018",
			emoji: "🥉",
			desc: "Startup Weekend Vegas is the place to look for a team, create a prototype of your idea, validate your business idea, and receive feedback from experienced entrepreneurs, all in one weekend. For full event details, please visit startupweekend.vegas.",
			link: "https://www.youtube.com/watch?v=UtTs4r67uKY",
		},
	];
	return (
		<div className="Milestones">
			<Section id="milestones" variant="primary">
				<img
					src={flag}
					alt="Christopher Jones Story about his design and development career"
				/>
				<h1>Milestones</h1>
				{milestones.map((milestone) => {
					return (
						<div
							key={milestone.name}
							className="milestone list-section"
						>
							<h3>
								{milestone.emoji} {milestone.name}
							</h3>
							<p>{milestone.desc}</p>
							<Button
								href={milestone.link}
								rel="noopener noreferrer"
								target="_blank"
							>
								Learn More
							</Button>
						</div>
					);
				})}
				<a href="#lets-chat" uk-scroll="true">
					<BsChevronDoubleDown size="3em" color="#343a40" />
				</a>
			</Section>
		</div>
	);
}
