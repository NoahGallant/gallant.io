import Globe from './globe'
import React from 'react'
import Content from './content'
import Backgrounds from './backgrounds'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Window extends React.Component {
  state = {
    offset: 0
  }

  getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
  }

  fuck(pc, r, limit, rate){
    if (r >= limit){
      return limit
    }
    if(pc > r){
      pc -= rate
      if (pc < r){
        return r
      }
      else if(pc > r+1){
        return this.fuck(pc, r+1, limit, rate)
      }
      else{
        return pc
      }
    }
    else{
      return pc
    }
  }

  componentDidMount() {
    var event = new Event('scroll2');
    document.addEventListener('scroll', () => {
      var screens = 6;
      var rate = 0.5;
      var total = rate * screens + (screens-1);

      var offset = this.getScrollPercent() * total;


      offset = this.fuck(offset, 1, screens-1, rate);



      this.setState({offset});
      document.dispatchEvent(event);
      this.scrollMe = this.scrollMe.bind(this);
    });
  }

  render() {
    const renderRole = (role, i) => {
      return (
        <li className="role" key={i}><a href={role[0]}>{role[1]}</a> - <span className="context">{role[2]}</span></li>
      )
    }
    
    const renderRoleBr = (role, i) => {
      return (
        <li className="role" key={i}><a href={role[0]}>{role[1]}</a><br/><span className="context">{role[2]}</span></li>
      )
    }

    const renderRoles = (roles, nbr=false) => {
      
      if (nbr){
        roles = roles.map(renderRoleBr)
      }
      else{
        roles = roles.map(renderRole)
      }
      
      return roles
    }

    const jobs = [["https://sight.industries", "Sight", "CEO"],
                  ["https://nautil.us", "Nautilus", "Technology Lead"],
                  ["https://columbia.edu", "Columbia", "Student, Researcher"],
                  ["https://ibm.com", "IBM", "Extreme Blue Intern"],
                  ["https://bcdfa,com", "Design for America", "President"]];

    const past= [["https://research.yale.edu", "Yale Medical School", "Researcher"],
                 ["https://madewithover.com", "Over Apps", "Machine Learning Intern"]];

    const projects = [["https://research.yale.edu", "Sight Network", "Removing ads and paywalls from internet publishing"],
                      ["https://madewithover.com", "Jig", "Simplified music sharing"],
                      ["https://github.com/NoahGallant", "Distributed Sign-in", "Social-engineering-proof authentication"],
                      ["https://github.com/NoahGallant", "Magicrop", "Magical object auto-cropping algorithm"]];


    const renderProjects = renderRoles(projects, true)
    const renderJobs = renderRoles(jobs)
    const renderPast = renderRoles(past)

    return (
      <div className="container">
        <div className="floating-container"></div>
        <Backgrounds offset={this.state.offset}/>
        <div className="floating">
          <Globe offset={this.state.offset}/>
        </div>
        <div className="scroll">
          <Content title={'Hi, I\'m Noah Gallant'} anchor={'noah'}>
            <p>I'm an engineer, designer, artist, developer, and researcher.</p>
            <p className="context">Scroll for more.</p>
          </Content>
          <Content title={'My Work'} anchor={'work'}>
            <h2>Current</h2>
              <ul>{renderJobs}</ul>
              <br/>
            <h2>Past</h2>
              <ul>{renderPast}</ul>
            
          </Content>
          <Content title={'Some Projects'} anchor={'projects'}>
            <ul>
              {renderProjects}
            </ul>
          </Content>
          <Content title={'My Philosophy'} anchor={'philosophy'}>
            <p>
              I believe in designing systems and technologies for humanity. Product innovation will drive society forward so long as we commit ourselves to making great products.
              <br/><br/>
              <i>
              “Design is not just what it looks like and feels like. Design is how it works.”
              </i>
              <br/>
                <span className="context"> - Steve Jobs</span>
              
            </p>
          </Content>
          <Content title={'Interests'} anchor={'interests'}>
            <h2>Skills</h2>
            <ul>
              <li>Design thinking (<a href="https://www.subtraction.com/2018/04/02/in-defense-of-design-thinking-which-is-terrible/">Mostly</a>)</li>
              <li>Web design </li>
              <li>VR (<a href="http://www.normalvr.com/blog/an-open-source-keyboard-to-make-your-own/">Not me but very cool</a>)</li>
              <li>Blockchain for good (<a href="https://bailbloc.thenewinquiry.com">an example</a>)</li>
            </ul>
            <h2>Miscellaneous</h2>
            <ul>
              <li>Hummus</li>
              <li>Sustainable architecture</li>
              <li>Twitter (<a href="https://twitter.com/nglnt">me</a>)</li>
            </ul>
          </Content>
          <Content title={'Reach me'}>
            <ul>
              <li><a href="https://twitter.com/nglnt">Twitter</a></li>
              <li><a href="mailto:nag2145@columbia.edu">Email</a></li>
              <li><a href="https://github.com/NoahGallant">Github</a></li>
              <li><a href="https://keybase.io/noahgallant">Keybase</a></li>
            </ul>
          </Content>
          
        </div>
        <div className="location">
          <img src="../static/globe.svg"/> 
          I am currently in <i>Durham, NC</i>
        </div>
        <div className="noah">
          <AnchorLink className="a" href="#works">Work</AnchorLink><span/>
          <AnchorLink className="a" href="#projects">Projects</AnchorLink><span/>
          <AnchorLink className="a" href="#noah" ><img src="../static/noah.svg"/></AnchorLink><span/>
          <AnchorLink className="a" href="#philosophy">Thoughts</AnchorLink><span/>
          <AnchorLink className="a" href="#interests">Likes</AnchorLink>
        </div>
        <div className="empty">
          <a className="floating-anchor" id="noah"/>
          <a className="floating-anchor" id="works"/>
          <a className="floating-anchor" id="projects"/>
          <a className="floating-anchor" id="philosophy"/>
          <a className="floating-anchor" id="interests"/>
        </div>

        <style jsx>{`
          .floating {
            position:absolute;
            left:30%;
            top: 50%;
            margin-left: var(--window-width);
            margin-top: var(--window-half-width);
            z-index: 1000;
          }
          .scroll{
            width:100%;
            position:fixed;
            top: ${-this.state.offset*100}vh;
            height:600vh;
          }
          .empty{
            width:100%;
            height:750vh;
          }
          @media (min-width: 52em) {
            .hero {
              padding-top: 8rem;
            }
          }
          .location{
            position:fixed;
            bottom: 0;
            line-height:70px;
            width:100%;
            text-align:center;
            color:#1d1d1d;
          }
          .location img{
            vertical-align:middle;
            width: 35px;
            margin-right:20px;
            margin-bottom:3px;
          }
          .noah{
            position:fixed;
            top: 0;
            line-height:70px;
            width:100%;
            text-align:center;
            color: black;
            
          }
          .noah a{
            text-decoration:none;
            font-weight:800px;
          }
          .noah img{
            vertical-align:middle;
            width: 35px;
            margin-bottom:3px;
            margin-right:20px;
            margin-left:20px;
          }
          .noah span{
            margin-left:10px;
            margin-right:10px;
          }
          .floating-anchor{
            position:absolute;
          }
          #noah{
            top:0vh;
          }
          #works{
            top:100vh;
          }
          #projects{
            top:220vh;
          }
          #philosophy{
            top:340vh;
          }
          #interests{
            top:460vh;
          }

          @media (max-width: 700px) {
            .floating {
                left:50%;
                margin-left:var(--window-half-width);
                top:175px;
            }
            body{
              font-size:14px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Window
