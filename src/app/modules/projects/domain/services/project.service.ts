import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projects: Project[] = [
        {
            id: '1',
            title: 'E-commerce Dashboard',
            description: 'A comprehensive dashboard for managing online store sales, products, and customers with real-time analytics.',
            technologies: ['Angular', 'PrimeNG', 'RxJS', 'Node.js'],
            liveUrl: 'https://example.com'
        },
        {
            id: '2',
            title: 'Task Management Tool',
            description: 'A collaborative Kanban-style task management app utilizing the Screaming Architecture pattern.',
            technologies: ['Angular', 'Clean Architecture', 'Tailwind', 'Firebase'],
            repoUrl: 'https://github.com'
        },
        {
            id: '3',
            title: 'Portfolio Website',
            description: 'A modern, premium personal portfolio showcasing frontend development skills and projects.',
            technologies: ['Angular', 'PrimeFlex', 'CSS Animations'],
            repoUrl: 'https://github.com',
            liveUrl: 'https://example.com'
        }
    ];

    getProjects(): Observable<Project[]> {
        return of(this.projects);
    }
}
