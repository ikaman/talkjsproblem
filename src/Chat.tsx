import { Chatbox } from "@talkjs/react";
import "./Chat.css";
import Talk from "talkjs";

interface Props {
	hasChat: boolean;
}

export const Chat = ({ hasChat }: Props) => {
	const syncConversation = (session: Talk.Session) => {
		const conversation = session.getOrCreateConversation("1_2");
		return conversation;
	};

	if (hasChat)
		return (<Chatbox
			className="chat"
			syncConversation={syncConversation}
			loadingComponent={<h1>Loading..</h1>}
		/>)
	else
		return (<div className="chat">empty</div>)
}