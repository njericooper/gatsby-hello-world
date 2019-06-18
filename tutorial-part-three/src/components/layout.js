import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `2rem`, color: `white`, textDecoration: `none`  }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `0`, width: `100%`, padding: `0`, backgroundColor:`black`, color: `white` }}>
    <header style={{ marginBottom: `1.5rem`, marginTop: `0`, padding: `0` }}>
      <Link to="/" style={{ textShadow: `none` }}>
        <h3 style={{ display: `flex`, color: `white` }}>bloom</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, textDecoration: `none` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)