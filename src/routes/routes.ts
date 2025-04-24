
import { LazyExoticComponent, JSX } from 'react';
import { lazy } from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent, //Para inidcar que los componentes se pueden cargar de dos maneras (con lazyLoad y normal)
    name: string;
    children?: Route[]
}

// const LazyPage1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );
 

export const routes: Route[] = [
    {
        path: '/lazyload',
        component: lazy( () => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout') ),
        name: 'LazyLoading Nested'
    },

    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy loading'
    }
]
   