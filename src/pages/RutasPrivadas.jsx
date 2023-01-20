import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const RutasPrivadas = (props) => {
	const auth = props.auth
	console.log('AUTH Rutas Privadas: ', auth)
	return (
		<div>
			<Menu></Menu>
			<h2>Rutas Privadas</h2>
			<Link to='/Login' auth={auth}>
				Login
			</Link>
			<Link to='/DashBoard'>DashBoard</Link>
		</div>
	)
}

export default RutasPrivadas
