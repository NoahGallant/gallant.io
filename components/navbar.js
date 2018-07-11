import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import styled from 'styled-components'

const links = [
  { href: '#token', label: 'Token' },
  { href: '#publish', label: 'Publish' },
  { href: '#sale', label: 'Sale' },
  { href: '#about', label: 'About' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const StyledLink = styled(AnchorLink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  & > {
    text-decoration: none;
  }
`;

function NavBar(props) {
  const isFooter = props.isFooter;
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <Link href="/">
            <a><img src="/static/logo-filled.svg" alt="token logo" /></a>
          </Link>
          <span className="text">Sight Network</span>
        </li>
        <ul>
          {props.links.map(
            ({ key, href, label }) => (
              <li key={key} className="nav-link">
                <StyledLink href={href}>
                  {label}
                </StyledLink>
              </li>
            )
          )}
          {isFooter && <li>&copy;2018</li>}
        </ul>
      </ul>

      <style jsx>{`
        .nav-link {
          text-decoration: none;
        }
        .navbar {
          border-top: var(--border-style);
          border-bottom: ${isFooter ? '' : 'var(--border-style)'};
          text-align: center;
          max-width: 100%;
        }
        ul {
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: 0;
        }
        a img {
          padding: 1rem;
          padding-left: 0;
          vertical-align: middle;
        }
        .logo {
          padding: 0 0 0 1.5rem;
        }
        .logo:hover .text {
          opacity: 1;
          transition: opacity .25s ease-in-out;
        }
        .text {
          opacity: ${ 'hideTitle' in props ? '0' : '1'};
          padding: 1.5rem 0;
          transition: opacity .25s ease-in-out;
        }
        li {
          display: flex;
          padding: 1.5rem;
        }
        li > a {
          text-decoration: none;
        }
        @media (max-width: 52em) {
          .text {
            display: none;
          }
          li {
            font-size: 16px;
            padding: 1.5rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default NavBar
