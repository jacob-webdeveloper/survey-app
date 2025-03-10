import { createContext, useReducer } from "react";

export const TreesContext = createContext()

export const treesReducer = (state, action) => {
    switch (action.type) {
        case "SET_TREES":
            return {
                trees: action.payload
            }
        case "CREATE_TREE":
            return {
                trees: [action.payload, ...state.trees]
            }
        case "DELETE_TREE":
            return {
                trees: state.trees.filter(t => t._id !== action.payload._id)
            }
        default: 
            return state
    }
}

export const TreeContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(treesReducer, {
    trees: []
   })

   
    return (
        <TreesContext.Provider value={{...state, dispatch}}>
            { children }
        </TreesContext.Provider>
    )
}