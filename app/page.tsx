'use client';

import { InternInfo } from '@/components/intern-info';
import { ObjectivesSection } from '@/components/objectives-section';
import { ProjectsSection } from '@/components/projects-section';
import { WeeklyReportsSection } from '@/components/weekly-reports-section';

export default function Home() {
  // Sample data - Replace with your actual information
  const internData = {
    name: 'Your Name Here',
    position: 'Full Stack Developer Intern',
    company: 'Tech Company Inc.',
    bio: 'Passionate developer eager to learn and contribute to real-world projects. Experienced with modern web technologies and committed to delivering high-quality solutions.',
    email: 'your.email@example.com',
    phone: '+1 (555) 000-0000',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    linkedIn: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourprofile',
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
      title: 'E-Commerce Platform',
      description: 'Developed a full-featured e-commerce platform with product catalog, shopping cart, and payment integration. Implemented real-time inventory management and order tracking system. This project showcases my ability to build scalable, production-ready applications with complex business logic.',
      purpose: 'To create a scalable online shopping platform that handles thousands of concurrent users while maintaining high performance and security standards. The system required careful consideration of database design, caching strategies, and API optimization.',
      contributors: ['John Doe', 'Jane Smith', 'Your Name'],
      screenshots: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-adf4e565016c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
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
          <p>© 2024 Your Name. Internship Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
