import React from 'react'

import { Link } from 'react-router-dom'


export const Services = () => {
  return (
    <>
    <div className="hero h-96" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907_1280.jpg)` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">ORDESA SRL</h1>
    </div>
  </div>
</div>
    <div className='bg-sky-800 my-10 w-screen'>
      <h1 className='text-white text-4xl mx-auto text-left font-serif p-5'>Cobertura de Servicios</h1>
    </div>
    <div className='m-5'>
      <Link to={`/obras`}>
      <li className='text-sky-800  text-2xl hover:text-sky-400'> OBRAS</li>
      </Link>
      <Link to={`/instalaciones`}>
      <li className='text-sky-800 text-2xl  hover:text-sky-400'> INSTALACIONES DOMICILIARIAS</li>
      </Link>
      
      <Link to={`/red`}>
      <li className='text-sky-800 text-2xl hover:text-sky-400'> RED ELÉCTRICA</li>
      </Link>
      <Link to={`/seguridad`}>
      <li className='text-sky-800 text-2xl hover:text-sky-400'> SEGURIDAD ELECTRÓNICA</li>
      </Link>
      
    </div>
    </>
    )
}
