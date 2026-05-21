import { Injectable } from '@angular/core';
import { Formation } from '../models/formation.model';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormationService {
    private formations: Formation[] = [
        {
            id: '1',
            institution: 'University of Valle',
            degree: 'Information Systems Technologist',
            period: '2019-2021',
            description: 'Training in software development, systems architecture, and database management.',
            icon: 'pi pi-graduation-cap',
            type: 'academic'
        },
        {
            id: '2',
            institution: 'Platzi',
            degree: 'PostgreSQL',
            period: '2025',
            description: 'Introduction to PostgreSQL and database management.',
            icon: 'pi pi-database',
            type: 'course'
        },
        {
            id: '3',
            institution: 'Platzi',
            degree: 'Introducción a DevOps',
            period: '2024',
            description: 'Introduction to DevOps and Continuous Integration and Delivery.',
            icon: 'pi pi-book',
            type: 'course'
        },
        {
            id: '4',
            institution: 'Udemy',
            degree: 'Foundations of software architecture',
            period: '2024',
            description: 'Foundations of software architecture, design patterns, and best practices.',
            icon: 'pi pi-box',
            type: 'course'
        },
        {
            id: '5',
            institution: 'CertiPorf',
            degree: 'SCRUM',
            period: '2024',
            description: 'Fundamentals of Scrum and agile methodologies for development teams.',
            icon: 'pi pi-check-circle',
            type: 'course'
        }
    ];

    getFormations(): Observable<Formation[]> {
        return of(this.formations);
    }
}
