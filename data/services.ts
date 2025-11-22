export interface Service {
  title: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    title: 'Design',
    description: 'Professional architectural and engineering design services for your construction projects.',
    image: '/IMG_6889.JPG',
  },
  {
    title: 'Ground Work',
    description: 'Expert ground preparation, excavation, and foundation work for all project types.',
    image: '/IMG_6926.jpeg',
  },
  {
    title: 'Drilling',
    description: 'Professional drilling services for concrete, masonry, and construction applications.',
    image: '/download (5).jpg',
  },
  {
    title: 'Mechanical & Electricals',
    description: 'Comprehensive M&E services including installation, maintenance, and system integration.',
    image: '/IMG_5818.jpeg',
  },
  {
    title: 'Drylining',
    description: 'Professional drylining services for interior walls and ceilings with precision and quality.',
    image: '/IMG_5815.jpeg',
  },
  {
    title: 'Fire Stop',
    description: 'Critical fire protection services ensuring building safety and compliance with regulations.',
    image: '/IMG_6915.jpeg',
  },
]

export interface ProcessStep {
  number: string
  title: string
  description: string
  image: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a comprehensive consultation to understand your project requirements, budget, and timeline, ensuring we deliver exactly what you need.',
    image: '/consulte.jpg',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our expert team develops detailed designs and strategic plans, ensuring every aspect of your construction project is carefully considered and aligned with your vision.',
    image: '/Civil engineer flat design illustration _ Premium Vector.jpg',
  },
  {
    number: '03',
    title: 'Ground Work',
    description: 'Professional ground preparation and foundation work, setting the solid base for your construction project with precision and expertise.',
    image: '/Construction workers repairing road.jpg',
  },
  {
    number: '04',
    title: 'Construction',
    description: 'Our skilled artisans execute the construction phase with resilience and competence, implementing proven strategies to ensure quality and efficiency throughout.',
    image: '/Инженер-строитель _ Премиум вектор.jpg',
  },
  {
    number: '05',
    title: 'Quality Assurance',
    description: 'Rigorous quality checks and safety inspections ensure your project meets the highest standards and complies with all regulations and requirements.',
    image: '/services/Online testing flat design concept illustration _ Premium Vector.jpeg',
  },
  {
    number: '06',
    title: 'Project Completion',
    description: 'We deliver your completed project on time and to your satisfaction, building trust and lasting professional relationships with every successful completion.',
    image: '/complete.jpg',
  },
]

