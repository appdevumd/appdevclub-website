import { CSSProperties, PropsWithChildren } from "react";
import styles from "./styles.module.css"

const Card: React.FC<PropsWithChildren<{
    title: string;
    style?: CSSProperties
}>>= ({ title, style, children }) => {
    return (
        <div id={title.split(" ").join("-").toLowerCase()} className={styles.card} style={style}>
            <h2>{title}</h2>
            <hr />
            {children}
        </div>
    )
}

export default Card;