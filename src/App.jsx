import React from 'react'
import Plano from './Plano';
import "./App.css";

function App() {
	const planos = [
		{
			title: "start",
			valor: "Free",
			users: "1 user",
			qntd: "1 projeto",
		},
		{
			title: "Basic",
			valor: "$19.99",
			users: "5 users",
			qntd: "20 projetos",
		},
		{
			title: "expert",
			valor: "$129.99",
			users: " ilimitado user",
			qntd: " ilimitados projetos",
		},
	];

	return (
		<div className='principal'>
         
			<Plano title={planos[0].title} valor={planos[0].valor} users={planos[0].users} qntd={planos[0].qntd}/>
			<Plano title={planos[1].title}valor={planos[1].valor} users={planos[1].users} qntd={planos[1].qntd}/>
			<Plano title={planos[2].title}valor={planos[2].valor} users={planos[2].users} qntd={planos[2npm].qntd}/>
		</div>
	);
}

export default App;
