import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho {...props} nome="Pedro" />
            <Filho {...props} nome="Joana" />
            <Filho {...props} nome="Gabriel" />
            <Filho {...props} />
        </div>
    );
}
