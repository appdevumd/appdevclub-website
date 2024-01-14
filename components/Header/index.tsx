import { PropsWithChildren } from "react";
import styles from "./styles.module.css"

const Header: React.FC<PropsWithChildren<{ title: string; subtitle: string; }>> = ({ title, subtitle, children }) => {
    return (
        <header id="top" className={styles.header}>
            <h1>{title}</h1>
            <p>{subtitle}</p>

            {children}
        </header>
    )
}

export default Header;