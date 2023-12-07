<script lang="ts">
  import type { PersonalInfo } from '../types'
  import dayjs from 'dayjs'

  export let data: PersonalInfo

  const parsedBirthday = dayjs(data.birthday, 'DD.MM.YYYY')
  const birthdayDateTime = parsedBirthday.format('YYYY-MM-DD')

  const diff = dayjs().diff(parsedBirthday)
  const duration = dayjs.duration(diff)
  const yearsOld = Math.floor(duration.asYears())
</script>

<section class="container">
  <header>
    <strong>{data.name}</strong>
  </header>
  <article>
    <ul>
      <li>
        <i class="fas fa-birthday-cake no-print"></i>
        <strong class="print">Birthday:</strong>
        <time datetime={birthdayDateTime}>{data.birthday}</time>
        <span>({yearsOld} y.o.)</span>
      </li>
      <li>
        <i class="fas fa-map-marker-alt no-print"></i>
        <strong class="print">Current Location:</strong>
        <span>{data.currentLocation}</span>
      </li>
      <li>
        <i class="far fa-envelope no-print"></i>
        <strong class="print">E-mail:</strong>
        <a href="mailto:{data.email}">{data.email}</a>
      </li>
      {#each data.contacts as item}
        <li>
          <i class={item.icon} class:no-print={true}></i>
          <a href={item.url} target="_blank" class="no-print"
            >{item.label} <i class="fas fa-up-right-from-square"></i></a
          >
          <strong class="print">{item.label}:</strong>
          <span class="print">{item.url}</span>
        </li>
      {/each}
    </ul>
    <img src={data.pictureUrl} alt={data.name} width="128px" height="128px" />
  </article>
</section>

<style lang="scss">
  img {
    border-radius: 100%;
  }

  header {
    font-size: 2rem;
  }

  article {
    display: grid;
    grid-template-columns: repeat(2, auto);

    ul {
      display: grid;
      grid-template-rows: repeat(3, max-content);
      grid-auto-flow: column;
      list-style-type: none;
      margin: 0;
      padding: 0;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      grid-row-gap: 0.5rem;
      font-size: 0.875rem;

      li {
        i:before {
          width: 1em;
          display: inline-block;
          text-align: center;
        }
      }
    }

    img {
      margin-left: auto;
    }
  }

  @media screen and (max-width: 600px) {
    article {
      margin-top: 1rem;

      ul {
        grid-template-rows: auto;
        grid-auto-flow: unset;
      }
    }
  }

  @media print {
    article ul {
      grid-template-rows: auto;
      grid-auto-flow: unset;
    }

    img {
      border-radius: 0.5rem;
    }
  }
</style>
