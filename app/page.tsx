'use client';

import { InternInfo } from '@/components/intern-info';
import { ObjectivesSection } from '@/components/objectives-section';
import { ProjectsSection } from '@/components/projects-section';
import { WeeklyReportsSection } from '@/components/weekly-reports-section';

export default function Home() {
  // Sample data - Replace with your actual information
  const internData = {
    name: 'Jhon Clein Pagarogan',
    position: 'Software Engineer Intern',
    company: 'WMSU - CCS',
    bio: 'I’m an aspiring Software Developer passionate about building impactful and user-centered web applications. I enjoy working across the full development stack—from crafting intuitive UIs to designing secure and scalable backend systems. I love solving real-world problems through clean code, collaboration, and continuous learning.',
    email: 'pagaroganjhonclein@example.com',
    phone: '0969 468 5197',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    linkedIn: 'https://www.linkedin.com/in/jhon-clein-pagarogan-a514872b0/',
    github: 'https://github.com/Nishieeee',
  };

  const objectives = [
    'Master full-stack web development with modern frameworks and best practices',
    'Contribute to production-level projects with scalable architecture',
    'Develop problem-solving skills and technical decision-making abilities',
    'Enhance understanding of software development lifecycle and agile methodologies',
    'Build professional network and learn from experienced team members',
    'Implement responsive and accessible user interfaces',
    'Learn database design and optimization techniques',
    'Gain hands-on experience with version control and team collaboration tools',
  ];

  const projects = [
    {
      title: 'VAWC Portal',
      description: 'The VAWC (Violence Against Women and Children) Management System is a centralized digital platform designed to streamline the reporting, tracking, and management of VAWC cases. By integrating multiple government and community-based agencies, the system ensures a coordinated and efficient response to protect victims and hold perpetrators accountable.',
      purpose: 'The primary goal of the VAWC Portals is to replace fragmented manual processes with a unified, secure, and data-driven ecosystem. It facilitates seamless collaboration between Law Enforcement, Social Workers, Healthcare Providers, and Barangay Officials, ensuring that every case is monitored from the initial report to final resolution.',
      contributors: ['Jhon Clein Pagarogan'],
      screenshots: [
        '/vawc_portal_ss.png',
        '/vawc_portal_ss_2.png',
        '/vawc_portal_ss_3.png',
      ],
    },
  ];

  const weeks = [
    {
      weekNumber: 1,
      description: 'First week focused on onboarding and understanding the codebase. Met with team leads, reviewed documentation, and set up the development environment. Attended orientation sessions and started familiarizing with company culture and processes.',
      skillsUsed: ['Git', 'Documentation Review', 'Environment Setup'],
      majorProgress: [
        'Successfully set up development environment',
        'Completed codebase orientation',
        'Met all team members and understood project structure',
      ],
      images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop'],
    },
    {
      weekNumber: 2,
      description: 'Started working on first feature - user authentication module. Implemented login/signup functionality with JWT tokens and secure password hashing. Collaborated with backend team to design API endpoints.',
      skillsUsed: ['React', 'Node.js', 'JWT', 'Database Design', 'API Development'],
      majorProgress: [
        'Completed authentication module frontend',
        'Implemented secure API endpoints',
        'Wrote comprehensive unit tests for auth logic',
      ],
      images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop'],
    },
    {
      weekNumber: 3,
      description: 'Focused on building the dashboard UI with responsive design. Implemented data visualization components and integrated with backend APIs. Conducted code reviews and learned best practices from senior developers.',
      skillsUsed: ['React', 'Tailwind CSS', 'Charts.js', 'Responsive Design', 'TypeScript'],
      majorProgress: [
        'Created responsive dashboard layout',
        'Integrated data visualization components',
        'Improved performance with lazy loading',
      ],
      images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop'],
    },
    {
      weekNumber: 4,
      description: 'Worked on backend optimization and database queries. Implemented caching strategies and improved API response times. Participated in sprint planning and estimation sessions.',
      skillsUsed: ['PostgreSQL', 'Redis', 'Performance Optimization', 'SQL', 'Agile'],
      majorProgress: [
        'Reduced API response time by 40%',
        'Implemented Redis caching layer',
        'Optimized database queries',
      ],
      images: ['https://images.unsplash.com/photo-1460925895917-adf4e565016c?w=800&h=800&fit=crop'],
    },
  ];

  return (
    <main>
      {/* Intern Information Section */}
      <InternInfo {...internData} />

      {/* Objectives Section */}
      <ObjectivesSection objectives={objectives} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Weekly Reports Section */}
      <WeeklyReportsSection weeks={weeks} />

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-foreground/60">
          <p>© 2026 Jhon Clein Pagarogan. Internship Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
