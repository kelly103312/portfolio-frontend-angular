import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {
    private experiences: Experience[] = [
        {
            id: 1,
            company: 'Tech Solutions Inc.',
            position: 'Senior Frontend Developer',
            period: '2022 - Presente',
            description: 'Lideré el desarrollo de la arquitectura del frontend utilizando Angular y PrimeNG. Mejoré el rendimiento de la aplicación web en un 40% e implementé buenas prácticas de Clean Architecture y Screaming Architecture.',
            icon: 'pi pi-briefcase'
        },
        {
            id: 2,
            company: 'Creative Web Agency',
            position: 'Desarrollador Web Full Stack',
            period: '2019 - 2022',
            description: 'Participé en la creación de múltiples proyectos web para clientes internacionales. Integración de APIs REST, creación de interfaces dinámicas y optimización SEO.',
            icon: 'pi pi-briefcase'
        },
        {
            id: 3,
            company: 'Startup Innovadora',
            position: 'Desarrollador Junior',
            period: '2018 - 2019',
            description: 'Colaboré en el desarrollo del MVP de la plataforma principal de la startup. Aprendizaje intensivo de metodologías ágiles y trabajo en equipo.',
            icon: 'pi pi-briefcase'
        }
    ];

    getExperiences(): Observable<Experience[]> {
        return of(this.experiences);
    }
}
