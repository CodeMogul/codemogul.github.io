import { h } from 'preact';

export default function InstituteTitle({
  title,
  duration,
  name,
  website = "#",
  className,
  style,
}) {
  return (
    <div className={className} style={style}>
      <h3 className="flex-apart">
        <span>{title}</span>
        <small>{duration}</small>
      </h3>
      <a href={website} target="_blank" className="light">
        <i className="far fa-building" />{name}
      </a>
    </div>
  );
}
