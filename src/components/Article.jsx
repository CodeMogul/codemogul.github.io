import { h } from 'preact';

export default function Article({
  title,
  titleIcon,
  className,
  children,
  style
}) {
  return (
    <article className={className} style={style}>
      <h4>
        {titleIcon && <i className={titleIcon} />}
        {title}
      </h4>
      {children}
    </article>
  )
}
