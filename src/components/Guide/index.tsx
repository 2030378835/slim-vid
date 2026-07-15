import { guideItems } from '../../data/content'
import './Guide.less'

export function Guide() {
  return (
    <section className="section guide" id="guide">
      <div className="container guide__layout">
        <header>
          <span className="section__eyebrow">Guide</span>
          <h2 className="section__title">简单使用说明</h2>
          <p className="section__lead">安装与编码上的几处注意，够用即可。</p>
        </header>

        <div className="guide__items">
          {guideItems.map((item) => (
            <article key={item.title} className="guide__item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
