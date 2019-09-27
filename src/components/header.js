import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "../styles/header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={styles.header}>
            <h1>
                <Link to="/" className={styles.title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/" activeClassName={styles.activeListItem}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            activeClassName={styles.activeListItem}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            activeClassName={styles.activeListItem}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            activeClassName={styles.activeListItem}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
