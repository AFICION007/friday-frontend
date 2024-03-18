import React from "react";
import { Input } from "antd";

import Chat from "./chat";
import IconButton from "./icon-button";
import "./styles.css";
import { chatBotObj } from "../constants";

const ChatBot = () => {
	return (
		<div className="main_container">
			<div className="top_header">
				<IconButton icon={chatBotObj.header.more.icon} size="medium" />
				<h2 className="header_title">{chatBotObj.header.title}</h2>
			</div>
			<div className="chat_section">
				{chatBotObj.chats.map((chat, index) => (
					<Chat key={index} chat={chat} />
				))}
			</div>
			<div className="chat_box_container">
				<Input
					placeholder={chatBotObj.chatBox.placeholder}
					suffix={
						<div className="chat_buttons">
							{chatBotObj.chatBox.buttons.map(
								({ icon, onClick }, index) => (
									<IconButton
										key={index}
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
