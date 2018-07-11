import Globe from './globe'

const Philosophy = () => (
  <div>
    <section id="philosophy">
      <div className="section-inner">
        <h2 className="center-text">Philosophy</h2>
        <div className="flex-row mt2">
          <div className="holder ml2">
            <Globe />
          </div>
          <p className="philosophy-text">We are set on building a future free of sensational journalism and data-abuse. We believe in freeing publishers from the profit = views equation. The internet has given content a new form, lets give its monetization one as well. The impact of this system is a transformed internet focused around creating great content.</p>
        </div>
      </div>
    </section>

    <style jsx>{`
      .section-inner {
        max-width: 42rem;
      }
      .holder {
        margin: 0 auto;
        padding: 2rem;
      }
      @media (min-width: 52em) {
        .philosophy-text {
          margin-right: 2rem;
          max-width: 36rem;
          padding: 1rem 1rem 0 0;
        }
      }
    `}</style>
  </div>
)

export default Philosophy
