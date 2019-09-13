import React from "react"
import { Link } from "gatsby"
import styles from "../styles/header.module.scss"

const Header = () => (
    <header className={styles.header}>
        <h1>
            <Link to="/" className={styles.title}>
                Evan Hutchinson
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
                    <Link to="/blog" activeClassName={styles.activeListItem}>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/about" activeClassName={styles.activeListItem}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" activeClassName={styles.activeListItem}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header
