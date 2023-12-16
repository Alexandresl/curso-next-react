import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";
import { embaralharArray } from "../../../../functions/embaralhaArray";

export default function Questionario (req: NextApiRequest, res: NextApiResponse<Object>) {
	
	const ids = questoes.map(questao => questao.id);

	res.status(200).json(embaralharArray(ids));

}