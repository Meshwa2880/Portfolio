export const profile = {
  name: 'Meshwa Patel',
  title: 'Lead Software Developer',
  location: 'Toronto, ON',
  availability: 'Available for Remote & On-site',
  email: 'patelmeshwa2692@gmail.com',
  phone: '403-926-8449',
  linkedin: 'https://linkedin.com/in/meshwa-patel',
  github: 'https://github.com/meshwa-patel',
  /** Place your photo at public/photo.jpg or set to any image path (e.g. /photo.jpg) */
  photo: '/photo.HEIC',
};

export const summary = [
  'Results-driven Software Developer with expertise in designing and delivering both monolithic and microservices architectures across legacy and modern enterprise systems.',
  'Strong proficiency in Java, JavaScript, SQL, and modern frameworks, with hands-on experience integrating AI-driven features and accessibility-focused solutions.',
  'Adept at designing scalable, high-performance applications, optimizing code for reliability and cost, and delivering secure, production-ready systems.',
  'Collaborative team player committed to clean architecture, Test Driven Development, and automation, delivering business-ready software with end-to-end project ownership that drives real impact.',
];

export const taglines = [
  'Building software that scales.',
  'From idea to production-faster.',
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
  { value: '8', label: 'Engineers Led' },
  { value: '3', label: 'Teams Led' },
];

export const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Redux', 'Angular', 'Bootstrap', 'jQuery', 'JSON', 'XML'],
  backend: ['Java', 'Spring', 'Spring Boot', 'Spring MVC', 'Hibernate', 'J2EE', 'Spring Security', 'Python', 'Node.js', 'Express.js'],
  databases: ['Microsoft SQL Server', 'Oracle', 'PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra'],
  tools: ['Git', 'GitHub', 'JIRA', 'Postman', 'Maven', 'Gradle', 'Selenium', 'Jenkins', 'Ansible', 'GitOps', 'Bash', 'JWT', 'OAuth', 'AI integration'],
  methodologies: ['Agile', 'Scrum', 'Waterfall', 'Iterative', 'SDLC', 'Design Patterns'],
  cloud: ['AWS (S3, SQS, CloudWatch, RDS, Bedrock, Load Balancer, Cognito)', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Datadog', 'Dynatrace'],
};

export const experience = [
  {
    company: 'Yuja Inc.',
    location: 'Toronto, ON',
    tech: ['Java', 'JavaScript', 'SQL', 'React', 'AWS', 'S3', 'SQS', 'RDS', 'CloudWatch'],
    roles: [
      {
        title: 'Lead Software Developer',
        period: 'Feb 2024 - Present',
        bullets: [
          'Managed and mentored a team of seven engineers, overseeing sprints, Jira, cloud infrastructure, DevOps, and six-week product releases while maintaining technical vision and SDLC compliance.',
          'Built and evolved core backend services and APIs using Java, JavaScript, SQL, and modern frameworks, emphasizing domain logic, clean boundaries, and reusable components.',
          'Implemented the Builder design pattern to optimize backend reporting workflows using pre-aggregated datasets, indexing strategies, and automated scheduling, reducing execution time by up to 80%.',
          'Integrated AI-driven capabilities into backend services using AWS Bedrock and OpenAI, enabling secure, scalable inference while operating within legacy platform constraints.',
          'Migrated a legacy JSP-based frontend to React, decoupling presentation from backend services and enabling a modern, API-first application architecture.',
          'Designed and operated cloud-native backend infrastructure on AWS using S3, SQS, RDS, Load Balancers, and CloudWatch, supporting deployments, monitoring, and on-call production operations.',
          'Provided hands-on technical leadership through architecture reviews, code reviews, and engineering standards, while actively contributing to development, incident response, and performance tuning.',
        ],
      },
      {
        title: 'Software Developer and Designer',
        period: 'Sep 2022 - Jan 2024',
        bullets: [
          'Led end-to-end backend engineering initiatives, defining platform direction, architectural standards, and scalability strategies across enterprise systems.',
          'Built and delivered a cross-platform mobile application using a single shared codebase with React Native and Expo, ensuring consistent behavior and maintainability across iOS and Android.',
          'Designed client-side state management and data fetching layers using Zustand and TanStack Query, optimizing caching, synchronization, and network performance in mobile applications.',
          'Implemented centralized logging and error monitoring with Sentry across mobile and web, using the Singleton pattern to ensure a single, consistent logging instance and faster incident resolution.',
          'Designed authentication and authorization flows across distributed systems using OAuth, AWS Cognito, and SSO, enabling secure, federated access at scale.',
          'Owned caching architecture using Redis to enable low-latency data access, reduce database load, and support scalable performance across distributed systems.',
          'Conducted integration testing using JUnit and Mockito to validate end-to-end workflows across modules and services.',
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
          'Architected and maintained backend services using Spring Boot, defining RESTful APIs, service layers, and configuration-driven applications for enterprise-scale systems.',
          'Designed and optimized data persistence layers using Hibernate and JPA, modeling complex domain relationships, managing transactions, and tuning queries for performance and reliability.',
          'Applied Spring ecosystem components including Spring MVC, Spring Data, and Spring Security to enforce clean separation of concerns, secure access, and maintainable application architecture.',
          'Improved application performance and stability through effective ORM usage, connection pooling, caching strategies, and transaction management within Spring-based services.',
        ],
      },
    ],
  },
  {
    company: 'Praxware Technologies',
    location: 'Toronto, ON',
    tech: ['Java EE', 'JSP', 'Servlets', 'JPA', 'JAX-RS', 'JUnit'],
    roles: [
      {
        title: 'Java Developer Intern',
        period: 'Mar 2020 - Sep 2020',
        bullets: [
          'Developed and maintained backend components using Java EE specifications including JSP, Servlets, and JPA, implementing SQL-backed persistence for enterprise application features.',
          'Built and enhanced RESTful APIs following the JAX-RS specification, supporting service-to-service communication and data integration.',
          'Wrote and executed unit tests using JUnit, assisting with validation, regression testing, and code quality improvements.',
          'Collaborated with senior engineers on debugging, refactoring, and deployment tasks while adhering to established coding standards and best practices.',
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
    tech: ['JavaScript', 'OpenAI GPT', 'Chrome Extension API'],
    description: 'Chrome extension that generates and displays daily motivational quotes dynamically using the OpenAI GPT model, enhancing user engagement and productivity.',
  },
  {
    name: 'Website Accessibility Analyzer',
    link: '#',
    linkLabel: 'View',
    tech: ['Next.js', 'JavaScript', 'React', 'OAuth'],
    description: 'Full-stack tool that crawls websites to detect accessibility issues and automatically applies fixes. Built with modular, scalable design. Interactive React dashboards with OAuth authentication highlight issues in real time and let users apply corrections directly through the interface.',
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
