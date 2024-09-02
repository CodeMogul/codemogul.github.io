import { h } from 'preact';
import Article from '../components/Article';

const achievements = [
  {
    title: 'Ultimate Contributor Award at Bizongo (2022)',
    description: 'One of the 3 Employee of the Year awards presented to top 3 employees of the organisation.'
  },
  {
    title: 'The Perfectionist Award at Bizongo (2019)',
    description: 'Awarded yearly to one employee from the Product and Engineering team, with great attention to detail in their work.'
  },
  {
    title: 'Runner Up at Hackathon Next Education (2018)',
    description: 'Conceptualized and developed a hack which got materialised into production feature, that used computer vision to detect symbols on a paper to move an object on the screen.'
  }
];

export default function Achievements() {
  return (
    <section>
      <h2>Achievements</h2>
      {
        achievements.map(achievement => (
          <Article title={achievement.title} titleIcon="fas fa-trophy">
            <p>{achievement.description}</p>
          </Article>
        ))
      }
    </section>
  )
}
