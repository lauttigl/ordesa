import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2020/04/13/23/01/tower-5040280_960_720.jpg)` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">ORDESA SRL</h1>
      <p className="mb-5 tex-lg">Somos una empresa en crecimiento que integra tecnología, gestión y logística, al servicio de su organización y necesidades.
      Mediante la detección de problemas, implementando soluciones y mejoras de calidad optimizando tiempo y costos</p>
      <Link to={`/services`}>
      <button className='btn bg-sky-800 text-sm hover:bg-sky-400'>Querés saber más? Haz click aquí.</button>
      </Link>
    </div>
  </div>
</div>
  )
}
