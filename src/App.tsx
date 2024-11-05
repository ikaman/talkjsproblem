import { useCallback } from 'react';
import './App.css'
import { Chat } from './Chat'
import Talk from 'talkjs';
import { Session } from '@talkjs/react';

export const App = () => {
	const syncUser = useCallback(
		() =>
			// regular vanilla TalkJS code here
			new Talk.User({
				id: "1",
				name: "First User",
				role: "default"
			}),
		[]
	);


	return (
		<Session appId="th85DENk" syncUser={syncUser}>
			<div className="parent">
				<Chat hasChat={true} />
			</div>
		</Session>
	)
}

