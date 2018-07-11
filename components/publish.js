import Billboard from '../components/billboard'
import Border from './border'
import LinkButton from './linkbutton'
import Modal from 'react-modal'
import React from 'react'

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    }
  };

class Publish extends React.Component {

  constructor() {
    super();

    this.state = {
      isTop: true,
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentDidMount() {
    document.addEventListener('scroll2', () => {
      const isTop = window.scrollY < 2000;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
          <section id="publish">
          <div className="content">
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={modalStyle}
                    >
                  <div className="modal">
                      <h3>Join <span>Sight Network</span> Beta</h3>
                      <p>We’d love to hear from creators excited about the future of web publishing. If your organization is interested, get touch via email.
                      </p>
                      <br/>
                      <LinkButton url="mailto:publish@sight.network?subject=Sight%20Network%20Beta" label="publish@sight.network" />
                  </div>
                  </Modal>
            <div className="section-inner">
              <h2 className="center-text">Publish</h2>
              <p className="max-width-1"><strong>You: </strong>A publisher committed to sharing thoughtful, quality media on your online platform.</p>
              <div className="flex-row">
                <img className="arrow" src="/static/arrow.svg" alt="arrow" />
                <p className="pt2"><strong>Us: </strong>An integrated solution to monetizing your content without ads.</p>
              </div>
              <h3 className="center-text">Let&rsquo;s work together.</h3>
              <ol>
                <li>Apply to join Sight Network.</li>
                <li>Add the Sight widget to your website&rsquo;s code.</li>
                <li>Business as usual: keep publishing your content.</li>
                <li>Get rewarded in <span className="sight">Sight</span> tokens whenever a reader clicks to acknowledge their support. Plus, earn interest on tokens.</li>
                <li>Profit! Convert your tokens to USD.</li>
              </ol>
              <div className="mt2 center-text">
                <Border>
                  <button onClick={this.openModal}>Apply to be an initial publisher</button>
                </Border>
                <p>(once Sight Beta is released, publishers must be <a href="/whitepaper.pdf">voted</a> in)</p>
              </div>
              <div className="billboard">
                <Billboard isTop={this.state.isTop} />
              </div>
            </div>
            </div>
          </section>

      <style jsx>{`
        section {
          padding-bottom: 0;
        }
        .partner {
          padding: 2rem;
        }
        .partner img {
          max-width: 12rem;
        }
        .flex-row {
          margin: 0 auto;
          max-width: 48rem;
          justify-content: space-around;
        }
        .empty {
          
          background-clip: content-box;
          height: 100%;
          opacity: ${this.state.isTop ? '1' : '0'};
          position: absolute;
          top: 0;
          transition: all 1s ease;
          width: 100%;
          z-index: -1;
        }
        .arrow {
          display: block;
          padding: 0 1rem;
        }
        .billboard {
          padding-top: 3rem;
        }
        button {
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          font: inherit;
          line-height: normal;
          margin: 0;
          padding: 1rem;
          overflow: visible;
          outline: none;
          text-align: inherit;
          width: auto;
          -webkit-font-smoothing: inherit;
          -moz-osx-font-smoothing: inherit;
          -webkit-appearance: none;
        }
        button::-moz-focus-inner {
          border: 0;
          padding: 0;
        }
        .modal {
          padding: 2rem;
          padding-top:0rem;
          margin: 0 auto;
          text-align:center;
          max-width: 32rem;
        }
        .modal p{
          text-align:center;
        }
        .modal h1{
          margin-top: 0rem;
          margin-bottom:1rem;
        }

        @media (max-width: 52em) {
          .arrow {
            display: none;
          }
        }
      `}</style>
    </div>
    );
  }
}
export default Publish
