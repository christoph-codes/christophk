import React from 'react';
import Section from '../UI/Section/Section';
import chat from '../assets/chat.svg';
import './LetsChat.scss';

export default function LetsChat(props) {
	return (
		<div className='LetsChat'>
			<Section id='lets-chat' bgColor={`var(--ltgray)`}>
				<img
					src={chat}
					alt='Christopher Jones would like to chat with you about your project'
				/>
				<h1>Let's Chat</h1>
				<p>
					I’m passionate about new projects and would love to talk to you about
					your project whether you need it branded or built from scratch. Let’s
					chat and get the ball rolling on creating something awesome together!
				</p>
				<p>
					<a className='btn' href='mailto:tkcwebdev@gmail.com' rel="noopener noreferrer" target='_blank'>
						Let's Chat
					</a>
				</p>
			</Section>
		</div>
	);
}
