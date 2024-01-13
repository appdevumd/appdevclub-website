import { PropsWithChildren } from "react";
import styles from "./styles.module.css"

const SponsorCard: React.FC<{
    name: string;
    tier: string;
    logo: string;
}>= ({ name, logo, tier }) => {
    return (
        <div className={styles.sponsor}>
            <img src={logo} alt={`${name} logo`} />
            <h4>{name}</h4>
            <small>{tier} Sponsor</small>
        </div>
    )
}

export default SponsorCard;