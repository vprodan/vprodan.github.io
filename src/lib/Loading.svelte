<script lang="ts">
  import { onMount } from 'svelte'

  let dots = '...'

  onMount(() => {
    const interval = setInterval(() => {
      dots = dots.length < 3 ? dots + '.' : ''
    }, 500)

    return () => clearInterval(interval)
  })
</script>

<p>Fetching data{dots}</p>
<p>It may take some time</p>

<style lang="scss">
  p {
    font-size: 1rem;
    text-align: center;

    &:last-child {
      font-style: italic;
      font-size: 0.875rem;
      color: var(--secondary-text-color);
    }
  }
</style>
