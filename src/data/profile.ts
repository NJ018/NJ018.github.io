// Text wrapped in ==double equals== is rendered as a purple highlight.

export const profile = {
  name: 'Baldev',
  // The intro types these out one after another.
  roles: ['Full-stack engineer', 'GenAI builder', 'Problem solver'],
  location: 'NIT Kurukshetra, India',
  tagline:
    'Final-year B.Tech student building ==full-stack systems== and ==RAG pipelines==, with a focus on fault tolerance, clean APIs and automated tests.',
  about: [
    "I'm a final-year B.Tech (ECE – IIoT) student at NIT Kurukshetra. I like building things end to end: ==REST APIs in FastAPI and Node.js==, ==React + TypeScript== front ends, and ==GenAI pipelines with LangGraph and ChromaDB==.",
    "I care about what happens when things go wrong. My projects fail over between LLM providers, report \"couldn't check\" instead of a false all-clear, and ship with tests. Underneath it all is a strong ==DSA foundation in C++== with 500+ problems solved.",
  ],
  github: 'https://github.com/NJ018',
  // Empty values are hidden on the site.
  linkedin: 'https://www.linkedin.com/in/baldev-chhillar-3298a1424',
  email: 'baldevchhilllar@gmail.com',
  photo: 'headshot.jpg',
}

export const stats = [
  { value: '500+', label: 'DSA problems solved' },
  { value: 'Top 25', label: 'of 140 teams at Smart India Hackathon' },
  { value: 'NTSE', label: 'National Talent Search scholar' },
]
