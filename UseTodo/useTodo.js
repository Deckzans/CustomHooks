import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = []; 

const init = () => { 
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    
    const handleNewTodo = (todo) => { 
        const action = { 
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) => { 
        // console.log(id)
        dispatchTodo({ 
            type: '[TODO] Remove Todo',
            payload: id, 
        })
    }
    const onToggleTodo = (id) => { 
        console.log(id)
        dispatchTodo({ 
            type: '[TODO] Toggle Todo',
            payload: id, 
        })
    }


    return{ 
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        onToggleTodo,
    }

}
