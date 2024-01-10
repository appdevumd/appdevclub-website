import styles from "./page.module.css";
import Header from "@/components/Header";

export default function Page() {
    return (
        <main>
            <Header>
                <h1>App Dev Club</h1>
                <p>At the University of Maryland</p>

                <div className={styles.headerBtns}>
                    <a className="btn" target="blank" href="https://discord.com/invite/scSeVbTT7G">Chat with us on Discord</a>
                    <a className="btn" href="https://www.instagram.com/appdev_umd">Follow us on Instagram</a>
                    <a className="btn" href="https://terplink.umd.edu/organization/app-dev-club">Join us on TerpLink</a>
                </div>
            </Header>
        </main>
    );
}