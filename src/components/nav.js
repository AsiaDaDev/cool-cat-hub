import * as React from 'react'
import { Link } from 'gatsby'
import {
  navContainer,
  navLinks,
  navLinkItems,
  navLinkText
} from '../styles/component_styles/nav.module.css'

const Nav = () => {
  return (
    <nav className={navContainer}>
        <Link to="/">Cool Cat Hub</Link>
        <ul className={navLinks}>
          <li className={navLinkItems}>
            <Link to="guides" className={navLinkText}>Guides</Link>
          </li>
          <li className={navLinkItems}>
            <Link to="news" className={navLinkText}>News</Link>
          </li>
          <li className={navLinkItems}>
            <Link to="reviews" className={navLinkText}>Reviews</Link>
          </li>
          <li className={navLinkItems}>
            <Link to="/quizzes" className={navLinkText}>Quizzes</Link>
          </li>
          <li className={navLinkItems}>
            <Link to="/about-us" className={navLinkText}>About Us</Link>
           </li>
        </ul>
    </nav>
  )
}
export default Nav