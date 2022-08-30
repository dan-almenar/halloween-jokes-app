<script>
    import store, { setJoke, resetJoke, setIsLoading } from "../store/store.js";

    $: joke = $store.joke
    $: showDelivery = false
    $: shareFeedback = null

    const handleGetJoke = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 6000)
        setJoke()
    }

    const toggleShowDelivery = () => showDelivery = !showDelivery

    const shareJoke = async () => {
        const message = {
            title: 'Happy Halloween!',
            text: `—${joke.setup}\n—${joke.delivery}\n\nGet more jokes at\n`,
            url: 'https://halolween-dbecc.web.app/'
        }
        try {
            await navigator.share(message)
            shareFeedback = 'message successfully sent!'
        } catch (error) {
            shareFeedback = 'something went wrong...'
        }
    }
    
</script>

<div class="container">
    <div class="columns">
      <div class="column is-three-quarters">
        <div class="box has-background-warning">
          <div class="has-text-centered">
            <div class="subtitle has-text-black">
                <p class="block">
                    { !joke ? 'Welcome to a land full of ghouls, skeletons, witches, death and jokes!' : '' }
                </p>
                <p class={`block ${joke && 'joke'}`}>
                    { !joke ? 'Please proceed carefully through this woods for you may die...' : `${joke.setup}` }
                </p>
                <p class={`block ${joke && 'joke'}`}>
                    { !joke ? '...of laughter!' : joke && showDelivery ? `${joke.delivery}` : '' }
                </p>
            </div>
          </div>
        </div>
        <div class="has-text-warning">
            <button on:click={!joke ? handleGetJoke : joke && !showDelivery ? toggleShowDelivery : shareJoke}
                class="button is-black is-fullwidth subtitle has-text-warning">
                { !joke ? 'Get joke!' : joke && !showDelivery ? 'deliver!' : 'Share'}
            </button>
        </div>
        {#if joke && showDelivery}
        <div class="has-text-warning">
            <button on:click={() => resetJoke()}
                class="button is-black is-fullwidth subtitle has-text-warning mt-3">
                Restart
            </button>
        </div>            
        {/if}
      </div>
    </div>
</div>

<style>
    .subtitle {
        font-family: 'Mystery Quest';
    }
    .joke {
        font-size: 1.7rem;
    }
    .button {
        border: 3px ridge hsl(48, 100%, 67%) !important;
    }
</style>