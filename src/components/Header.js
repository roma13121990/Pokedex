import React, {Component} from 'react';
import {Link} from "react-router-dom";

const styles = {

    'background': '#ffffff',
    'padding': 16,
    'fontSize': '1.5em',
    'color': '#515673',
    'textAlign': 'left',
    'position': 'fixed',
    'left':0,
    'right':0,
    'top': 0,
    'zIndex': 99

};
const button = {
    "float": "right",
    "textDecoration": "none",
    "fontSize": "1rem",
    "color": "#ffffff",
    "background": "#f66",
    "padding": "5px 10px",
    "borderRadius": "19px"
}
export default class Header extends Component {
    render() {
        return (<div style={styles}>Pokedex
                <Link style={button} to='/MyPokemonList'>My Pokemon</Link>
            </div>

        )
    }
}