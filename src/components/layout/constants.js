import more from "./assets/chatbot/more.svg";
import attachment from "./assets/chatbot/attachment.svg";
import submit from "./assets/chatbot/submit.svg";

export const chatBotObj = {
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
