export default function Filho(props) {
    return(
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <h3>{props.nome}</h3>
            <h2>{props.familia}</h2>
        </div>
    );
}