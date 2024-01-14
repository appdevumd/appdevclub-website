export interface ISponsor {
    name: string;
    tier: string;
    logo: string;
}

export interface IProject {
    name: string;
    company: string;
    term: string;
    overview: string;
    video: string;
    shouldPublish: boolean;
}

export interface IEvent {
    name: string;
    location: string;
    dateTime: string;
    shouldPublish: boolean;
}

export interface IPerson {
    name: string;
    role: string;
    image: string;
}

export interface ILeadership extends IPerson {
    github: string;
    linkedin: string;
    website: string;
    shouldPublish: boolean;
}

export interface IProjectMember extends IPerson {
    project: string;
    term: string;
    gravatarEmail: string;
    shouldPublish: "yes" | "no";
}

export interface ITestimonial {
    name: string;
    testimonial: string;
}