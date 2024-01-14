import { api } from "./api";
import { sha256 } from "./hash";
import { IEvent, ILeadership, IPerson, IProject, IProjectMember, ISponsor, ITestimonial } from "./types";

let data = {} as any as {
    sponsors: ISponsor[];
    people: ILeadership[];
    projects: IProject[];
    events: IEvent[];
    projectMembers: IProjectMember[];
    testimonials: ITestimonial[];
};

let dataFetched = false;

export const useData = async () => {
    if (!dataFetched) {
        const sponsors = await api.get("sponsors").json<ISponsor[]>();
        const people = await api.get("leadership").json<ILeadership[]>();
        const projects = await api.get("projects").json<IProject[]>();
        const events = await api.get("events").json<IEvent[]>();
        const projectMembers = await api.get("project_members").json<IProjectMember[]>();
        const testimonials = await api.get("testimonials").json<ITestimonial[]>();

        // Add image to project members:
        for (let pm of projectMembers) {
            pm.image = `https://gravatar.com/avatar/${await sha256(pm.gravatarEmail)}`;
        }
        // Add image to leadership:
        people.forEach(p => {
            p.image = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}`;
        });

        data = {
            sponsors, 
            people: people.filter(p => p.shouldPublish), 
            projects: projects.filter(p => p.shouldPublish), 
            events: events.filter(e => e.shouldPublish), 
            projectMembers: projectMembers.filter(m => m.shouldPublish === "yes"),
            testimonials
        };
        dataFetched = true;
    }

    return data;
}