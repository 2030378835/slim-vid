import { flowSteps } from '../../data/content'
import './Flow.less'

export function Flow() {
  return (
    <section className="section flow" id="flow">
      <div className="container">
        <header className="flow__head">
          <span className="section__eyebrow">Workflow</span>
          <h2 className="section__title">三步压完</h2>
          <p className="section__lead">没有复杂工程流，打开就能用。</p>
        </header>

        <ol className="flow__steps">
          {flowSteps.map((item) => (
            <li key={item.step} className="flow__step">
              <span className="flow__num">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
