import { useData } from "@/utils/data";
import Header from "@/components/Header";
import Card from "@/components/Card";
import styles from "./page.module.css";
import SponsorCard from "@/components/SponsorCard";
import PersonCard from "@/components/PersonCard";

export default async function Page({ params }: {
    params: {
        company: string;
    }
}) {
    const data = await useData();

    const project = data.projects.find(p => p.company === decodeURIComponent(params.company));
    const projectMembers = data.projectMembers.filter(m => m.project === project?.company);
    const projectSponsor = data.sponsors.find(s => s.name === project?.company);

    return (
        <main>
            <Header title={project?.name || ""} subtitle={`In collaboration with ${project?.company}`} />

            <Card title="Project Overview">
                <p>
                    {project?.overview}
                </p>
            </Card>

            <Card title="Project Demo" style={{ display: "flex", flexDirection: "column" }}>
                <iframe
                    className={styles.video}
                    src={project?.video}
                    title={`Video demo of project ${project?.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </Card>

            <Card title="Project Members" style={{
                textAlign: "center"
            }}>
                {projectMembers.map(m => (
                    <PersonCard {...m} />
                ))}
            </Card>

            <Card title="Project Sponsors">
                {projectSponsor && (
                    <SponsorCard {...projectSponsor} />
                )}
            </Card>
        </main>
    );
}