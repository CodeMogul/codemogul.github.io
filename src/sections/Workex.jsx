import { h } from 'preact';
import InstituteTitle from '../components/InstituteTitle';

const jobs = [
  {
    org: 'Bizongo',
    website: 'https://bizongo.com/',
    role: {
      designation: 'Engineering Manager',
      duration: 'Oct, 2022 - Present'
    },
    pars: [
      "Led a team of 18 software engineers to develop a scalable Creative Ops System, improving data processing speed for the clients by 66%.",
      "Developed a talent growth strategy that resulted in a 40% increase in team productivity over a 1-year period.",
      "Coordinated with the sales and marketing departments to align product features with market needs, driving a 15% increase in market share.",
      "Liaised with key clients to understand their unique requirements and manage partnership integration, tailoring products that led to a 30% increase in annual recurring revenue.",
      "Worked with various vendors and external teams for compliance certifications including SOC 2 Type 2, ISO and CCSV.",
      "Negotiated with external software vendors to integrate cutting-edge technologies, enhancing system capabilities and user experience.",
    ]
  },
  {
    org: 'Bizongo',
    website: 'https://bizongo.com/',
    role: {
      designation: 'Senior Software Engineer | Technical Lead',
      duration: 'June, 2020 - Oct, 2022'
    },
    pars: [
      "Played a key role in the re-architecture of various APIs for Bizongo's platform services including User Management and Notification Services.",
      "Established a DevOps culture, by migrating to K8s and improving the team's operational efficiencies and application availability.",
      "Developed and implemented a comprehensive security (access-control) protocol for software projects, reducing vulnerability incidents by 40%.",
      "Managed software release schedules across multiple teams, ensuring on-time delivery for 95% of projects.",
    ]
  },
  {
    org: 'Bizongo',
    website: 'https://bizongo.com/',
    role: {
      designation: 'Software Development Engineer - 2',
      duration: 'Jan, 2019 - June, 2020'
    },
    pars: [
      "Helped develop Bizongo's UI Library 'ui-infra' to promote standardization of components across Bizongo products.",
      'Leveraged Ruby on Rails, React, AWS S3, AWS Lambda and tools to develop features across stack.',
      'Implemented multiple modules including Payments & Subscriptions, Asset Manager, Proofing Viewer, Custom Client Forms and more.'
    ]
  },
  {
    org: 'Next Education India Pvt Ltd',
    website: 'https://www.nexteducation.in/',
    role: {
      designation: 'R&D Engineer',
      duration: 'Jan, 2017 - Dec, 2018'
    },
    pars: [
      'Lead a team of four to develop a modular programmable robot powered by the Compute Module 3.',
      'Worked across hardware and software stack throughout the product development cycle.',
      "Built a desktop app using Electron.js, React and Google's Blockly, and used Python + C over MQTT for hardware manipulation through IPC."
    ]
  },
  // {
  //   org: 'NIIT Limited',
  //   website: 'https://www.niit.com/india/',
  //   role: {
  //     designation: 'Software Engineer - Intern',
  //     duration: 'Summer & Winter 2015'
  //   },
  //   pars: [
  //     'Developed multiple report generation modules for NIIT ERP utilizing .NET technologies, including C#, RDLC, SQL Server, and LINQ, to enhance data reporting and analysis capabilities.'
  //   ]
  // }
];

export default function Workex() {
  return (
    <section>
      <h2>Professional Experience</h2>

      {
        jobs.map(job => (
          <article>
            <InstituteTitle
              title={job.role.designation}
              duration={job.role.duration}
              name={job.org}
              website={job.website}
            />
            <ul>
              {job.pars.map(par => <li>{par}</li>)}
            </ul>
          </article>
        ))
      }
    </section>
  )
}
