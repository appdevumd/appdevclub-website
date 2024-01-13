import { PropsWithChildren } from "react";
import styles from "./styles.module.css"
import { ISponsor } from "@/utils/types";

const SponsorCard: React.FC<ISponsor>= ({ name, logo, tier }) => {
    return (
        <div className={styles.sponsor}>
            <img src={logo} alt={`${name} logo`} />
            <h4>{name}</h4>
            <small>{tier} Sponsor</small>
        </div>
    )
}

export default SponsorCard;