export type JourneyItem = { title: string; place: string; period: string; note?: string }

export const education: JourneyItem[] = [
  {
    title: 'B.Tech, Electronics & Communication (IIoT)',
    place: 'National Institute of Technology, Kurukshetra',
    period: '2023 – 2027',
  },
]

export const positions: JourneyItem[] = [
  { title: 'Member', place: 'ICell – Innovation Cell, NIT Kurukshetra', period: 'Oct 2023 – Dec 2025' },
  { title: 'Member', place: 'HTC – Hiking and Trekking Club, NIT Kurukshetra', period: 'Aug 2025 – Present' },
]

// Text wrapped in ==double equals== is rendered as a purple highlight.
export const achievements: string[] = [
  'Solved ==500+ DSA problems== across LeetCode, GeeksforGeeks and Striver\'s A2Z sheet',
  '==NTSE Scholar==: qualified from 1M+ candidates nationwide',
  'Smart India Hackathon: ==top 25 of 140 teams== with a full-stack application',
]
