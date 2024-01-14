import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {
  
    const [counter, setCounter] = useState(initialValue)

    const increment = (value =1 ) => { 
        setCounter(counter+value);
    } 

    
    const Decrement = (value =1) => { 
        if(counter === 0 ) return;
        setCounter(counter-value);
    
    }
    const Reset = () => { 
        setCounter(initialValue);
    }

    return { 
        counter,
        increment,
        Decrement,
        Reset,
    }

}
