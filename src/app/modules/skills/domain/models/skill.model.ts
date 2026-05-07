export interface Skill {
    id: string;
    title: string;
    icon?: string;
    category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Architecture';
    description?: string;
}
