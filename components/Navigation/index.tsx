import Link from "next/link";
import styles from "./styles.module.css"

const Navigation: React.FC<{}>= () => {
    return (
        <nav className={styles.nav}>
            <a href="/"><img className={styles.logo} src="/logo.png" alt="App Dev Club Logo" /></a>

            <a href="/#top">Welcome</a>
            <a href="/#about-us">About</a>
            <a href="/#sponsors">Sponsors</a>
            <a href="/#people">People</a>
            <a href="/#projects">Projects</a>
            <a href="/#events">Events</a>
            <a href="/#testimonials">Testimonials</a>
            <a href="/#contact-us">Contact Us</a>
        </nav>
    )
}

export default Navigation;