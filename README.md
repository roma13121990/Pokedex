Pokedex App - A Pokemon encyclopedia

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Open (http://localhost:3000) to view it in the browser.

## More about the solution

**Main components**
* Header
* All pokemon list`
* My Pokemon list
* Details
     
`All pokemon list` contains logic for rendering Pokemon list along with search logic and adding pokemon to My Pokemon list.

`My Pokemon list` contains logic to show low level pokemon details.
 
`Details` contains logic for showing high level detail of each pokemon


#Algorithm details

Application uses reducers for firing action on adding and deleting pokemon from the list.
Components are connected to store so that action fired on same state, state is returned without mutation.
There are four routes namely header, All pokemon,My Pokemon, Pokemon details handled in index file.
All api calls are handled in webApi file

## Tests
### `npm test`
 
 
## Other Highlights

Loader is added across application for enhanced user experience
Use of Redux for storing data on refresh
Added toast message on adding/deleting pokemon.   
snapshot testing  
       
## Things which can be considered     

User login
Shuffle can be introduced as a part of My Pokemon
App can be enhanced so that user can play with the pokemon, manage leagues and so on.
    
### Hope the design is self explanatory :-)


