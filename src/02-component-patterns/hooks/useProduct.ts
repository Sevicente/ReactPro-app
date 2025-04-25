import { useState } from "react";


export const useProduct = () => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter( prev => Math.max(prev + value, 0))//Coger el valor mas grande si el 0 o el valor previo mas value
     }

     return{
        counter,
        increaseBy

     }
}


