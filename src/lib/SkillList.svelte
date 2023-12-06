<script lang="ts">
  import type { Skill } from '../types'
  import SkillItems from './SkillItems.svelte'

  export let items: Skill[]
</script>

{#each items as skill}
  <section>
    <header>
      <i class={skill.icon} class:no-print={true}></i>
      <span>{skill.label}</span>
    </header>
    <article>
      {#if skill.items}
        <SkillItems items={skill.items} />
      {/if}
    </article>
  </section>
{/each}

<style lang="scss">
  section:not(:first-child) {
    margin-top: 1rem;
  }

  @media print {
    header span {
      font-weight: bold;

      &:after {
        content: ':';
      }
    }
  }
</style>
