import React from 'react';
import { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import {PokemonListItem} from "../../components/PokemonListItem";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

const props = {'pokemon':{'name':"pikachu"}}

Enzyme.configure({ adapter: new Adapter() });
describe('<PokemonListItem />', () => {
    beforeEach(() => {
        //mock localStorage

        global.localStorage = {
            getItem: function () {
                return JSON.stringify({'item' : [
                        {'pokemon':{'name':"Pikachoo"}},
                        {'pokemon':{'name':"Abc"}},
                        {'pokemon':{'name':"xyz"}}
                    ]})
            }
        };
    });

    it("snapshot from pokemon list with data from localstore", () => {
        const tree = renderer
            .create(<MemoryRouter>
                <PokemonListItem {...props}/>
            </MemoryRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should return capitalized first letter of a name', () => {

        const wrapper = shallow(<PokemonListItem {...props}/>)
        expect(wrapper.instance().capitalizeFirstLetter("pokemon")).toEqual('Pokemon');

    })

})