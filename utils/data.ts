import { api } from "./api";
import { IEvent, IPerson, IProject, ISponsor } from "./types";

let data = {} as any as {
    sponsors: ISponsor[];
    people: IPerson[];
    projects: IProject[];
    events: IEvent[];
};

let dataFetched = false;

export const useData = async () => {
    if (!dataFetched) {
        const sponsorsRes = await api.get("?target=sponsors");
        const sponsors: ISponsor[] = await sponsorsRes.json();

        const peopleRes = await api.get("?target=leadership");
        const people: IPerson[] = await peopleRes.json();

        const projectsRes = await api.get("?target=projects");
        const projects: IProject[] = await projectsRes.json();

        const eventsRes = await api.get("?target=events");
        const events: IEvent[] = await eventsRes.json();

        data = { sponsors, people, projects, events };
        dataFetched = true;
    }

    return data;
}