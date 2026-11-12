export type Project = {
  title: string
  tagline: string
  badge?: string
  summary: string
  highlights: string[]
  stack: string[]
  repo: string
  demo?: string
  /** Screenshot path under public/, e.g. 'projects/name.jpg'. Cards without one show no image. */
  image?: string
  imageAlt?: string
  featured?: boolean
}

// Text wrapped in ==double equals== is rendered as a purple highlight.
export const projects: Project[] = [
  {
    title: 'NoteLens',
    tagline: 'AI study guides from YouTube lectures',
    badge: 'GenAI',
    featured: true,
    summary:
      'Turns technical YouTube lectures into structured study guides with key takeaways, highlighted code snippets, clickable timestamps and PDF export, plus a chat that ==cites the exact video moment== behind each answer.',
    highlights: [
      'LangGraph ingestion pipeline with ==chapter-aware semantic chunking== and timestamped vectors in ChromaDB',
      '==Automatic Groq → Hugging Face failover== with token-budget guards',
      'Parallel ingestion with ==real-time SSE progress==, cancellation and caching',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'LangGraph', 'ChromaDB', 'Groq'],
    repo: 'https://github.com/NJ018/Ytbuddy-main',
    image: 'projects/notelens.jpg',
    imageAlt:
      'NoteLens study guide for a lecture on Retrieval-Augmented Generation: summary, table of contents, video metadata and an Ask AI button',
  },
  {
    title: 'HeadsUp',
    tagline: 'Live disruption & safety alerts',
    badge: 'hyperDart Hackathon',
    featured: true,
    summary:
      'Answers queries like "weather alerts in Houston" ==verdict first==: is anything active, how serious, where, and until when. Built from official National Weather Service data.',
    highlights: [
      'Says =="couldn\'t check"== instead of a false "no alerts" when the API fails',
      '4-level severity meter, timeline and ==interactive map== of alert zones',
      'Shipped with ==79 unit tests==, keyboard accessibility and zero backend',
    ],
    stack: ['React 19', 'MUI', 'Leaflet', 'Vitest', 'NWS API'],
    repo: 'https://github.com/NJ018/Hyperdart_Hackathon',
    image: 'projects/headsup.jpg',
    imageAlt:
      'HeadsUp answering "weather alerts in florida": 19 alerts with a severe Flood Warning, affected counties and a timeline of active alerts',
  },
  {
    title: 'Forever',
    tagline: 'Full-stack e-commerce platform',
    badge: 'Full-stack',
    summary:
      'Three apps in one platform: a customer storefront, an admin panel and an Express REST API on MongoDB, with search, filters, cart and order tracking.',
    highlights: [
      '==JWT auth== with bcrypt and separate customer / admin route guards',
      '==Stripe, Razorpay== and cash-on-delivery payments',
      'Admin dashboard with multi-image uploads via Cloudinary',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    repo: 'https://github.com/NJ018/forever',
    image: 'projects/forever.jpg',
    imageAlt: 'Forever storefront home page with navigation, cart icon and a "Latest Arrivals" hero banner',
  },
  {
    title: 'Face Analyzer',
    tagline: 'Facial proportion analysis with ML',
    badge: 'Computer vision',
    summary:
      'Detects ==468 facial landmarks== with MediaPipe and scores facial geometry against the Golden Ratio, Rule of Thirds and Rule of Fifths.',
    highlights: [
      'Three interfaces: ==Streamlit app, CLI and FastAPI==',
      'Detailed scores, visualisations and ==PDF / JSON reports==',
    ],
    stack: ['Python', 'MediaPipe', 'Streamlit', 'FastAPI'],
    repo: 'https://github.com/NJ018/Face-Analyzer',
    image: 'projects/face-analyzer.jpg',
    imageAlt:
      'Face Analyzer overview: a portrait with detected landmarks, a proportion score of 68.1 out of 100, an oval face-shape match and head-pose angles',
  },
]
