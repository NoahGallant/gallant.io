import Link from 'next/link'
import NavBar from './navbar'

const links = [
  { href: '/tos', label: 'Terms of Service' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Footer = () => (
  <footer>
    <NavBar
      links={links}
      isFooter='true'
    />
  </footer>
)

export default Footer
