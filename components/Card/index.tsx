import { PropsWithChildren } from "react";
import styles from "./styles.module.css"

const Card: React.FC<PropsWithChildren<{
    title: string;
}>>= ({ title, children }) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <hr />
            {children}
        </div>
    )
}

export default Card;