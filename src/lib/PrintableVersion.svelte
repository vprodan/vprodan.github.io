<div class="no-print">
  <button type="button" on:click={() => window.print()}>
    <i class="fas fa-print"></i>
    <span>Printable Version</span>
  </button>
</div>

<style lang="scss">
  div {
    display: flex;
  }

  button {
    background: unset;
    border: unset;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    margin: 0.4rem auto;

    &:hover span {
      text-decoration: underline;
    }
  }
</style>
