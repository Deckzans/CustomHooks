import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setstate] = useState({
        data: null,
        isLoading:true,
        hasError : null,
    })

    const getFetch = async() => { 

        setstate({ 
            ...state,
            isLoading:true,
        });

        const respo = await fetch(url);
        const data = await respo.json();

        setstate({ 
            data,
            isLoading:false,
            hasError:null,
        })

        // console.log(data)
    }
       
    useEffect(() => {
      getFetch();
    }, [url])
    
    
    return { 
        data: state.data,
        isLoading:state.isLoading ,
        hasError: state.hasError,
    }; 
}
