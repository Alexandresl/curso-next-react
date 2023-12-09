import Porta from '../../components/Porta'
import { criarPortas } from '../../functions/portas';
import PortaModel from '../../model/PortaModel'
import { useEffect, useState } from 'react'

export default function Home() {

  const [p1, setP1] = useState(new PortaModel(1));
  const [p2, setP2] = useState(new PortaModel(2));
  const [p3, setP3] = useState(new PortaModel(3));


  useEffect(() => execCriarPortas, [])

  function execCriarPortas () {
    console.log(criarPortas(4, 2));
    
  }

  return (
    <div style={{display: "flex"}} onLoad={execCriarPortas}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
      <Porta value={p2} onChange={novaPorta => setP2(novaPorta)}/>
      <Porta value={p3} onChange={novaPorta => setP3(novaPorta)}/>
    </div>
  )
}
