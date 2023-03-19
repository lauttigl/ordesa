import React from 'react'
import {Link} from 'react-router-dom'


export const NavBar = () => {

    return (
        <div>
        <div>
        <nav className='bg-sky-800 h-auto'>
            <div className='p-4 text-center'>
            <h1 className='text-4xl text-white font-serif'>ORDESA</h1>
            </div>
            <div>
                <ul className='p-4 flex place-content-center '>
                    <Link to={`/`}>
                    <li className='text-white text-lg p-2 text-center hover:text-sky-400'>| Home |   </li>
                    </Link>
                    <Link to={`/services`}>
                    <li className='text-white text-lg p-2 text-center hover:text-sky-400'>Nuestros servicios |</li>
                    </Link>
                    <Link to={`/contacto`}>
                    <li className='text-white text-lg p-2 text-center hover:text-sky-400'>Contacto |</li>
                    </Link>
                    
                   
                   
                    
                </ul>
            </div>
        </nav>
        </div>
    </div>
    )
    }
