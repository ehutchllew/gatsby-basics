import React from "react"
import { Link } from "gatsby"

const AboutPage = () => (
  <section>
    <h1>About</h1>
    <p>Some witty stuff.</p>
    <p>
      <Link to="/contact">Contact me</Link>, or whatever.
    </p>
  </section>
)

export default AboutPage
