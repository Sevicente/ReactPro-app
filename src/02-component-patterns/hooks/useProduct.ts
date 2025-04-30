import { useEffect, useState } from "react";
import { onChangeArg, Product } from "../interfaces/interfaces";
import { count } from "console";

interface useProductArgs {
   product: Product;
   onChange?: ( args: onChangeArg ) => void;
   value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

   const [ counter, setCounter ] = useState( value );

   const increaseBy = ( value: number ) => {

      console.log('Valor', value)
  
       const newValue = Math.max( counter + value, 0 )
       setCounter( newValue );
       

       onChange && onChange({ count: newValue, product });
   }

   useEffect(() => {
       setCounter( value );
   }, [ value ])

   return {
       counter,
       increaseBy
   }

}

