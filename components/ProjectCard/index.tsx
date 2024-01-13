import Link from "next/link";
import styles from "./styles.module.css"
import { IPerson, IProject } from "@/utils/types";

const ProjectCard: React.FC<IProject> = ({ name, company, term }) => {
    return (
        <div className={styles.project}>
            <h4>{name}</h4>
            <b><small>{term}</small></b>
            <small>In collaboration with {company}</small>

            <Link className={"btn"} href={`/project/${name}`}>Learn more</Link>
        </div>
    );
}

export default ProjectCard;