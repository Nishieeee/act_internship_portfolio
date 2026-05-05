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
      description: 'For the first task, I was assigned to setup, run and test the project website. This involved configuring my local environment, setting up the Database and ensuring all features are properly functioning ',
      skillsUsed: ['Django(Python)', 'Documentation Review', 'Environment Setup'],
      majorProgress: [
        'Successfully completed the task on setting up, running and testing the assigned project website.',
        'Successfully resolved underlying bugs that were hindering a smooth migration of the project’s database ',
        'Tested key features and resolved any conflicts that appeared during setup.',
      ],
      images: ['/vawc_portal_ss.png'],
    },
    {
      weekNumber: 2,
      description: 'For this week, I was assigned to continue identifying and resolving any underlying issues and For this week, I was assigned to continue to find and resolve any underlying issues and bugs with the website. This involved thorough testing, debugging and problem-solving to ensure an efficient website',
      skillsUsed: ['Django(Python)', 'Problem-Solving', 'Quality Assurance', 'MySQL'],
      majorProgress: [
        'This week, I was able to identify around 4-5 issues causing some problems with the website’s core functionality and design. Resolving the issues improved website performance by upto 20% and this ensured overall functionalities are solid and user experience is smooth.'
      ],
      images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop'],
    },
    {
      weekNumber: 3,
      description: 'For this week, I was assigned to add a new province to the set of default provinces in user forms and Implement a new case creation with referral function that refers the newly created case to other providers in the website',
      skillsUsed: ['Django(Python)', 'MySQL', 'UI/UX'],
      majorProgress: [
        'This week, I was able to implement a case creation feature with a referral function that lets providers refer a newly create case to other providers and I added in a new province to the set of default provinces in user forms. I successfully implemented 2 major task, achieving 100% progress on the given objectives for this week.'
      ],
      images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop'],
    },
    {
      weekNumber: 4,
      description: 'For this week, The case referral for newly created case made by providers was due, because the for the vawc users was near. So I had to fully test the newly created feature for any bugs or issues that might appear during the test run. After successfully testing the feature, I was tasked to merge my development into the main branch for deployment.',
      skillsUsed: ['Git/Github', 'Deployment', 'Problem-Solving'],
      majorProgress: [
        'This week, I was able to successfully test and resolve the issues found in the newly implemented feature, and I was able to successfully merge my development branch into main, resolving many merge conflicts that appeared during the merge process.'
      ],
      images: ['https://images.unsplash.com/photo-1460925895917-adf4e565016c?w=800&h=800&fit=crop'],
    },
    {
      weekNumber: 5,
      description: 'For this week, I continued working on the merge conflicts, where I was able to restore the missing files and code lost during the merge. After that I started working on the project documentation, I documented every pages and features found in the project. I also created a “How to SetUp the project” guide for the developers who will maintain the project in the future. Lastly, after finishing on the documentation, I was tasked to begin the deployment of the project and to create user manuals for every user of the vawc portal.',
      skillsUsed: ['Git/Github', 'Project Documentatio', 'Problem-Solving'],
      majorProgress: [
        'I was able to restore the missing files that were lost during the merge, and I was able to complete to the project documentation along with the setup guide for future developers. Lastly, I began working with the user manuals, creating the core steps and adding snapshots of the projects.'
      ],
      images: ['/week-5.png'],
    },
    {
      weekNumber: 6,
      description: 'For this week, I did the revisions for the vawc user manuals, ensuring quality manuals and excellent readability for it’s users. After that, I continued to debug on the website. I found a total of 4 bugs in the development server and on the deployed project. The bugs were within two days (Thursday and Friday), and I made sure all the solutions were carefully tested to ensure quality experience for it’s user’s during the demo.',
      skillsUsed: ['Django(Python)', 'Project Documentation', 'Problem-solving', 'Hosting/Deployment'],
      majorProgress: ['This week, I have finished doing the revisions for the vawc user manuals, this ensured that the manuals have excellent readability and completeness. After completing the vawc manuals, I went back again to the project and scoured for bugs or issues that may be lying around in the deployed project. I was able to find 4 bugs/issues and I was able to fix/solve them, ensuring that the vawc portal is ready for next week’s project demo.'],
      images: ['/week-6.png']
    },
    {
      weekNumber: 7,
      description: 'For this week, I was tasked to implement a new feature to prevent the three provider types to edit a referred case. This feature was made to prevent any accidental tampering with case’s details. Next, with the context of case tampering. I implemented a Case History feature where every edit made to a case’s details are recorded, this feature is useful when someone deliberately tamper with a case. Lastly, I was given another task that involves creating test cases for the upcoming training sessions with providers and the DILG.',
      skillsUsed: ['Django(Python)', 'Testing', 'Project Documentation'],
      majorProgress: ['For this week’s accomplishments, I successfully implemented a feature involving case edit privilege preventing any accidental or intentional tampering with case details. Then, I implemented a feature that tracks edit made to a case. This feature further boosts the vawc portal’s security if in case of intentional tampering or case sabotage. Lastly, I was able to achieved 50% progress with the test cases.'],
      images: ['/week-7.png']
    },
    {
      weekNumber: 8,
      description: 'For this week, I continued working on the Test cases for the upcoming vawc training session with the DILG.',
      skillsUsed: ['Django(Python)', 'Testing', 'Project Documentation'],
      majorProgress: ['This week, I was able to create a total of 26 test cases, and were sent to the supervisor-in-charge for review.'],
      images: ['/week-8.png']
    },
    {
      weekNumber: 9,
      description: 'For this week, I implemented the revisions for the vawc test cases. I split the test cases by user and organized every table to ensure readability for my supervisor. Then, I made some refactoring and bug fixes for the website as suggested by my supervisor-in-charge. The task ranged from bug fixes for the report printing features to implementing missing modules/features.',
      skillsUsed: ['Django(Python)', 'Problem-Solving', 'Quality Assurance', 'MySQL', 'Cpanel Web hosting'],
      majorProgress: ['For this week’s accomplishment, I completed the vawc test cases and the alpha was initiated. Then, I implemented a missing report printing feature for the super-admin. After that I did some bug fixing ranging from typographical errors in the ui to solving major issues with the tab switching.'],
      images: ['/week-8.png']
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
