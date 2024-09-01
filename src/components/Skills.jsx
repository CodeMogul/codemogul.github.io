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

export default function Skills() {
  return (
    <section class="skills">
      <h2>Key Skills</h2>

      <h3>Frameworks | Tools</h3>
      <ul>
        {skills1.map(skill => <li>{skill}</li>)}
      </ul>

      <h3>Other Skills</h3>
      <ul>
        {skills2.map(skill => <li>{skill}</li>)}
      </ul>
    </section>
  )
}
