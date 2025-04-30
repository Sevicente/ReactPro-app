import { JSX, ReactElement } from "react";
import { Props as ProdCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductImageProps } from "../components/ProductImage";


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
    product: Product;
    maxCount?: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProdCardProps ):JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props:ProductImageProps) => JSX.Element,
    Buttons: (Props:ProductButtonsProps) => JSX.Element
}

export interface onChangeArg{
    product: Product, 
    count: number
}

export interface ProductInCart extends Product{//extender la interfaz de Product y añadirle un contador
    count: number
}

export interface InitialValues{
    count?: number;
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy:(value:number) => void;
    reset: () => void;
}
