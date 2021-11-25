import React,{createContext, useReducer} from "react";

const DispatchContext = createContext();
const StateContext = createContext();

const AppProvider = ({children})=>{
    
    const initialState = {
        cartItem : []
    }

    const reducer = (state,action)=>{
       switch (action.type) {
           case "Add_To_Cart":
                   return {...state,cartItem : [...state.cartItem,action.payload]}
           default:
               return state;
       }
    }

   let [state,diapatch] = useReducer(reducer,initialState);
    return(
        <DispatchContext.Provider value={diapatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}
export {AppProvider,DispatchContext,StateContext};
