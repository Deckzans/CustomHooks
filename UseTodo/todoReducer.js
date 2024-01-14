export const todoReducer = (initialstate =[],action) => { 


    switch (action.type) {
        case '[TODO] Add Todo':
        return [ ...initialstate, action.payload];

        case '[TODO] Remove Todo':
        return initialstate.filter(todo => todo.id !== action.payload);
        
        case '[TODO] Toggle Todo':
        return initialstate.map(todo => { 

            if (todo.id === action.payload) { 
                return { 
                    ...todo, 
                    done: !todo.done,
                }
            }
            return todo;
        });
    
        default:
            return initialstate;
    }

}