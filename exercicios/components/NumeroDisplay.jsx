export default function NumeroDisplay(props) {
    return (
        <div style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            backgroundColor: "#222",
            color: "#105c14",
            fontSize: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>{props.numero}</div>
    )
}