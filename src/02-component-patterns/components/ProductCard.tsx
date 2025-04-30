
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { onChangeArg, Product, ProductContextProps } from '../interfaces/interfaces';




export const ProductContext = createContext({} as  ProductContextProps);//Creación de un contexto con las propiedades establecidades en ProductContextProps
const {Provider} = ProductContext


export interface Props {
    product: Product;
    children?:ReactElement | ReactElement[]; //Establecer que el componente ProductCard pueda tener componenetes hijo 
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArg) => void;
    value?: number
}

//Definimos un componente funcional ProductCard que recibe product como una prop.
//Obligamos al componente que simepre le tiene que enviar un producto 
export const ProductCard = ({children, product, className, style, value, onChange}:Props) => { 

 const {counter, increaseBy} = useProduct({ onChange, product, value});//Hook con la lógica de useState para incrementar y decrementar


  return (
   
        <Provider value={{ // Porveedor para los componenegtes hijos de ProductCard
            counter,
            increaseBy,
            product

        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            
                {/* <ProductImage img={product.img}/>

                <ProductTitle title={product.title}/>

                <ProductButtons counter={counter} increaseBy={increaseBy}/> */}

        
        

        
            </div>
        </Provider>
  )
}

