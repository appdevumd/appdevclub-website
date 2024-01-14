import styles from "./styles.module.css"
import { ILeadership, IProjectMember } from "@/utils/types";

const PersonCard: React.FC<ILeadership | IProjectMember> = ({ name, role, image, ...misc }) => {
    return (
        <div className={styles.person}>
            <img src={image} alt={`${name} image`} />
            <h4>{name}</h4>
            <small>{role}</small>
        </div>
    );
}

export default PersonCard;