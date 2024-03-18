import React from "react";
import styles from "./styles.module.css";

const Chat = ({ chat: { type, sender, text } }) => {
	const chatMapping = {
		chat: (
			<div className={`${styles.chat} ${styles[`${sender}_chat`]}`}>
				<span className={styles.message}>{text}</span>
			</div>
		),
		datetime: (
			<div
				className={`${styles.timestamp} ${
					styles[`${sender}_timestamp`]
				}`}
			>
				<span className={styles.datetime}>{text}</span>
			</div>
		),
	};

	return chatMapping[type];
};

export default Chat;
