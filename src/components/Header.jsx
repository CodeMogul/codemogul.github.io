import { h } from 'preact'

const content = {
  profile: {
    name: 'Siddhesh Nachane',
    designation: 'Engineering Manager',
    location: 'Bangalore, India'
  },
  social_handles: [
    {
      href: 'mailto:siddheshn19@gmail.com',
      icon: 'fas fa-envelope',
      target: '',
      text: 'siddheshn19@gmail.com'
    },
    {
      href: 'tel:+918233712380',
      icon: 'fas fa-address-book',
      target: '',
      text: '+91-8233712380'
    },
    {
      href: 'https://in.linkedin.com/in/siddhesh-nachane',
      icon: 'fab fa-linkedin',
      target: '_blank',
      text: 'siddhesh-nachane'
    },
    {
      href: 'https://github.com/CodeMogul',
      icon: 'fab fa-github',
      target: '_blank',
      text: 'codemogul'
    }
  ],
};

export default function Header() {
  return (
    <header className="grid">
      <div>
        <h1>{content.profile.name}</h1>
        <p>{content.profile.designation}</p>
        <p>{content.profile.location}</p>
      </div>

      <ul className="contact-info">
        {
          content.social_handles.map(handle => (
            <li>
              <a href={handle.href} target={handle.target}>
                <i className={handle.icon} />&nbsp;<span>{handle.text}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </header>
  )
}
