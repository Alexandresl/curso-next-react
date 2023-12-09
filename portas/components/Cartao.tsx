import styles from "../src/styles/cartao.module.css"

interface CartaoPops {
	bgcolor?: string
	children?: any
}

export default function cartao (props: CartaoPops) {
	return (
		<div className={styles.cartao} style={{ backgroundColor: props.bgcolor ?? "#fff"}}>
			{props.children}
		</div>
	);
}