import React from 'react';
import {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
import {MyPokemonList} from "../../containers/MyPokemonList";
import { MemoryRouter} from "react-router-dom";
import configureMockStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

Enzyme.configure({adapter: new Adapter()});
describe('<MyPokemonList />', () => {

    const props = {'item' : [
            {'pokemon':{'name':"Pikachoo"}},
            {'pokemon':{'name':"Abc"}},
            {'pokemon':{'name':"xyz"}}
        ]}

    it('should save snapshot for data render of fetch data from the store', () => {
        const wrapper = shallow(<Provider store={store}><MemoryRouter><MyPokemonList {...props} /></MemoryRouter></Provider>)

        expect(wrapper).toMatchSnapshot();

    })
})