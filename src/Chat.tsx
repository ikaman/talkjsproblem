import { Chatbox } from "@talkjs/react";
import styles from "./Chat.css";
import Talk from "talkjs";

export const Chat = () => {
    const syncConversation = (session: Talk.Session) => {
        const conversation = session.getOrCreateConversation("1_2");
        return conversation;
    };

    return (
        <Chatbox
            className={styles.chatArea}
            syncConversation={syncConversation}
            loadingComponent={<h1>Loading..</h1>}
        />
    )
}