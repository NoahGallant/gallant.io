import Head from './head'
import Link from 'next/link'
import NavBar from './navbar'

const links = [
  { href: '#token', label: 'Token' },
  { href: '#publish', label: 'Publish' },
  { href: '#sale', label: 'Sale' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#about', label: 'About' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = (props) => (
  <nav>
    <NavBar
      links={links}
      hideTitle='true'
    />
  </nav>
)

export default Nav
