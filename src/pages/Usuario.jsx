import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../components/Menu'
const Usuario = () => {
	let { userName } = useParams()
	return (
		<div>
			<Menu></Menu>
			<h2>Usuario</h2>
			<p>
				Nombre del usuario <b>{userName}</b>
			</p>
		</div>
	)
}

export default Usuario
