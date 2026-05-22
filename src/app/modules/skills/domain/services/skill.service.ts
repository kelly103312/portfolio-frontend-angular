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
            category: 'Backend',
            description: 'Managing complex relational data and ensuring consistency.'
        },
        {
            id: '5',
            title: 'Clean Architecture',
            icon: 'pi pi-shield',
            category: 'Tools',
            description: 'Separating business logic from technical details for maintainability.'
        },
        {
            id: '6',
            title: 'Git & CI/CD',
            icon: 'pi pi-github',
            category: 'Tools',
            description: 'Version control and automated deployment pipelines for reliable releases.'
        },
        {
            id: '7',
            title: 'PrimeNG',
            icon: 'pi pi-prime',
            category: 'Frontend',
            description: 'PrimeNG is a rich UI component library for Angular that provides a wide range of pre-built components for building modern web applications.'
        },
        {
            id: '8',
            title: 'Python',
            icon: 'pi pi-warehouse',
            category: 'Backend',
            description: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It is dynamically typed and supports multiple programming paradigms, including procedural, object-oriented, and functional programming.'
        },
        {
            id: '9',
            title: 'JavaScript',
            icon: 'pi pi-align-justify',
            category: 'Frontend',
            description: ''
        },
        {
            id: '10',
            title: 'AWS',
            icon: 'pi pi-amazon',
            category: 'Tools',
            description: 'Amazon Web Services is a comprehensive, evolving cloud platform that provides services ranging from compute power, storage, and databases to machine learning, analytics, and developer tools.'
        },
        {
            id: '11',
            title: 'Docker',
            icon: 'pi pi-prime',
            category: 'Tools',
            description: 'Docker is a platform for developing, shipping, and running applications in containers. It allows developers to package their applications and all their dependencies into a single container, ensuring that the application runs consistently across different environments.'
        },

    ];

    getSkills(): Observable<Skill[]> {
        return of(this.Skills);
    }
}
