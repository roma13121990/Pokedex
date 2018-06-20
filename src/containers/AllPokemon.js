import React, {Component} from 'react'
import {connect} from 'react-redux'
import WebApi from "../utils/WebApi";
import PokemonListItem from "../components/PokemonListItem";
import {Link} from "react-router-dom";
import Loader from 'react-loader';
import {ToastContainer} from "react-toastify";

export class AllPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: [],
            loading: false,
            allSpecies: [],
            myPokemon: []
        };
    }

    componentDidMount() {
        //fetch a list of all pokemn
        WebApi.getListOfPokemon().then(res => res.json())
            .then(response => {
                this.setState({
                    species: response.results,
                    loading: true,
                    allSpecies: response.results
                });
            });
    }
    //Search feature which finds name in the state and update the state based on search patter
    filterList = (event) => {
        if (event.target.value === "") this.setState({species: this.state.allSpecies})
        else {
            let updatedList = this.state.species;
            updatedList = updatedList.filter(function (item) {

                return item.name.toLowerCase().startsWith(
                    event.target.value.toLowerCase());
            });
            this.setState({species: updatedList});
        }
    };

    render() {
        const {loading, species} = this.state;

        return (
            <Loader loaded={loading}>
            <div className="pokemon--species--search">
            <p><input type="text" className="form-control form-control-lg" placeholder="Search"
                      onChange={this.filterList}/>
            </p>
                <ToastContainer />
            <div className="pokemon--species--list">{species.map((pokemon, index) =>
                <Link to={`/PokemonDetails/${pokemon.name}`} key={index}>
                    {<PokemonListItem key={pokemon.name} id={index + 1} pokemon={pokemon} showBtn="add"/>}
                </Link>
            )}</div>
            </div></Loader>
        )
    }
}

export default connect()(AllPokemon)