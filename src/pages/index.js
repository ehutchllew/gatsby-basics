import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components"
const IndexPage = () => (
    <div>
        <Layout>
            <h1>Hello.</h1>
            <p>
                need a dev? <Link to="/contact">Contact Me.</Link>
            </p>
        </Layout>
    </div>
)

export default IndexPage
