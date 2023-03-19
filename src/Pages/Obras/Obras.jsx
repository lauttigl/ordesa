import React from 'react'

export const Obras = () => {
  return (
    <div>
        <div className="hero h-96" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/08/12/06/06/fiber-optics-2633604_1280.jpg)` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">ORDESA SRL</h1>
    </div>
  </div>
</div>
  <div>
    <h1 className='bg-sky-800 my-10 font-serif text-4xl text-white p-5'>Obras</h1>
  </div>
<div className="card card-side bg-base-100 shadow-xl sm:w-78 h-96 m-5 p-2">
  <figure><img className="border-radius " src="https://img.freepik.com/fotos-premium/fusion-cable-fibra-optica-empalme-senal-internet-conexion-cables-usando-equipo-maquina-soldadura-linea-optica-ingeniero-isp-soldadura-fibra-optica_28914-3872.jpg?w=1380" alt="red" /></figure>
  <div className="card-body">
    <li className='text-sky-800 text-3xl'>Trabajos de mantenimiento en redes HFC.</li>
    <li className='text-sky-800 text-3xl'>Colocación de electrónica.</li>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl sm:h-96 h-50 m-5 p-2">
  <figure><img className="border-radius " src="https://cdn.pixabay.com/photo/2018/12/09/05/07/network-3864383_1280.jpg" alt="red" /></figure>
  <div className="card-body">
    <li className='text-sky-800 text-3xl'>Tendido de Fibra Óptica.</li>
  </div>
</div>
</div>
  )
}
