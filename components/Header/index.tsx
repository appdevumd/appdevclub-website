import { PropsWithChildren } from "react";
import styles from "./styles.module.css"

const Header: React.FC<PropsWithChildren<{}>>= ({ children }) => {
    return (
        <header id="top" className={styles.header}>
            {children}
        </header>
    )
}

export default Header;