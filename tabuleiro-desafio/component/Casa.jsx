import styles from "../styles/Casa.module.css"

export default function Casa(props) {

	return (
		<span className={styles.casa} style={{backgroundColor: props.color == "branca" ? "#fff" : "#000"}}></span>
	);
}