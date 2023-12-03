import Pessoa from "../../components/Pessoa";
import React from "react";

export default function exemploTS() {
	return (
		<div>
			<Pessoa nome="João" idade={30} />
			<Pessoa nome="Maria" />
		</div>
	);
}