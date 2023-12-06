<script lang="ts">
  import type { Experience } from '../types'
  import dayjs from 'dayjs'
  import type { Writable } from 'svelte/store'

  export let items: Experience[]
  export let yoe: Writable<number>
  yoe.set(0)

  function parseDate(dateLike?: string): dayjs.Dayjs {
    return dateLike ? dayjs(dateLike, ['MM.YYYY', 'YYYY']) : dayjs()
  }

  function toDateTime(date: dayjs.Dayjs) {
    return date.format('YYYY-MM')
  }

  function getDuration(startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) {
    const diff = endDate.diff(startDate)
    const duration = dayjs.duration(diff)
    const years = duration.asYears()

    yoe.update((n) => n + years)

    const yearsInt = Math.floor(years)
    const yearsFractional = years - yearsInt

    let valueInt: number
    let value: string
    let unit: string

    if (yearsInt) {
      valueInt = yearsInt
      value = valueInt.toString()
      unit = 'year'

      if (yearsFractional > 1 / 12) {
        value += `+`
      }
    } else {
      valueInt = Math.floor(duration.asMonths())
      value = valueInt.toString()

      unit = 'month'
    }

    if (valueInt > 1) {
      unit += 's'
    }

    return `${value} ${unit}`
  }
</script>

{#each items as item}
  {@const startDate = parseDate(item.start)}
  {@const endDate = parseDate(item.end)}
  {@const startDateTime = toDateTime(startDate)}
  {@const endDateTime = toDateTime(endDate)}
  {@const duration = getDuration(startDate, endDate)}
  <section>
    <header>
      <span>
        <strong class="print">Time Period:</strong>
        <i class="far fa-calendar-alt no-print"></i>
        <time datetime={startDateTime}>{item.start}</time>
        <time datetime={endDateTime}>{item.end ?? 'Present'}</time>
        <span>({duration})</span>
      </span>
      <span>
        <strong class="print">Location:</strong>
        <i class="fas fa-map-marker-alt no-print"></i>
        {item.location}
      </span>
    </header>
    <h3>{item.position}</h3>
    <strong>
      <span>at</span>
      {#if item.url}
        <a href={item.url} target="_blank"
          >{item.company}<i class="fas fa-up-right-from-square no-print"></i></a
        >
        <span class="print">({item.url})</span>
      {:else}
        {item.company}
      {/if}
    </strong>
    <article>
      <div>{@html item.about}</div>
      <strong>Responsibilities:</strong>
      <ul>
        {#each item.responsibilities as responsibility}
          <li>{responsibility}</li>
        {/each}
      </ul>
    </article>
  </section>
{/each}

<style lang="scss">
  section:not(:first-child):before {
    content: '';
    width: 50%;
    display: flex;
    margin: 0.8rem auto;
    opacity: 0.1;
    border-top: 0.2rem dashed var(--muted-text-color);
  }

  header {
    font-size: 0.75rem;

    span:first-child {
      margin-right: 0.5rem;
    }

    span > span {
      color: var(--secondary-text-color);
    }
  }

  h3 {
    margin: 0;
  }

  article {
    line-height: 1.2;
    padding-inline-start: 0.25em;

    div {
      font-style: italic;
      font-weight: 200;
      margin-bottom: 0.4rem;
    }
  }

  ul {
    padding-inline-start: 1em;
    font-size: 0.75rem;
    color: var(--muted-text-color);
    margin-top: 0.2rem;
    margin-bottom: 0;
    position: relative;
  }

  @media print {
    section:not(:first-child):before {
      border: none;
    }
  }
</style>
