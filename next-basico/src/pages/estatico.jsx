import { useEffect, useState } from "react";
export function getStaticProps() {
	return {
		props: {
			numero: Math.random()
		}
	}



}

export default function estatico(props) {
  
	// const [aleatorio, setAleatorio] = useState(0);
	
	// useEffect(() => {setAleatorio(Math.random())}, []);

	// function gerarAleatorio() {
	// 	return aleatorio;
	// }

  return (
    <div>
      <span>Aleatório: {props.numero}</span>
    </div>
  );
}
