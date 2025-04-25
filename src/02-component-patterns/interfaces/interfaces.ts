import { JSX, ReactElement } from "react";


export interface ProductCardProps {
    product: Product
    children?:ReactElement | ReactElement[] //Establecer que el componente ProductCard pueda tener componenetes hijo 

}


export interface Product { //Describir comon van a ser los productos
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps{//Propiedades para el provider del contexto 
    counter: number;
    increaseBy: (value: number) => void;
    product: Product
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}