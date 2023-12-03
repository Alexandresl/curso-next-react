export default function NumeroDisplay (props) {
	return (
		<div style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "80px",
			width: "80px",
			borderRadius: "40px",
			backgroundColor: "#222",
			color: "#fff",
			fontSize: "2rem",
			margin: "20px"
		}}>
			{props.numero}
		</div>
	)
}