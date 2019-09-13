import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components"

const AboutPage = () => (
    <Layout>
        <h1>About</h1>
        <p>Some witty stuff.</p>
        <p>
            <Link to="/contact">Contact me</Link>, or whatever.
        </p>
    </Layout>
)

export default AboutPage
