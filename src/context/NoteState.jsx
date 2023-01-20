import noteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {
	const [auth, setAuth] = useState(true)
	const state = {
		name: 'andres',
		userName: 'DC',
	}
	const logOut = () => {
		setAuth(!auth)
		console.log(auth)
	}
	return (
		<noteContext.Provider value={{ state, logOut, auth }}>
			{props.children}
		</noteContext.Provider>
	)
}

export default NoteState
