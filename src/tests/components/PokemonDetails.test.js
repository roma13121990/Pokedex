import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {asyncAssert} from "../test-utils/AsyncUtil";
import {MemoryRouter} from "react-router-dom";
import {PokemonDetails} from "../../components/PokemonDetails";
import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });


var mock = new MockAdapter(axios);
describe('<PokemonListItem />', () => {
    it('returns pokemon details on api call', done => {
        mock.onGet('https://pokeapi.co/api/v2/pokemon/pikachu').reply(200, {
            match:
                {params: {name: 'pikachu'}}

        });
        const data = {params: {name: 'pikachu'}};
        asyncAssert(done, () => {

            // const tree = renderer
            //     .create(<MemoryRouter>
            //         <PokemonDetails match={data}/>
            //     </MemoryRouter>)
            //     .toJSON();
            // expect(tree).toMatchSnapshot();`


        })

    })
});


