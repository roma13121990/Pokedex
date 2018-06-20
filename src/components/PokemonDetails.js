import React,{ Component } from 'react'
import '../styles/styles.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WebApi from "../utils/WebApi";
import Loader from 'react-loader'

export class PokemonDetails extends Component{
    constructor(props){
        super(props);

        this.state= {
            loading: false,
            data: {
                stats: [],
                moves: []
            }
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data
        })
    }

   componentDidMount() {
       WebApi.getEachPokemon(this.props.match.params.name).then(res => res.json())
           .then(response => {
               this.setState({
                   loading: true,
                   data: response
               })
           });
    }


    render() {
        const { data,loading } = this.state;
        return (<Loader loaded={loading}>
            <div className="tabs">
                <Tabs>
                    <TabList>
                        <Tab>Info</Tab>
                        <Tab>Stats</Tab>
                        <Tab>Moves</Tab>
                    </TabList>

                    <TabPanel>
                        <ul className="tab-content">
                            <li><label>Name</label><span>{data.name}</span></li>
                            <li><label>Height</label><span>{data.height}</span></li>
                            <li><label>Weight</label><span>{data.weight}</span></li>
                        </ul>

                    </TabPanel>
                    <TabPanel>
                        <ul className="tab-content">{data.stats.map((a, i) =>
                            <li key={i}><label>{a.stat.name}</label><span>{a.base_stat}</span></li>
                        )}

                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul className="tab-content">{data.moves.map((a, i) =>
                            <li key={i}><label>{a.move.name}</label></li>
                        )}

                        </ul>
                    </TabPanel>

                </Tabs>
            </div></Loader>


        )

    }
}