export interface ISponsor {
    name: string;
    tier: string;
    logo: string;
}

export interface IPerson {
    name: string;
    role: string;
    github: string;
    linkedin: string;
    website: string;
    shouldPublish: boolean;
}

export interface IProject {
    name: string;
    company: string;
    term: string;
    overview: string;
    video: string;
    shouldPublish: boolean;
}