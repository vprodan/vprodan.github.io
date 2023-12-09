<script lang="ts">
  import { docStore } from 'sveltefire'
  import { initializeApp } from 'firebase/app'
  import { getFirestore } from 'firebase/firestore'
  import { getAnalytics, logEvent } from 'firebase/analytics'
  import type { Data } from './types'
  import Section from './lib/Section.svelte'
  import Tags from './lib/Tags.svelte'
  import PersonalInfo from './lib/PersonalInfo.svelte'
  import PrintableVersion from './lib/PrintableVersion.svelte'
  import EducationList from './lib/EducationList.svelte'
  import ExperienceList from './lib/ExperienceList.svelte'
  import SkillList from './lib/SkillList.svelte'
  import HobbyList from './lib/HobbyList.svelte'
  import Loading from './lib/Loading.svelte'
  import dayjs from 'dayjs'
  import DurationPlugin from 'dayjs/plugin/duration'
  import CustomParseFormatPlugin from 'dayjs/plugin/customParseFormat'
  import { writable } from 'svelte/store'
  import { onMount, afterUpdate } from 'svelte'

  dayjs.extend(DurationPlugin)
  dayjs.extend(CustomParseFormatPlugin)

  const app = initializeApp({
    apiKey: 'AIzaSyAm1I2zK0_VmolD7VoAcMifcOQ-x1rxmTg',
    authDomain: 'vprodan-cv.firebaseapp.com',
    projectId: 'vprodan-cv',
    storageBucket: 'vprodan-cv.appspot.com',
    messagingSenderId: '262118627579',
    appId: '1:262118627579:web:6842a857c12b582f8df85e',
    measurementId: 'G-PMMXNGL2Q2',
  })
  const firestore = getFirestore(app)
  const analytics = getAnalytics(app)

  const data = docStore<Data>(firestore, 'data/main')
  logEvent(analytics, 'page_view')

  const yearsOfExperience = writable(0)
  $: roundedYOE = Math.floor($yearsOfExperience)
  $: isYOEBigger = $yearsOfExperience - roundedYOE > 1 / 12

  let longLoadingDetected = false
  setTimeout(() => (longLoadingDetected = true), 500)

  let header: any
  let observer: IntersectionObserver
  let observed = false

  onMount(() => {
    if (window.hasOwnProperty('IntersectionObserver')) {
      const rootElement = document.documentElement
      const rootStyles = getComputedStyle(rootElement)
      const themeColor = rootElement.querySelector('meta[name=theme-color]')

      observer = new IntersectionObserver((entries) => {
        const colorVar = entries[0].isIntersecting
          ? '--bg-color'
          : '--secondary-color'
        const color = rootStyles.getPropertyValue(colorVar)

        console.log(color)

        requestAnimationFrame(() => themeColor?.setAttribute('content', color))
      })

      return () => header && observer.unobserve(header)
    }
  })

  afterUpdate(() => {
    if (!observed && observer && header) {
      observer.observe(header)
      observed = true
    }
  })
</script>

{#if $data}
  <header bind:this={header}>
    <PrintableVersion />
    <PersonalInfo data={$data.personalInfo} />
  </header>
  <main>
    <div class="container">
      <Section header="About">
        {@html $data.personalInfo.aboutMe}
      </Section>
      <Section header="Education">
        <EducationList items={$data.education} />
      </Section>
      <Section
        header="Work Experience"
        subHeader="({roundedYOE}{isYOEBigger ? '+' : ''} years in total)"
      >
        <ExperienceList items={$data.experience} yoe={yearsOfExperience} />
      </Section>
      <Section header="Skills">
        <SkillList items={$data.skills} />
      </Section>
      <Section header="Strengths">
        <Tags items={$data.strengths} />
      </Section>
      <Section header="Hobbies">
        <HobbyList items={$data.hobbies} />
      </Section>
    </div>
    <footer class="no-print">
      <a href="https://github.com/vprodan/vprodan.github.io"
        >&copy; 2023 <strong>Vadim Prodan</strong></a
      >
    </footer>
  </main>
{:else if longLoadingDetected}
  <Loading />
{/if}

<style lang="scss">
  header {
    background-color: var(--bg-color);
  }

  main {
    color: var(--bg-color);
    border-top: 4px solid var(--primary-color);
    background-color: var(--secondary-color);
  }

  footer {
    padding: 0.5em;
    text-align: center;
  }

  .container {
    column-count: 2;
    column-fill: balance;
    column-gap: 2rem;
  }

  @media screen and (max-width: 760px) {
    .container {
      column-count: 1;
    }
  }

  @media print {
    main {
      --bg-color: #000;
      border-top: 1px solid var(--primary-color);
      background-color: #fff;
    }

    .container {
      column-count: 1;
    }
  }
</style>
