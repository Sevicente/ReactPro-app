import { useEffect, useRef, useState } from "react";
import { onChangeArg, Product, InitialValues } from '../interfaces/interfaces';
import { count } from "console";

interface useProductArgs {
   product: Product;
   onChange?: ( args: onChangeArg ) => void;
   value?: number;
   initialValues?: InitialValues,
}


export const useProduct = ({ onChange, product, value = 0, initialValues}: useProductArgs) => {

   const [ counter, setCounter ] = useState<number>( initialValues?.count || value );//Si viene un initialvalue lo utiliza si no usa el value

   const isMounted = useRef(false)

   const increaseBy = ( value: number ) => {

       let newValue = Math.max( counter + value, 0 )

       if(initialValues?.maxCount){ //Si existe un initialValues.maxCount
            newValue = Math.min(newValue, initialValues.maxCount)//Coger valor más pequeño entre newValue o initialValue.maxCount
        }
       setCounter( newValue );
       
       onChange && onChange({ count: newValue, product });
   }

   useEffect(() => {
        if(!isMounted.current) return;

        setCounter( value );
   }, [ value ])

   const reset = () => {
    setCounter(initialValues?.count || value)
   }
//    useEffect(() => {
//     isMounted.current = true;
    
//     setCounter( value );
//     }, [])

   return {
       counter,
       isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
       maxCount: initialValues?.maxCount,
       
       reset,
       increaseBy,
   }

}

