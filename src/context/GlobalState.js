import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


//initialState tanimlanir ...(1)
const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Car Sold", incomeAmount: 15000 },
    { id: 2, incomeText: "Salary", incomeAmount: 5000 },
    { id: 3, incomeText: "Bonus", incomeAmount: 13000 },
  ],

  expenseTransactions: [
    { id: 1, expenseText: "Rent", expenseAmount: 1000 },
    { id: 2, expenseText: "Bank", expenseAmount: 2000 },
    { id: 3, expenseText: "Clothes", expenseAmount: 5}
  ],
};

//olusturulan initialState createContext ile GlobalContext adi altinda export edilir...(2)
export const GlobalContext = createContext(initialState);

//Kapsayici eleman olan provider olsuturulur...(3)
export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value ={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions:state.expenseTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


// GlobalContextProvider App.js en ust kapsayici eleman olarak eklendikten 
// sonra yapilmasi gereken bir is daha var AppReducer.js tanimlamak