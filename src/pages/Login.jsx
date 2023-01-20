import Menu from '../components/Menu'
import { useContext } from 'react'
import noteContext from '../context/noteContext'
import { Redirect, useNavigate } from 'react-router-dom'
const Login = () => {
	const navigate = useNavigate()
	const { state } = useContext(noteContext)
	const { auth } = useContext(noteContext)
	const { logOut } = useContext(noteContext)
	console.log('auth:', auth)
	const goTo = () => {
		navigate('/')
	}
	const hadleLogin = () => {
		logOut()
	}
	return (
		<div>
			<h2>
				Login
				<br />
				user:{state.name}
				<br />
				username:
				{state.userName}
				<br />
				active:
				{auth ? 'Activo' : goTo()}
			</h2>
			<button onClick={hadleLogin}>LogOut</button>
			<Menu></Menu>
		</div>
	)
}

export default Login
