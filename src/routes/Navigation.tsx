import { BrowserRouter, NavLink } from "react-router-dom";
import {Routes, Route, Link, Navigate} from 'react-router-dom';
import logo from '../logo.svg'
import { routes } from "./routes";
import { Suspense } from "react";
import { spawn } from "child_process";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";



export const Navigation = () => {
  return (
    // Suspense e utiliza para manejar la carga diferida de componentes. Proporciona una manera de 
    // mostrar un contenido de reserva (fallback) mientras se carga un componente que se ha importado de 
    // manera diferida con React.lazy
    <Suspense fallback={<span>Loading...</span>}>
        {/* //Envuelve toda la aplicación y proporciona el contexto de enrutamiento */}
        <BrowserRouter> 
            <div className="main-layout">
                <nav>
                    <img src={logo} alt=""></img>
                    <ul>
                        {
                            /* Enlaces de navegación que cambian de estilo cuando están activos */
                            routes.map(route => (
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                                </li>
                            ))
                        }
                        
                    </ul>
                </nav>
            
                {/* Definimos las rutas de la aplicación */}
                
                <Routes>
                    
                {
                    routes.map(route => (
                        <Route key={route.to} path={route.path} element={<route.Component/>}/>
                    ))
                }
                
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}
