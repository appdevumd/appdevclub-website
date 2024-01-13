import styles from "./styles.module.css"
import { IPerson } from "@/utils/types";

const PersonCard: React.FC<IPerson> = ({ name, role, shouldPublish, ...links }) => {
    return (
        <div className={styles.person}>
            <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`} alt={`${name} image`} />
            <h4>{name}</h4>
            <small>{role}</small>
        </div>
    );
}

export default PersonCard;