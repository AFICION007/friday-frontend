import styles from "./styles.module.css";

const NumberCard = ({ number, title }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.number}>{number}</h2>
			<span className={styles.title}>{title}</span>
		</div>
	);
};

export default NumberCard;
