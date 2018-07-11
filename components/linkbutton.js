import Border from './border'

const LinkButton = ({url, label}) => (
  <div>
    <Border>
      <a href={ url }>
        <div className="border">
          <a>{ label }</a>
        </div>
      </a>
    </Border>

    <style jsx>{`
      .border {
        padding: 1rem;
      }
      a {
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default LinkButton
