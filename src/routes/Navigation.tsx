import { BrowserRouter, NavLink } from "react-router-dom";
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import logo from '../logo.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";


export const Navigation = () => {
  return (
    //Envuelve toda la aplicación y proporciona el contexto de enrutamiento
     <BrowserRouter> 
        <div className="main-layout">
            <nav>
                <img src={logo} alt=""></img>
                <ul>
                    <li>
                         {/* Enlaces de navegación que cambian de estilo cuando están activos */}
                        <NavLink to="/lazy1" className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                    </li>

                    <li>
                        <NavLink to="/lazy2" className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                    </li>

                    <li>
                        <NavLink to="/lazy3" className={({isActive}) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                    </li>
                </ul>
            </nav>
        
            {/* Definimos las rutas de la aplicación */}
            <Routes>
                <Route path="lazy1" element={<LazyPage1/>}/>
                <Route path="lazy2" element={<LazyPage2/>}/>  
                <Route path="lazy3" element={<LazyPage3/>}/>  
            
                <Route path="/*" element={<Navigate to="/lazy1" replace />}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
