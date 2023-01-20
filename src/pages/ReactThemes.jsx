import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const ReactThemes = () => {
	return (
		<div>
			<Menu />
			<h2>Temas de React</h2>
			<ul>
				<li>
					<Link to='/Contacto'>JSX</Link>
				</li>
				<li>
					<Link to='/ReactThemes/Props'>Props</Link>
				</li>
				<li>
					<Link to='/ReactThemes/State'>State</Link>
				</li>
				<li>
					<Link to='/ReactThemes/Components'>Components</Link>
				</li>
			</ul>
		</div>
	)
}

export default ReactThemes
