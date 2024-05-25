export interface Project {
    slug: string;
    title: string;
    description: string;
    codeLink: string | null;
    images: {
        url: string;
        description: string;
    }[];
    technologies: string[];
}
