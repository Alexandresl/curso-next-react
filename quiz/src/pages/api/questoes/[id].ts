import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";
import QuestaoModel from "../../../../model/Questao";


export default function handler (req: NextApiRequest, res: NextApiResponse<QuestaoModel>) {
	res.status(200).json(questoes[0]);
}