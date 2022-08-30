<script>
  import store from './store/store'
  import { slide } from 'svelte/transition'
  import Navbar from './components/layout/Navbar.svelte';
  import Footer from './components/layout/Footer.svelte';
  import Content from './components/Content.svelte';
  import Loading from './components/Loading.svelte'
import About from './components/About.svelte';

  $: bgImage = $store.bgImage
  $: currentTab = $store.currentTab
  $: isLoading = $store.isLoading
  
</script>

<main style="background-image: url({bgImage}); background-size: cover; background-position: center"
  class="hero is-fullheight">
  <div class="hero-head">
    <Navbar />
  </div>
  {#if currentTab === 'Home' && isLoading}
  <div class="hero-head">
    <Loading />
  </div>
  {/if}
  {#if currentTab === 'Home' && !isLoading}
  <div class="hero-body">
    <div transition:slide={{duration: 400, delay: 200}}>
      <Content />
    </div>
  </div>
  {/if}
  {#if currentTab === 'About'}
  <div class="hero-body">
    <div transition:slide={{duration: 400, delay: 200}}>
      <About />
    </div>
  </div>
  {/if}
  <Footer />
</main>

<style>
</style>
