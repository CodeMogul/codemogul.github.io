import { h } from 'preact'

const jobs = [
  {
    org: 'Bizongo',
    website: 'https://bizongo.com/',
    role: {
      designation: 'Senior Software Engineer',
      duration: 'June, 2020 - Present'
    },
    pars: [
      'Improved scalability and stability of multiple services including Artwork Management, UI Infra, User Management, Notifications, while maintaining code quality and extensibility.',
      'Designed and implemented configurable Micro Frontends in React for Cataloguing and User Management services, for faster integration with other applications.',
      'Helped Sales Team attain first 10 Enterprise Clients within 3 months, by being actively involved in Client Engagements, Feasibility Analysis and Support.'
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
      'Worked on an Artwork Management Tool that tracks an Artwork through various stages of approvals.',
      'Developed features across stack using RoR, React, AWS S3 and AWS Lambda.',
      'Implemented multiple modules including Payments & Subscriptions, Asset Manager, Artwork Proofing Viewer, Custom Client Forms and more.'
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
      'Lead a team of four for a modular programmable robot powered by the Compute Module 3.',
      'Worked across hardware and software stack throughout the product development cycle.',
      "Built a desktop app using Electron.js, React and Google's Blockly, and used Python + C over MQTT for hardware manipulation through IPC."
    ]
  },
  //- {
  //-   org: 'NIIT Limited',
  //-   website: 'https://www.niit.com/india/',
  //-   role: {
  //-     designation: 'Software Engineer - Intern',
  //-     duration: 'Summer & Winter 2015'
  //-   },
  //-   pars: [
  //-     'Built several Report Generation Modules for NIIT ERP using .NET Technologies',
  //-     'Worked on C#, RDLC, SQL Server and LINQ.'
  //-   ]
  //- }
];

export function InstituteTitle({
  title,
  duration,
  name,
  website = "#",
}) {
  return (
    <>
      <h3 className="flex-apart">
        <span>{title}</span>
        <small>{duration}</small>
      </h3>
      <a href={website} target="_blank" className="light">
        <i className="far fa-building" />{name}
      </a>
    </>
  );
}

export default function Workex() {
  return (
    <section>
      <h2>Work Experience</h2>

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
