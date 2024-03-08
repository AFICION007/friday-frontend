import React from "react";
import "./styles.css";

const Chat = ({ chat: { type, sender, text } }) => {
	const chatMapping = {
		chat: (
			<div className={`chat ${sender}_chat`}>
				<span className="message">{text}</span>
			</div>
		),
		datetime: (
			<div className={`timestamp ${sender}_timestamp`}>
				<span className="datetime">{text}</span>
			</div>
		),
	};

	return chatMapping[type];
};

export default Chat;
