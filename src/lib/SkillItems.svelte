<script lang="ts">
  import type { SkillItem } from '../types'

  export let items: SkillItem[]

  function starsIconClassGenerator(skill: SkillItem) {
    const classNames = new Array(5)
    let stars = skill.stars
    for (let i = 0; i < 5; i++) {
      if (stars >= 1) {
        classNames[i] = 'fas fa-star'
        stars--
      } else if (stars > 0 && stars < 1) {
        classNames[i] = 'fas fa-star-half-alt'
        stars = 0
      } else {
        classNames[i] = 'far fa-star'
      }
    }

    return classNames
  }
</script>

<ul>
  {#each items as item}
    <li>
      <div class="wrapper">
        <span class="label">{item.label}</span>
        <span class="dots"></span>
        <span class="stars no-print" title={item.level}>
          {#each starsIconClassGenerator(item) as className}
            <i class={className}></i>
          {/each}
        </span>
        <strong class="print">{item.level}</strong>
      </div>
    </li>
    {#if item.items}
      <svelte:self items={item.items} />
    {/if}
  {/each}
</ul>

<style lang="scss">
  ul {
    padding-inline-start: 1em;
    margin: 0;
    list-style-type: none;

    li {
      position: relative;

      .wrapper {
        display: grid;
        grid-template-columns: max-content auto max-content;

        .dots {
          margin: auto 0.8em;
          content: '';
          opacity: 0.1;
          border-top: 0.25rem dotted var(--muted-text-color);
        }

        .stars {
          color: var(--primary-color);
        }
      }
    }

    li {
      &:first-child:before {
        height: 0.8em;
        top: -0.1em;
      }

      &:before {
        content: '';
        position: absolute;
        height: 1.48em;
        width: 0.1em;
        background-color: var(--muted-text-color);
        opacity: 0.2;
        top: -0.78em;
        left: -0.6rem;
      }

      &:after {
        content: '';
        position: absolute;
        width: 0.5em;
        height: 0.125em;
        background-color: var(--muted-text-color);
        opacity: 0.2;
        top: 0.7em;
        left: -0.68em;
      }
    }

    > :global(ul) {
      position: relative;

      &:not(:last-child):before {
        content: '';
        position: absolute;
        height: 100%;
        width: 0.1em;
        background-color: var(--muted-text-color);
        opacity: 0.2;
        top: -0.78em;
        left: -0.6rem;
      }
    }
  }

  @media print {
    ul {
      list-style-type: disc;
      padding-inline-start: 1.2em;

      li {
        &:before,
        &:after {
          display: none;
        }
      }

      > :global(ul) {
        list-style-type: circle !important;

        &:before {
          display: none;
        }
      }

      li .dots {
        opacity: 0.4 !important;
      }
    }
  }
</style>
