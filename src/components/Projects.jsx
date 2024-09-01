import { h } from 'preact';

const projects = [
  {
    name: 'Cloud Kitchen POS',
    pars: [
      'Developing a Smart POS for cloud kitchens with integration to Zomato, Swiggy APIs using Fastify and React.',
    ]
  },
  //- {
  //-   name: 'Easy 2FA',
  //-   pars: [
  //-     'Building a pluggable Two Factor Authentication Service',
  //-     'Allows to integrate 2FA in your app and choose from multiple verification channels SMS, Email, Push Notification, QR, TOTP.'
  //-   ]
  //- },
  {
    name: 'Automated Parking System',
    pars: [
      'Built a battery powered module to detect occupied slots in a parking lobby.',
      'Stack: MERN, Modules: ESP8266-E12, magnetometer, ultrasonic sensor'
    ]
  },
  //- {
  //-   name: 'Crypt Tweet',
  //-   pars: [
  //-     'Track the tweets of a set of users and detect some pre-fixed keywords',
  //-     'Place Limit orders using Bittrex API and notify the client on Telegram'
  //-   ]
  //- }
]

export default function Projects() {

  return (
    <section>
      <h2>Projects</h2>
      {
        projects.map(project => (
          <article>
            <h3>{project.name}</h3>
            <ul>
              {project.pars.map(par => <li>{par}</li>)}
            </ul>
          </article>
        ))
      }
    </section>
  )
}
