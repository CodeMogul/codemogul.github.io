import { h } from 'preact';
import Article from '../components/Article';

const projects = [
  // {
  //   name: 'Cloud Kitchen POS',
  //   pars: [
  //     'Developing a Smart POS for cloud kitchens with integration to Zomato, Swiggy APIs using Fastify and React.',
  //   ]
  // },
  //- {
  //-   name: 'Easy 2FA',
  //-   pars: [
  //-     'Building a pluggable Two Factor Authentication Service',
  //-     'Allows to integrate 2FA in your app and choose from multiple verification channels SMS, Email, Push Notification, QR, TOTP.'
  //-   ]
  //- },
  // {
  //   name: 'Automated Parking System',
  //   pars: [
  //     'Built a battery powered module to detect occupied slots in a parking lobby.',
  //     'Stack: MERN, Modules: ESP8266-E12, magnetometer, ultrasonic sensor'
  //   ]
  // },
  //- {
  //-   name: 'Crypt Tweet',
  //-   pars: [
  //-     'Track the tweets of a set of users and detect some pre-fixed keywords',
  //-     'Place Limit orders using Bittrex API and notify the client on Telegram'
  //-   ]
  //- }
    {
    name: 'Comply AI',
    pars: [
      "Led the design and development of a Scalable Distributed Backend for Artwork Flow's ComplyAI module",
      'Developed mutiple ML models with the team, for automated regulatory checks of Creatives and Labels.',
      'This particular project led to multiple client conversions upwards of $50K.'
    ]
  },
  {
    name: 'User Management and Access Control',
    pars: [
      'Spearheaded the transition to a microservices architecture, significantly enhancing system reliability and deployment flexibility.',
      'Undertook the segregation and implemention of a scalable user authentication, authorization and subscription management framework.'
    ]
  },
]

export default function Projects() {
  return (
    <section>
      <h2>Key Projects</h2>
      {
        projects.map(project => (
          <Article title={project.name} titleIcon="fas fa-briefcase">
            <ul>
              {project.pars.map(par => <li>{par}</li>)}
            </ul>
          </Article>
        ))
      }
    </section>
  )
}
