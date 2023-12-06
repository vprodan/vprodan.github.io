<script lang="ts">
  export let items: string[]
</script>

<ul class="tags">
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>

<style lang="scss">
  ul {
    padding-inline-start: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      font-weight: lighter;
      display: inline-block;
      padding: 0 0.75rem;
      white-space: nowrap;
      color: var(--bg-color);
      border-radius: 1rem;
      background-color: var(--secondary-text-color);
    }
  }

  @media print {
    ul li {
      display: inline;
      background: unset;
      padding: 0;
      font-weight: normal;

      &:before {
        content: '•';
        font-weight: bold;
        margin-right: 0.5em;
      }
    }
  }
</style>
