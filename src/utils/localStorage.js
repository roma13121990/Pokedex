//get data from localstorage on reload

export const loadState = () => {
    try{

        const serializedState = localStorage.getItem('state')
        if(serializedState === null)
            return undefined;
        return JSON.parse(serializedState)
    }
    catch(err){
        console.log(err)
        return undefined
    }
};

//add data to localstorage on adding a new pokemon/deletion of pokemon

export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)

    }
    catch(err){

    }
}