import { h } from 'preact';

const skills1 = [
  'React',
  'Javascript',
  'Fastify',
  'Ruby on Rails',
  'Postgres',
  'Python',
  'Docker',
  'Webpack',
  'AWS (S3 / Lambda / EC2 / RDS)'
];

const skills2 = [
  'System Design',
  'Team Building',
  'Mentorship',
  'Critical Thinking'
];

const allSkills = [
  {
    title: 'Languages',
    skills: [
      'Java',
      'Javascript',
      'Ruby',
      'Python',
      'HTML',
      'SQL'
    ],
  },
  {
    title: 'Frameworks / Libraries',
    skills: [
      'Spring Boot',
      'Rails',
      'React',
      'Fastify',
      'FastAPI',
    ],
  },
  {
    title: 'Databases / Tools / Cloud',
    skills: [
      'Postgres',
      'Redis',
      'Docker',
      'Kubernetes',
      'AWS',
      'GCP',
    ],
  }
];

export default function Skills() {
  return (
    <section class="skills">
      <h2>Skills</h2>

      {
        allSkills.map(item => (
          <>
            <h4>{item.title}</h4>
            <ul>
              {item.skills.map(skill => <li>{skill}</li>)}
            </ul>
          </>
        ))
      }

    </section>
  )
}
