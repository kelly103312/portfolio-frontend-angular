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
            company: 'INTL COFFEE',
            position: 'Software Development Engineer',
            period: '2026 - 2026',
            description: 'Developed a contract and sales order management portal using Angular, PrimeNG, and FastAPI, implementing RESTful APIs and backend architecture solutions. Deployed applications on AWS with database integration and configured CI/CD pipelines using Docker and GitHub Actions. Also provided support for testing and demo environments to ensure application stability and delivery.',
            icon: 'pi pi-briefcase'
        },
        {
            id: 2,
            company: 'Redcolsa SA',
            position: 'Development Assistant',
            period: '2023 - 2026',
            description: 'Developed internal enterprise portals and transactional systems using Spring Boot, Angular, PHP, and JavaScript, including microservices and REST API integrations between organizational systems. Automated RPA-like processes in Python for automatic report generation and delivery, and implemented ETL workflows for internal data processing. Additionally, managed repositories and workflows with Git and Azure DevOps, executed functional testing, and supported deployments and basic on-premise infrastructure operations.',
            icon: 'pi pi-briefcase'
        },
        {
            id: 3,
            company: 'AJ Digital Sales',
            position: 'Developer',
            period: '2022 - 2023',
            description: 'Developed modules and web functionalities using PHP (CodeIgniter), JavaScript, HTML, and CSS, implementing backend logic with classes, functions, and control structures in PHP. Integrated and maintained SQL database functionalities while supporting existing platform improvements, and managed source code versioning and collaboration workflows using Bitbucket.',
            icon: 'pi pi-briefcase'
        },
        {
            id: 4,
            company: 'Actualicese.com',
            position: 'Intern',
            period: '2021 - 2022',
            description: 'Developed functionalities for Email Marketing projects using Python and PHP, including integrations between WordPress and CRM platforms through custom plugins. Participated in the maintenance, optimization, and continuous improvement of web functionalities and internal digital solutions.',
            icon: 'pi pi-briefcase'
        }
    ];

    getExperiences(): Observable<Experience[]> {
        return of(this.experiences);
    }
}
