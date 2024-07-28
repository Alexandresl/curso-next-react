import styles from '../styles/Casa.module.css'

export default function Casa(props) {
    return (
        <div className={styles.casa} style={{backgroundColor: props.color ? "#000" : "#fff"}}>

        </div>
    );
}