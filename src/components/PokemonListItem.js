import React, {Component} from 'react'
import {addPokemon, removePokemon} from "../actions/action";
import {connect} from "react-redux";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FaPlus from 'react-icons/lib/fa/plus'

//Same component is used for showing all pokemon and My pokemon list
export class PokemonListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: []
        }
    }

    //takes name in small case as input and return first letter capital
    capitalizeFirstLetter = (name) => {
        return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
    };

    //dispatches add action if pokemon does not exist in MyPokemon
    addToList = (pokemon) => {
        let text = this.capitalizeFirstLetter(pokemon.name)
        if (this.checkLocalStoreForItem()) {
            //dispatch add action
            this.props.dispatch(addPokemon(pokemon))
            //show toast if pokemon is successfully added
            toast(text + " added successfully !");
        }
        else {
            //show toast if pokemon is already in the list
            toast(text + " is already yours !");
        }
    };

    removeFromList = (name) => {
        //dispatch delete event
        this.props.dispatch(removePokemon(name))
    };

    checkLocalStoreForItem = () => {
        //Checks localstorage to see if pokemon is already added
        const {pokemon} = this.props;
        const serializedState = localStorage.getItem('state');
        if(serializedState) {
            const getItem = JSON.parse(serializedState).item;
            if (getItem.some(item => item.pokemon.name
                    === pokemon.name)) {
                return false
            }
            else {
                return true
            }
        }else {
            return true
        }

    };

    render() {
        const {pokemon, showBtn} = this.props;
        //Add button only displayed if pokemon is not in the list
        //showBtn is passed as props from My Pokemon/ all pokemon to determine which button to display

        let hideAddBtn = this.checkLocalStoreForItem();

        let text = this.capitalizeFirstLetter(pokemon.name)
        return <div className="pokemon--species">
            <ul className="pokemon--species--container">
                <li className="pokemon--species--name">{text}</li>
                <li className="pokemon--species--sprite">
                    <div><img src={require(`../../public/pokemons/${pokemon.name}.jpg`)} title={pokemon.name}
                              alt={pokemon.name}/>
                        {(hideAddBtn && showBtn === "add") && <button className="action" onClick={(e) => {
                            e.preventDefault();
                            this.addToList(pokemon)
                        }}><FaPlus/></button>}
                        {showBtn === "remove" && <button className="action" onClick={(e) => {
                            e.preventDefault();
                            this.removeFromList(pokemon.name)
                        }}>X</button>}
                    </div>
                </li>
            </ul>
        </div>;
    }
}

export default connect()(PokemonListItem)