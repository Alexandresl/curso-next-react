import PortaModel from "../model/PortaModel";

export function criarPortas(qtde: number, selecionada: number): PortaModel[] {

	return Array.from({ length: qtde}, (_, index) => {
		const numero = index + 1;
		const temPresente = numero === selecionada;
		return new PortaModel(numero, temPresente);
	});

}