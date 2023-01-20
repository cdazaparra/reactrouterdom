import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Usuario from '../pages/Usuario'
// import Productos from '../pages/Productos'
import ReactThemes from '../pages/ReactThemes'
import RutasPrivadas from '../pages/RutasPrivadas'
import Login from '../pages/Login'
import DashBoard from '../pages/DashBoard'
import NoteState from '../context/NoteState'
let auth
auth = true

const ConceptosBasicos = () => {
	return (
		<div>
			<NoteState>
				<Router>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/Acerca' element={<Acerca />}></Route>
						<Route path='/About' element={<Acerca />}></Route>
						<Route path='/Contact' element={<Contacto />}></Route>
						{auth && (
							<Route
								auth={auth}
								path='/Login'
								element={<Login />}></Route>
						)}
						{auth && (
							<Route
								auth={auth}
								path='/DashBoard'
								element={<DashBoard />}></Route>
						)}
						{auth && (
							<Route
								auth={auth}
								path='/RutasPrivadas'
								element={<RutasPrivadas />}></Route>
						)}
						<Route
							path='/ReactThemes'
							element={<ReactThemes />}></Route>
						<Route
							path='/Usuario/:userName'
							element={<Usuario />}></Route>
						{/* <Route
						exact
						path='/Productos'
						element={<Productos />}></Route> */}
						<Route path='/Contacto' element={<Contacto />}></Route>
						<Route path='*' element={<Error />}></Route>
					</Routes>
				</Router>
			</NoteState>
		</div>
	)
}

export default ConceptosBasicos
