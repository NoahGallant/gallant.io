import CustomForm from './customform'
import LinkButton from './linkbutton'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const url = 'https://network.us18.list-manage.com/subscribe/post?u=2bc458c9caf451842cacdb141&amp;id=9c297f9d58'

const Sale = () => (
  <div>
    <section id="sale">
      <div className="section-inner">
        <h2 className="center-text">Sale</h2>
        <div className="flex-row mt2">
          <p className="sale-text">The <span className="sight">Sight</span> token is an ERC20 token traded on the Ethereum blockchain. We will perform a series of coin releases to raise funding and allow public access to the token network.</p>
          <div className="form-box ml2">
            <h4 className="mt0">Stay Notified about Coin Releases</h4>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      .form-box {
        border: var(--border-style);
        border-radius: 10px;
        box-shadow: 4px 6px 0px 0px var(--theme-accent);
        padding: 2rem;
      }
      @media (min-width: 52em) {
        .sale-text {
          margin-left: 2rem;
          max-width: 24rem;
          text-align:right;
          padding: 1rem 1rem 0 0rem;
        }
      }
      @media (max-width: 52em) {
        .form-box {
          margin: 2rem auto 0 auto;
        }

    `}</style>
  </div>
)

export default Sale
