import React from "react"
import { Footer, Header } from "."
import "../styles/index.scss"
import styles from "../styles/layout.module.scss"

const Layout = props => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </section>
    )
}

export default Layout
