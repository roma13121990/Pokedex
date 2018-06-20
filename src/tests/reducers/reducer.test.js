import reducer from '../../reducers/reducer'

describe('pokedex reducer', () => {
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle adding a pokemon to My PokemonListItem list', () => {
    expect(
      reducer([], {
        type: 'ADD',
        text: 'Pikachoo'
      })
    ).toEqual([{"pokemon": "Pikachoo"}])
  })

    it('should handle deleting a pokemon from My PokemonListItem list', () => {
        expect(
            reducer([], {
                type: 'DELETE',
                text: 'Pikachoo'
            })
        ).toEqual([])
    })
})
