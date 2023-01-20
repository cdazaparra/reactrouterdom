import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
	const exact = true
	return (
		<nav>
			<ol>
				<li>
					<span>Menu con enlaces html (No recomendado)</span>
					<a href='/'>Home </a>
					<a href='/Acerca'>Acerca </a>
					<a href='/Contacto'>Contacto </a>
				</li>
				<li>
					<span>Menu con Link</span>
					<Link to='/'>Home</Link>
					<Link to='/Acerca'>Acerca</Link>
					<Link to='/Contacto'>Contacto</Link>
				</li>
				<li>
					<span>Menu con NavLink</span>
					<NavLink to='/' activeClassName='active'>
						Home
					</NavLink>
					<NavLink
						exact={`${exact}`}
						to='/Acerca'
						activeClassName='active'>
						Acerca
					</NavLink>
					<NavLink
						exact={`${exact}`}
						to='/Contacto'
						activeClassName='active'>
						Contacto
					</NavLink>
					<NavLink
						exact={`${exact}`}
						to='/Usuario'
						activeClassName='active'>
						Usuario
					</NavLink>
				</li>
				<li>
					<span>Parámetros</span>
					<Link to='/'>Home</Link>
					<Link to='/Usuario/DC'>DC</Link>
					<Link to='/Usuario/Andres'>Andres</Link>
				</li>
				<li>
					<span>Parámetros de consulta:</span>
					<Link to='/'>Home</Link>
					<Link to='/Productos'>Productos</Link>
				</li>
				<li>
					<span>Redirecciones:</span>
					<Link to='/About'>About</Link>
					<Link to='/Contact'>Contact</Link>
				</li>
				<li>
					<span>Rutas anidadas:</span>
					<Link to='/ReactThemes'>ReactThemes</Link>
				</li>
				<li>
					<span>Rutas privadas:</span>
					<Link to='/RutasPrivadas'>Rutas Privadas</Link>
				</li>
			</ol>
		</nav>
	)
}

export default Menu
