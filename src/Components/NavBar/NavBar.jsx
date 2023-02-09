import React from 'react'
import {Link} from 'react-router-dom'


export const NavBar = () => {

    return (
        <div>
        <div>
        <nav className='bg-black h-auto'>
            <div className='p-4 text-center'>
            <h1 className='text-4xl text-white'>Ordesa</h1>
            </div>
            <div>
                <ul className='p-4 flex place-content-center '>
                    <Link to={`/`}>
                    <li className='text-white text-lg p-2 text-center hover:text-orange-500'>| Home |   </li>
                    </Link>
                    
                    <li className='text-white text-lg p-2 text-center hover:text-orange-500'>Sobre nosotros |</li>
                   
                    <Link to={`/services`}>
                    <li className='text-white text-lg p-2 text-center hover:text-orange-500'>Nuestros servicios |</li>
                    </Link>
                    
                </ul>
            </div>
        </nav>
        </div>
    </div>
    )
    }
