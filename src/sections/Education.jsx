import { h } from 'preact';
import InstituteTitle from '../components/InstituteTitle';

const education = [
  {
    degree: 'B.Tech Computer Science and Engineering',
    duration: '2013 - 2017',
    institute: 'NIIT University',
    website: 'https://www.niituniversity.in/',
  },
  // {
  //   degree: 'Senior Secondary - 12th (CBSE)',
  //   duration: '2011 - 2013',
  //   institute: 'DAV Public School',
  //   website: 'https://davkota.org/',
  // }
];

export default function Education() {
  return (
    <section>
      <h2>Education</h2>

      <div>
        {education.map(edu => (
          <InstituteTitle
            name={edu.institute}
            title={edu.degree}
            duration={edu.duration}
            website={edu.website}
          />
        ))}
      </div>
    </section>
  )
}
