const randomImg = () => {
    const num = Math.floor(Math.random() * 19)
    return `/bgImages/${num}.jpg`
}

const getJoke = async() => {
    let joke = {}
    try {
        const res = await fetch('https://stage.jokeapi.dev/joke/Spooky?type=twopart')
        joke = await res.json()
    } catch (err) {
        joke = err
    }
    return joke
}

export { randomImg, getJoke }
