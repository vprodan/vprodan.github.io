export interface PersonalInfo {
  email: string
  name: string
  birthday: string
  currentLocation: string
  pictureUrl: string
  aboutMe: string
  contacts: Contact[]
}

export interface Contact {
  icon: string
  label: string
  url: string
}

export interface Education {
  place: string
  url?: string
  location: string
  start: string
  end?: string
  specialization: string
  degree: string
}

export interface Experience {
  start: string
  end?: string
  location: string
  position: string
  company: string
  url?: string
  about: string
  responsibilities: string[]
}

export interface Hobby {
  icon: string
  label: string
}

export interface Skill {
  icon: string
  label: string
  items?: SkillItem[]
}

export interface SkillItem {
  label: string
  stars: number
  level: string
  items?: SkillItem[]
}

export interface Data {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  strengths: string[]
  hobbies: Hobby[]
  skills: Skill[]
}
