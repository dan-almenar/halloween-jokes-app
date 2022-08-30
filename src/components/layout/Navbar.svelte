<script>
    import store, { setTab } from '../../store/store'
    import { slide } from 'svelte/transition'

    $: currentTab = $store.currentTab
    let unique = {}

    const handleClick = (tab) => {
        unique = {}
        setTab(tab)
    }
</script>

<div class="level is-mobile has-background-dark has-text-warning">
    <div class="nav-title ml-5">
    ha LOL ween!
    </div>
    {#key unique}
    <div in:slide="{{duration: 600, delay: 200}}" class="nav-title ml-5">
        { currentTab }
    </div>
    {/key}
    <div class="tabs p-3 is-right">
        <ul class="px-5">
            <li class="tab">
                <p on:click={() => handleClick('Home')}>
                    <i class="icon material-icons-outlined">home</i>
                </p>
            </li>
            <li class="tab">
                <p on:click={() => handleClick('About')}>
                    <i class="icon material-icons-outlined">info</i>
                </p>
            </li>
        </ul>
    </div>        
</div>

<style>
    .nav-title {
        font-family: "Mystery Quest";
        font-size: 1.4rem;
    }
    .tab {
        cursor: pointer;
    }
    .tab:hover {
        color: hsl(48, 100%, 29%);
    }
</style>