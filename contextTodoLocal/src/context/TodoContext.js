import { useContext, createContext } from 'react';

// we created a context which gonna hold our value and we can get thevalue to our to do list
export const TodoContext = createContext ({
    todo: [
        {
            id:1,
            todo: "Todo Msg",
            completed:false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
}) 


export const useTodo = () => {     // we created this to access the value of TodoContext
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider