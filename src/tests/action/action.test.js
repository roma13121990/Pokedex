import * as actions from '../../actions/action'

describe('<actions />', () => {
    it('should call ADD action to add a pokemon', () => {
        const text = 'Pikachoo';
        const expectedAction = {
            type: 'ADD',
            text
        }
        expect(actions.addPokemon(text)).toEqual(expectedAction)
    })

    it('should create DELETE action to delete a pokemon', () => {
        const text = 'Pikachoo';
        const expectedAction = {
            type: 'DELETE',
            text
        }
        expect(actions.removePokemon(text)).toEqual(expectedAction)
    })
})