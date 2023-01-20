import { useState } from 'react'

const useData = () => {
	const [auth, setAuth] = useState(false)
	return { auth, setAuth }
}

export default useData
