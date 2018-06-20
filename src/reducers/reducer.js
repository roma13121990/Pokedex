const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
        let a = [
        ...state,
        {
            pokemon: action.text
        }
      ];
        console.log(a)
          return a
     case 'DELETE':
        return state.filter(item => item.pokemon.name !== action.text)
    default:
      return state
  }
}

export default reducer
