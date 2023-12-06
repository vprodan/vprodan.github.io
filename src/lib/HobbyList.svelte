<script lang="ts">
  import type { Hobby } from '../types'

  export let items: Hobby[]
</script>

<ul>
  {#each items as item}
    <li>
      <i class={item.icon} class:no-print={true}></i>
      <span>{item.label}</span>
    </li>
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
