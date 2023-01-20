import React from 'react'
import Menu from '../components/Menu'
import { useNavigate, useLocation } from 'react-router-dom'

const Productos = () => {
	const LIMIT = 20
	let { search } = useLocation()
	let query = new URLSearchParams(search)
	let start = parseInt(query.get('inicio')) || 1
	let end = parseInt(query.get('fin')) || LIMIT
	let history = useNavigate()
	console.log(history)
	const handleNext = () => {
		history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` })
	}
	const handlePrev = () => {
		history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` })
	}
	return (
		<div>
			<Menu></Menu>
			<h2>Productos</h2>
			<p>
				Mostrando productos del <b>{start}</b> al <b>{end}</b>
			</p>
			{start > LIMIT && <button onClick={handlePrev}>Atras</button>}
			<button onClick={handleNext}>Adelante</button>
		</div>
	)
}

export default Productos
