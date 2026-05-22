export interface Skill {
    id: string;
    title: string;
    icon?: string;
    category: 'Frontend' | 'Backend' | 'Tools';
    description?: string;
}
