import React from 'react';
import renderer from 'react-test-renderer';
import Header from "../../components/Header";
import {MemoryRouter} from "react-router-dom";

it('should render header correctly', () => {
    const tree = renderer
        .create(<MemoryRouter>
            <Header />
        </MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});