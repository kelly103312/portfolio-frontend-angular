import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SkillService {
    private Skills: Skill[] = [
        {
            id: '1',
            title: 'Angular',
            icon: 'pi pi-prime',
            category: 'Frontend',
            description: 'Building modern, reactive web applications with modular architecture.'
        },
        {
            id: '2',
            title: 'FastAPI',
            icon: 'pi pi-bolt',
            category: 'Backend',
            description: 'Developing high-performance, asynchronous Python APIs.'
        },
        {
            id: '3',
            title: 'SpringBoot',
            icon: 'pi pi-server',
            category: 'Backend',
            description: 'Creating robust and scalable enterprise-level microservices.'
        },
        {
            id: '4',
            title: 'PostgreSQL',
            icon: 'pi pi-database',
            category: 'Database',
            description: 'Managing complex relational data and ensuring consistency.'
        },
        {
            id: '5',
            title: 'Clean Architecture',
            icon: 'pi pi-shield',
            category: 'Architecture',
            description: 'Separating business logic from technical details for maintainability.'
        },
        {
            id: '6',
            title: 'Git & CI/CD',
            icon: 'pi pi-github',
            category: 'Tools',
            description: 'Version control and automated deployment pipelines for reliable releases.'
        }
    ];

    getSkills(): Observable<Skill[]> {
        return of(this.Skills);
    }
}
