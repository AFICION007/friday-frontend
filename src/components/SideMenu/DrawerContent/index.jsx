import React from "react";
import { Input } from "antd";

import MenuOptions from "./MenuOptions";
import styles from "./styles.module.css";
import sideMenuObj from "../constants";

const DrawerContent = ({ contentRef }) => {
	return (
		<div ref={contentRef} className={styles.main_container}>
			<div className={styles.top_header}>
				<img
					src={sideMenuObj.topHeader.logo}
					alt="logo"
					className={styles.logo}
				/>
				<h1 className={styles.brand}>{sideMenuObj.topHeader.brand}</h1>
				<img
					src={sideMenuObj.topHeader.profileLink}
					alt="user profile"
					className={styles.user_profile}
				/>
			</div>
			<div className={styles.search_container}>
				<Input
					placeholder="Search"
					prefix={
						<img
							src={sideMenuObj.search.searchIcon}
							alt="search icon"
							className={styles.search_icon}
						/>
					}
					suffix={
						<div className={styles.play}>
							<img
								src={sideMenuObj.search.playIcon}
								alt="play icon"
								className={styles.play_icon}
							/>
						</div>
					}
					className={styles.search_box}
				/>
			</div>
			<div className={styles.content}>
				<div>
					<MenuOptions />
					<div>
						<h3 className={styles.menu_title}>
							{sideMenuObj.verificationStatus.title}
						</h3>
						{sideMenuObj.verificationStatus.items.map(
							({ status, text }, index) => (
								<div key={index} className={styles.status_item}>
									<span
										className={`${styles.status} ${styles[status]}`}
									>
										{status}
									</span>
									<span
										className={`${styles.text} ${styles.status_title}`}
									>
										{text}
									</span>
								</div>
							)
						)}
					</div>
					<div>
						<h3 className={styles.menu_title}>
							{sideMenuObj.quickLinks.title}
						</h3>
						{sideMenuObj.quickLinks.items.map(
							({ icon, text }, index) => (
								<div key={index} className={styles.quick_link}>
									<img
										src={icon}
										alt=""
										className={styles.icon}
									/>
									<span className={styles.text}>{text}</span>
								</div>
							)
						)}
					</div>
				</div>
				<div>
					<div className={styles.team_members}>
						<h3 className={styles.menu_title}>
							{sideMenuObj.teamMembers.title}
						</h3>
						{sideMenuObj.teamMembers.items.map(
							({ profile, name, username }) => (
								<div key={username} className={styles.member}>
									<img
										src={profile}
										alt="member profile"
										className={styles.member_profile}
									/>
									<span
										className={`${styles.text} ${styles.member_name}`}
									>
										{name}
									</span>
									<span
										className={`${styles.text} ${styles.member_username}`}
									>
										@{username}
									</span>
								</div>
							)
						)}
					</div>
					<div className={styles.logout_container}>
						<img
							src={sideMenuObj.logout.icon}
							alt=""
							className={styles.icon}
						/>
						<span className={`${styles.text} ${styles.logout}`}>
							{sideMenuObj.logout.text}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DrawerContent;
