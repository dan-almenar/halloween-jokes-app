<script>
    import { fade } from 'svelte/transition'
</script>

<div class="columns">
    <div class="column"></div>
    <div transition:fade={{delay:100, duration:400}} class="column container mx-5 has-text-centered">
        <div class="level is-mobile mx-5">
            <figure class="image is-64x64">
                <img src="ghost.png" alt="">
            </figure>
            <figure class="image is-96x96">
                <img src="ghost.png" alt="">
            </figure>
            <figure class="image is-128x128">
                <img src="ghost.png" alt="">
            </figure>
        </div>
        <p class="title has-text-white">
            Loading...
        </p>    
    </div>
    <div class="column"></div>
</div>


<style>
    .subtitle {
        font-family: 'Mystery Quest';
    }

    .columns {
        animation: tilt 1.2s infinite;
    }

    @keyframes tilt {
        0% {
            opacity: 0;
        }
        100% {
            opacity: .6;
        }
    }
</style>