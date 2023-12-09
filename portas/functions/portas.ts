import PortaModel from "../model/PortaModel";

export function criarPortas(qtde: number, selecionada: number): PortaModel[] {

	return Array.from({ length: qtde}, (_, index) => {
		const numero = index + 1;
		const temPresente = numero === selecionada;
		return new PortaModel(numero, temPresente);
	});

}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {

		return portas.map(portaAtual => {
			const igualModificada = portaAtual.numero === portaModificada.numero;

			if (igualModificada) {
				return portaModificada;
			} else {
				return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
			}

		});

}