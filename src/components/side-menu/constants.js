import logo from "./assets/logo.svg";

import search from "./assets/search/search.svg";
import play from "./assets/search/play.svg";

import workspace from "./assets/menuoptions/workspace.svg";
// import conversations from "./assets/menuoptions/conversations.svg";
// import insights from "./assets/menuoptions/insights.svg";
import data from "./assets/menuoptions/data.svg";
import dashboard from "./assets/menuoptions/dashboard.svg";
import dashboardicon from "./assets/menuoptions/dashboardicon.svg";
import dot from "./assets/menuoptions/dot.svg";

import support from "./assets/quicklinks/support.svg";
import profile from "./assets/quicklinks/profile.svg";

import marc from "./assets/teammembers/marc.png";
import caroline from "./assets/teammembers/caroline.png";

import logout from "./assets/logout.svg";

const sideMenuObj = {
	topHeader: {
		logo: logo,
		brand: "Trell",
		profileLink:
			"https://s3-alpha-sig.figma.com/img/6eac/ea0e/abfe7d43025dca6eb49ce0fba4c1cd11?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ary4Ff4xFMBC~CoNqAMFzWFq580PKZlDS2dMLYhsG9LNRoZ2FMH92snf9rIg4uYQ31oAuWDR~XysEWsgoXIlQ~b4IfP878L9XogU-mGHACeQDu9AgIGmw0VvfXVolb~ULqfRoQTcDfcUxxuyfBWPRbbnLf5AiEriGEKHNCtj~9pj~J8ou516I0ipSoJMM0I8v5Jv9M4c9jvaN5wWeWnhA8pAlHm4O7jCxTkV9dxQSDfmR1Fu1C4k22ZlhiguKMw5i4G1fD4D6NH2NA0CLJCP~w25FHUCnBr3aoBrQ1SxJOsoQ~be1lwDuqNIoP5SCa-9JG52-VrLQgw1FfmfPAWaKw__",
	},
	search: {
		searchIcon: search,
		playIcon: play,
	},
	menuOptions: {
		title: "General",
		items: [
			{
				type: "button",
				label: "Workspace",
				icon: workspace,
			},
			// {
			// 	label: "Conversations",
			// 	icon: conversations,
			// },
			// {
			// 	label: "Insights",
			// 	icon: insights,
			// },
			{
				type: "button",
				label: "Data Sources & Files",
				icon: data,
			},
			{
				type: "accordion",
				label: "Dashboards",
				icon: dashboard,
				dashboardIcon: dashboardicon,
				dotIcon: dot,
				dashboards: [
					{
						label: "Marketing Dashboard",
					},
					{
						label: "Finance Dashboards",
					},
					{
						label: "HR Dashboards",
					},
					{
						label: "Sales Overview",
						children: [
							"Audience",
							"Payouts",
							"Workflows",
							"Recent Customers",
						],
					},
				],
			},
		],
	},
	verificationStatus: {
		title: "Your Data Verification Status",
		items: [
			{
				status: "pending",
				text: "Active employees in 2006",
			},
			{
				status: "pending",
				text: "Employees left in 2005",
			},
			{
				status: "verified",
				text: "Employees hired in 1993, 1995, ...",
			},
		],
	},
	quickLinks: {
		title: "Quicklinks",
		items: [
			{
				icon: support,
				text: "Support",
			},
			{
				icon: profile,
				text: "User Profile",
			},
			{
				icon: profile,
				text: "Admin Panel",
			},
		],
	},
	teamMembers: {
		title: "Team members",
		items: [
			{
				profile: marc,
				name: "Marc Carbon",
				username: "carbon",
			},
			{
				profile: caroline,
				name: "Caroline Mask",
				username: "caroline70",
			},
		],
	},
	logout: {
		icon: logout,
		text: "Logout",
	},
};

export default sideMenuObj;
