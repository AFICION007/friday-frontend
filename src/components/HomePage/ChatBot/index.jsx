import React from "react";
import { Input } from "antd";

import Chat from "./Chat";
import IconButton from "./IconButton";
import "./styles.css";
import more from "./assets/more.svg";
import attachment from "./assets/attachment.svg";
import submit from "./assets/submit.svg";

const chatBotObj = {
	header: {
		more: { icon: more, onClick: () => {} },
		title: "Chat with Friday!",
	},
	chats: [
		{
			type: "datetime",
			text: "Friday 02:10 PM",
			sender: "friday",
		},
		{
			type: "chat",
			text: "Hello Arun",
			sender: "friday",
		},
		{
			type: "chat",
			text: "I am Friday. Your personalised analytics co-pilot assistant. Ask me anything to fetch data and share insights from your organisation.",
			sender: "friday",
		},
		{
			type: "datetime",
			text: "02:12 PM",
			sender: "user",
		},
		{
			type: "chat",
			text: "How many Employees were hired in 1986, 1987 and 2002?",
			sender: "user",
		},
	],
	chatBox: {
		placeholder: "Ask Friday Anything..",
		buttons: [
			{
				icon: attachment,
				onClick: () => {},
			},
			{
				icon: submit,
				onClick: () => {},
			},
		],
	},
};

const ChatBot = () => {
	return (
		<div className="main_container">
			<div className="top_header">
				<IconButton icon={chatBotObj.header.more.icon} size="medium" />
				<h2 className="header_title">{chatBotObj.header.title}</h2>
			</div>
			<div className="chat_section">
				{chatBotObj.chats.map((chat) => (
					<Chat chat={chat} />
				))}
			</div>
			<div className="chat_box_container">
				<Input
					placeholder={chatBotObj.chatBox.placeholder}
					suffix={
						<div className="chat_buttons">
							{chatBotObj.chatBox.buttons.map(
								({ icon, onClick }) => (
									<IconButton
										icon={icon}
										size="small"
										onClick={onClick}
									/>
								)
							)}
						</div>
					}
					className="chat_box"
				/>
			</div>
		</div>
	);
};

export default ChatBot;
