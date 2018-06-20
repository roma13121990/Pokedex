import React from 'react'
import { connect } from 'react-redux'
import PokemonItem from "../components/PokemonListItem";
import {Link} from "react-router-dom";
const styles={"textAlign":"left","padding":"0 17px 5px 17px","color":"#827474"}

export const MyPokemonList = (props) => {
    console.log(props)
    return(
    <div className="list">
        <h4 style={styles}>My Pokemon</h4>
        <ul>
            {props.item.map((k,i) =>
            <Link to={`/PokemonDetails/${k.pokemon.name}`} key={i}>
                <PokemonItem
                    {...k} showBtn="remove"
                /></Link>
            )}
        </ul>
    </div>
)}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(
  mapStateToProps
)(MyPokemonList)


