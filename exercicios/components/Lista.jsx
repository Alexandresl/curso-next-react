export default function Lista(props) {
    return (
        <>
            <h1>Lista de Algo</h1>
            <ul style={{
                listStyle: "none",
                pedding: "0"
            }}>{props.children}</ul>
        </>
    );
}
