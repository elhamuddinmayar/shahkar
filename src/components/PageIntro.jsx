export default function PageIntro({ number, eyebrow, title, description, aside }) {
  return <section className="page-intro"><div className="container page-intro-inner"><div><span className="label-line">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div><div className="page-intro-aside"><span>{number} / 07</span><p>{aside}</p></div></div></section>
}
