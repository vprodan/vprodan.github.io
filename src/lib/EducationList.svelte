<script lang="ts">
  import type { Education } from '../types'
  import dayjs from 'dayjs'

  export let items: Education[]

  function parseDate(dateLike?: string): dayjs.Dayjs {
    return dateLike ? dayjs(dateLike, ['YYYY']) : dayjs()
  }

  function toDateTime(date: dayjs.Dayjs) {
    return date.format('YYYY')
  }
</script>

{#each items as item}
  {@const startDate = parseDate(item.start)}
  {@const endDate = parseDate(item.end)}
  {@const startDateTime = toDateTime(startDate)}
  {@const endDateTime = toDateTime(endDate)}
  <section>
    <header>
      <span>
        <strong class="print">Time Period:</strong>
        <i class="far fa-calendar-alt no-print"></i>
        <time datetime={startDateTime}>{item.start}</time>
        <time datetime={endDateTime}>{item.end ?? 'Present'}</time>
      </span>
      <span>
        <strong class="print">Location:</strong>
        <i class="fas fa-map-marker-alt no-print"></i>
        {item.location}
      </span>
    </header>
    <article>
      <strong>{item.specialization} | {item.degree}'s degree</strong>
    </article>
    <footer>
      <strong>
        <span>at</span>
        {#if item.url}
          <a href={item.url} target="_blank"
            >{item.place}<i class="fas fa-up-right-from-square no-print"></i></a
          >
          <span class="print">({item.url})</span>
        {:else}
          {item.place}
        {/if}
      </strong>
    </footer>
  </section>
{/each}

<style lang="scss">
  section:not(:first-child):before {
    content: '';
    width: 50%;
    display: flex;
    margin: 0.8rem auto;
    opacity: 0.1;
    border-top: 0.25rem dashed var(--muted-text-color);
  }

  header {
    font-size: 0.75rem;

    span:first-child {
      margin-right: 0.5rem;
    }
  }

  article {
    font-size: 1rem;
  }
</style>
