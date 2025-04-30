import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'


export interface Props{
    className?: string;
    style?: CSSProperties;
}
export const ProductButtons = ({className,style}:Props) => {

    const {increaseBy, counter, maxCount} = useContext(ProductContext)

    const isMaxReached = useCallback(//función que verifica si counter es igual a maxCount solo se volverá a crear si counter o maxCount cambian.
        ()=>!!maxCount && counter === maxCount,
        [counter, maxCount]
    )

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>

        <button 
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
            >-</button>

        <div className={styles.countLabel}>{counter}</div>
        <button 

        className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`}//Si se llega al máximo no se aplica el estilo
        onClick={() => increaseBy(1)}
            >+</button>

      </div>
    )
}