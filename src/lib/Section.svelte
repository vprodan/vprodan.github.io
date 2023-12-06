<script lang="ts">
  export let header: string
  export let subHeader = ''
</script>

<section>
  <header>
    <strong>{header}</strong>
    {#if subHeader}
      <span>{subHeader}</span>
    {/if}
  </header>
  <article>
    <slot />
  </article>
</section>

<style lang="scss">
  section {
    break-inside: avoid;

    &:not(:first-child) {
      margin-top: 2rem;
    }

    header {
      color: var(--primary-color);

      span {
        margin-left: 0.4rem;
        color: var(--secondary-text-color);
      }
    }

    article {
      font-size: 0.875rem;
      line-height: 1.6;
      margin-top: 1rem;
    }
  }

  @media print {
    section {
      break-inside: unset;

      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
</style>
