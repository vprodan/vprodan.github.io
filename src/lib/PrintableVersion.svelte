<script lang="ts">
  function print() {
    const isSafari = /safari/i.test(navigator.userAgent)

    try {
      if (isSafari) {
        document.execCommand('print')
      } else {
        window.print()
      }
    } catch (e: any) {
      alert(`Fatal Error: ${e.message}`)
    }
  }
</script>

<div class="no-print">
  <button type="button" on:click={print}>
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
    color: var(--primary-text-color);

    &:hover span {
      text-decoration: underline;
    }
  }
</style>
