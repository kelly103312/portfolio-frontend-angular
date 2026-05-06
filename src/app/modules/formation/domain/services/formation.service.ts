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
            institution: 'Universidad',
            degree: 'Ingeniería en Sistemas / Ingeniería Informática',
            period: '2020 - Presente',
            description: 'Formación en desarrollo de software, arquitectura de sistemas y bases de datos.',
            icon: 'pi pi-graduation-cap'
        },
        {
            id: '2',
            institution: 'Platzi / Udemy',
            degree: 'Angular & Clean Architecture',
            period: '2022 - 2023',
            description: 'Cursos avanzados en Angular, Clean Architecture y patrones de diseño.',
            icon: 'pi pi-book'
        },
        {
            id: '3',
            institution: 'Scrum.org',
            degree: 'Metodologías Ágiles',
            period: '2023',
            description: 'Fundamentos de Scrum y metodologías ágiles para equipos de desarrollo.',
            icon: 'pi pi-check-circle'
        }
    ];

    getFormations(): Observable<Formation[]> {
        return of(this.formations);
    }
}
