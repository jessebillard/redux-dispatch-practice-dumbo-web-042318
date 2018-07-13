export let state;

export function managePets(state = {pets: []}, action){
    switch (action.type) {

        case 'ADD_PET':
            return {pets: [...state.pets, action.pet]}
        case 'REMOVE_PET':
            const pet2Remove = state.pets.find(pet => pet.id === action.id)
            const petIndex = state.pets.indexOf(pet2Remove)
            const petsCopy = [...state.pets]
            petsCopy.splice(petIndex, 1)
            return {pets: petsCopy}
        default:
            return state;
    }
}

export function dispatch(action){
    state = managePets(state, action)
    render()
}

export function render(){
    const container = document.getElementById('container')
    const li = state.pets.map(pet => `<li>${pet.name}</li>`)
    container.innerHTML = `<ul>${li[0]}</ul>`
}
