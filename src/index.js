import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import AllPokemon from './containers/AllPokemon'
import rootReducer from './reducers/combineReducer'
import {Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import MyPokemonList from "./containers/MyPokemonList";
import {loadState, saveState} from "./utils/localStorage"
import {PokemonDetails} from "./components/PokemonDetails";

const persistedState = loadState(); //load data from localstorage on initial load and refresh

const store = createStore(rootReducer, persistedState) //use combine reducer to generate store

//fire savestate if action is triggered
store.subscribe(() => {
    saveState(store.getState())
})

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route component={Header}/>
                <Route exact path='/' component={AllPokemon}/>
                <Route path='/MyPokemonList' component={MyPokemonList}/>
                <Route exact path='/PokemonDetails/:name' component={PokemonDetails}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
