import { features } from '../../data/content'
import './Features.less'

export function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <header className="features__head">
          <span className="section__eyebrow">Features</span>
          <h2 className="section__title">压缩该有的都在</h2>
          <p className="section__lead">从入队到结果对比，流程尽量短；画质与体积由你决定。</p>
        </header>

        <div className="features__list">
          {features.map((item, index) => (
            <article key={item.id} className="features__item" style={{ ['--i' as string]: index }}>
              <span className="features__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
