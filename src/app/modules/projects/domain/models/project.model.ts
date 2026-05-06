export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    technologies: string[];
    repoUrl?: string;
    liveUrl?: string;
}
