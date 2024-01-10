import styles from "./styles.module.css"

const Navigation: React.FC<{}>= () => {
    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src="/logo.png" alt="App Dev Club Logo" />

            <a>Welcome</a>
            <a>About</a>
            <a>Sponsors</a>
            <a>People</a>
            <a>Projects</a>
            <a>Events</a>
            <a>Testimonials</a>
            <a>Important Links</a>
            <a>Contact Us</a>
        </nav>
    )
}

export default Navigation;