import React, { createContext, useReducer, useContext } from "react";
import articlesReducer from '../reducers/articlesReducer';
import currentArticle from "../reducers/articleReducer";
import loadingReducer from '../reducers/loadingReducer'
import popularReducer from "../reducers/popularReducer";
import articleReducer from "../reducers/articleReducer";
import categoryReducer from "../reducers/currentCategoryReducer";

/** This functions combines multiple reducers (passed as an object with reducers' name as 
 * keys and their function as values).
 * 1) First it creates a new object to store key-value pairs.
 * 2) It iterates over the object's keys and checks wheather the corresponding value is a function 
 * or not (in this case it will throw an error)
 * 3) From the result, it creates an array of strings that represent the keys of the functions
 * 4) It returns a function that takes the usual state and action as params:
 * a) It creates a hasChanged boolean variable with false
 * b) It starts iterating through the keys array in order to reference the values (functions) from each reducer.
 * c) It stores each function in 'reducer' const by referencing it from the finalReducers object and the iterated key 
 * that actually represents the field's name
 * d) Since all reducers are supposed to return a state, it checks wheather the state has changed or not 
 * by comparing the previuos state with the returning value of each call to the reducer (which was just stored).
 * @param reducers This is an object that contains the name of the reducers as keys and the functions as values
 * @returns a state
 */
const combineReducers = (reducers: any) => {
    const finalReducers: any = {};

    Object.keys(reducers).forEach((key: string) => {
        if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
        else throw new Error(`${key} reducer must be a function`);
    });
    const finalReducerKeys = Object.keys(finalReducers);


    return (state: any, action: any) => {

        let hasChanged = false;
        const nextState: any = {};
        finalReducerKeys.forEach(key => {
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];

            const nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        });

        hasChanged =
            hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
};


/**
 * Stores the context of the app. This will serve as a global model state.
 */
const AppContext = createContext<any>(null);


/**
 * 
 * @param reducer Your reducer
 * @param initialState Your state
 * @returns Returns an object with reducer and initial state as fields and their corresponding values as values
 */
const createStore = (reducer: any, initialState: any) => ({ reducer, initialState });


/** Used as a shorthand for calling the useContext hook and the context object
 * 
 * @returns the global context
 */
const useGlobalContext = () => useContext(AppContext);


/** Initializes the store, combines the reducers and returns an object with a reducer and state
 *  This will be used in the GlobalContext wrapper in components to give access to the global context object
 * @returns 
 */
const initContext = () => {
    const initialState = {
        articles: [],
        popular: [],
        isLoading: true,
        article: {},
        category: null
    };

    const reducer = combineReducers({ articles: articlesReducer, popular: popularReducer, isLoading: loadingReducer, article: articleReducer, category: categoryReducer });

    const load = createStore(reducer, { ...initialState });
    return load;
};


/**
 * 
 * @param props Any props since it's a wrapper to give access to global context
 * @returns the passed component wrapped in the global state with access to state and dispatch
 */
const GlobalContext = (props: any) => {
    if (props === undefined) throw new Error(
        "Props Undefined. You probably mixed up betweenn default/named import"
    );

    else {
        const { load, ...rest } = props;
        const [state, dispatch] = useReducer(load.reducer, load.initialState);
        return (<AppContext.Provider value={{ state, dispatch }}  {...rest} />);
    }

};

export { initContext, useGlobalContext, GlobalContext as default };