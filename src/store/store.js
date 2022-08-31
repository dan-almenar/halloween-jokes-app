import { randomImg, getJoke } from "../utils/utils.js";
import { writable } from "svelte/store";

const store = writable({
    currentTab: 'Home',
    bgImage: randomImg(),
    isLoading: false,
    joke: null,
})

export const setTab = (payload) => {
    return store.update((state) => {
        state.currentTab = payload
        return state
    })
}

export const setJoke = async () => {
    const joke = await getJoke()
    store.update((state) => {
        state.joke = joke
        return state
    })
    return
}

export const resetJoke = () => {
    return store.update((state) => {
        state.joke = null
        return state
    })
}

export const setIsLoading = (payload) => {
    return store.update((state) => {
        state.isLoading = payload
        return state
    })
}

export default store