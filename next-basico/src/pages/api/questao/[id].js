export default function questao(req, res) {
  if (req.method === "GET") {
		get(req, res);
  } else {
    res.status(405).send();
  }
}


function get(req, res) {
  
		const id = req.query.id;
    res.status(200).json({
			id: id,
      enunciado: "Qual é sua cor preferida?",
      respostas: ["Branca", "Vermelha", "Amarela", "verde"],
    });
  
}