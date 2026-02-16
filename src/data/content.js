export const profile = {
  name: 'Meshwa Patel',
  title: 'Lead Software Developer',
  location: 'Toronto, ON',
  availability: 'Available for Remote & On-site',
  email: 'patelmeshwa2692@gmail.com',
  phone: '403-926-8449',
  linkedin: 'https://www.linkedin.com/in/meshwa2880/',
  github: 'https://github.com/Meshwa2880',
  /** Place your photo at public/photo.jpg or set to any image path (e.g. /photo.jpg) */
  photo: `${import.meta.env.BASE_URL}photo.jpg`,
};

export const summary = [
  'Results-driven Software Developer with expertise in monolithic and microservices architectures for legacy and modern enterprise systems.',
  'Proficient in Java, JavaScript, SQL, and modern frameworks, with experience integrating AI-driven features and accessibility-focused solutions.',
  'Skilled in building scalable, high-performance, and secure applications.',
  'Committed to clean architecture, Test Driven Development, and automation, delivering end-to-end project ownership and software that drives real business impact.',
];

export const taglines = [
  'Building software that scales.',
  'From idea to production - faster.',
  'Clean code. Real impact.',
  'Turning complexity into clarity.',
];

export const heroBadges = [
  { label: 'Full Stack Developer', icon: '◆' },
  { label: 'CI/CD Pipelines', icon: '</>' },
  { label: 'Cloud Native Systems', icon: '☁' },
];

export const highlights = [
  { value: '4+', label: 'Years Experience' },
  { value: '7', label: 'Engineers Led' },
  { value: '3', label: 'Teams Led' },
];

export const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Redux', 'Angular', 'Bootstrap', 'jQuery', 'JSON', 'XML'],
  backend: ['Java', 'Spring', 'Spring Boot', 'Spring MVC', 'Hibernate', 'J2EE', 'Spring Security', 'Python', 'Node.js', 'Express.js'],
  databases: ['Microsoft SQL Server', 'Oracle', 'PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra'],
  tools: ['Git', 'GitHub', 'JIRA', 'Postman', 'Maven', 'Gradle', 'Selenium', 'Jenkins', 'Ansible', 'GitOps', 'Bash', 'JWT', 'OAuth', 'AI Integration'],
  methodologies: ['Agile', 'Scrum', 'Waterfall', 'Iterative Development', 'SDLC', 'Design Patterns'],
  cloud: ['AWS (S3, SQS, CloudWatch, RDS, Bedrock, Load Balancer, Cognito)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Datadog', 'Dynatrace'],
};

export const experience = [
  {
    company: 'Yuja Inc.',
    location: 'Toronto, ON',
    tech: ['Java', 'Spring Boot', 'JavaScript', 'SQL', 'React', 'AWS', 'S3', 'SQS', 'RDS', 'CloudWatch', 'Bedrock', 'OpenAI'],
    roles: [
      {
        title: 'Lead Software Developer',
        period: 'Feb 2024 - Present',
        bullets: [
          'Lead and mentor a team of 7 engineers, driving sprint planning, technical roadmap alignment, DevOps execution, and six-week production release cycles.',
          'Architect and evolve core backend services and REST APIs using Java and Spring Boot, enforcing domain-driven design principles, clean service boundaries, and reusable components.',
          'Reduced reporting execution time by up to 80% through backend workflow redesign, pre-aggregated datasets, optimized indexing strategies, and automated scheduling.',
          'Integrated AI-driven capabilities using AWS Bedrock and OpenAI APIs, enabling secure and scalable inference within legacy platform constraints.',
          'Migrated legacy JSP-based frontend to React, establishing API-first architecture and improving system modularity and maintainability.',
          'Designed and operated cloud-native infrastructure on AWS (S3, SQS, RDS, Load Balancers, CloudWatch) supporting deployments, monitoring, CI/CD pipelines, and on-call production operations.',
          'Conduct architecture reviews, performance tuning, and incident response while enforcing engineering standards and backend best practices.',
        ],
      },
      {
        title: 'Software Developer and Designer',
        period: 'Sep 2022 - Jan 2024',
        bullets: [
          'Led end-to-end backend engineering initiatives, defining platform architecture, service boundaries, and scalability strategies.',
          'Built and deployed a cross-platform mobile application using React Native and Expo with a shared codebase supporting iOS and Android.',
          'Designed client-side state management and data-fetching layers using Zustand and TanStack Query, improving caching efficiency and network performance.',
          'Implemented centralized logging and monitoring using Sentry across web and mobile platforms.',
          'Designed and implemented secure authentication and authorization flows using OAuth2, AWS Cognito, and SSO.',
          'Architected Redis-based caching solutions to reduce database load, decrease latency, and improve system scalability.',
          'Conducted integration testing using JUnit and Mockito, validating end-to-end workflows across backend services and modules.',
        ],
      },
    ],
  },
  {
    company: 'Bit Space Development',
    location: 'Toronto, ON',
    tech: ['Spring Boot', 'Hibernate', 'JPA', 'Spring MVC', 'Spring Data', 'Spring Security'],
    roles: [
      {
        title: 'Software Developer',
        period: 'May 2022 - Aug 2022',
        bullets: [
          'Architected and maintained backend services using Spring Boot, designing RESTful APIs, service layers, and configuration-driven applications for enterprise-scale systems.',
          'Designed and optimized data persistence layers using Hibernate and JPA, modeling complex domain relationships, managing transactions, and tuning SQL queries for performance and reliability.',
          'Implemented Spring ecosystem components including Spring MVC, Spring Data, and Spring Security.',
          'Improved backend performance and system stability through optimized ORM usage, connection pooling, caching strategies, and transaction management.',
        ],
      },
    ],
  },
  {
    company: 'Praxware Technologies',
    location: 'Ahemdabad, IND',
    tech: ['Java EE', 'JSP', 'Servlets', 'JPA', 'JAX-RS', 'JUnit'],
    roles: [
      {
        title: 'Java Developer Intern',
        period: 'Mar 2020 - Sep 2020',
        bullets: [
          'Developed and maintained backend modules using Java EE (JSP, Servlets, JPA) with SQL-backed persistence.',
          'Designed and enhanced RESTful APIs using JAX-RS, enabling reliable service-to-service communication.',
          'Wrote unit tests using JUnit to improve validation coverage, reduce regression risk, and maintain code reliability.',
          'Assisted in debugging, refactoring, and deployment activities, adhering to established coding standards and backend best practices.',
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: 'Motivational Quotes Extension',
    link: '#',
    linkLabel: 'View',
    tech: ['JavaScript', 'OpenAI API', 'Chrome Extension API'],
    description: 'Built a Chrome extension that dynamically generates AI-powered motivational quotes using OpenAI APIs with secure integration and asynchronous request handling.',
  },
  {
    name: 'Website Accessibility Analyzer',
    link: '#',
    linkLabel: 'View',
    tech: ['Next.js', 'React', 'JavaScript', 'OAuth'],
    description: 'Full-stack accessibility analysis platform that crawls websites, detects WCAG violations, and applies automated fixes. Interactive React dashboards with OAuth authentication allow users to visualize and resolve issues in real time.',
  },
];

export const education = [
  {
    degree: 'Post-Graduation in Information Technology Solutions',
    school: 'Humber College',
    location: 'Toronto, ON',
    period: 'Jan 2021 - Aug 2022',
  },
  {
    degree: 'Bachelors of Science in Computer Applications and Information Technology',
    school: 'Gujarat University',
    location: 'Ahmedabad, IND',
    period: 'Jan 2017 - Aug 2020',
  },
];
